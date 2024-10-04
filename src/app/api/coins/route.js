import prisma from "@/lib/prisma"; // Ensure you have prisma set up here
import { NextResponse } from "next/server";

// GET all coins with pagination and search
export async function GET(request) {
  const url = new URL(request.url); // Correctly parse the request URL
  const search = url.searchParams.get("search") || ""; // Get the search parameter
  const page = parseInt(url.searchParams.get("page")) || 1; // Get the page parameter and convert to number
  const userId = parseInt(url.searchParams.get("userId"), 10) || null; // Get the userId from the query params
  const votedUserId = url.searchParams.get("votedUserId")
    ? parseInt(url.searchParams.get("votedUserId"), 10)
    : null; // Get the votedUserId (can be null)
  const limit = parseInt(url.searchParams.get("limit")) || 10; // Get the limit parameter and convert to number

  const skip = (page - 1) * limit;

  // Build the where condition: include userId if provided, and apply search filter
  const whereCondition = {
    ...(search
      ? {
          OR: [
            { name: { contains: search } },
            { symbol: { contains: search } },
          ],
        }
      : {}),
    ...(userId
      ? {
          userId: userId, // Only include coins related to the specific userId
        }
      : {}),
  };

  try {
    // Get the current date and time
    const currentDateTime = new Date();
    // Calculate the date and time for 24 hours ago
    const twentyFourHoursAgo = new Date(
      currentDateTime.getTime() - 24 * 60 * 60 * 1000
    );

    // Fetch coins from the database based on the condition, including related token contract addresses
    const coins = await prisma.coin.findMany({
      where: whereCondition,
      skip,
      take: limit,
      include: {
        tokenContractAddress: true, // Include related token contract addresses
        // Include a count of the votes
        _count: {
          select: { Votes: true },
        },
        // Include all votes (this will not throw an error if votedUserId is null)
        Votes: true,
      },
    });

    // Count total coins for pagination
    const totalCoins = await prisma.coin.count({
      where: whereCondition,
    });

    // Modify the response to include a `hasVoted` field for the logged-in user
    // Calculate last 24 hours vote count for each coin
    const modifiedCoins = await Promise.all(
      coins.map(async (coin) => {
        const last24HourVotesCount = await prisma.vote.count({
          where: {
            coinId: coin.id, // Count votes for this specific coin
            date: {
              gte: twentyFourHoursAgo, // Votes that are greater than or equal to 24 hours ago
            },
          },
        });

        return {
          ...coin,
          voteCount: coin._count.Votes, // Use the _count.Votes for total votes
          last24HourVotesCount, // Count of votes in the last 24 hours for this coin
          hasVoted: votedUserId
            ? coin.Votes.some((vote) => vote.userId === votedUserId)
            : false, // Check if the logged-in user has voted
        };
      })
    );

    return new Response(
      JSON.stringify({
        coins: modifiedCoins,
        totalPages: Math.ceil(totalCoins / limit),
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error fetching coins" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// import prisma from "@/lib/prisma"; // Ensure you have prisma set up here
// import { NextResponse } from "next/server";

// // GET all coins with pagination and search
// export async function GET(request) {
//   const url = new URL(request.url); // Correctly parse the request URL
//   const search = url.searchParams.get("search") || ""; // Get the search parameter
//   const page = parseInt(url.searchParams.get("page")) || 1; // Get the page parameter and convert to number
//   const userId = parseInt(url.searchParams.get("userId"), 10) || null;
//   const limit = parseInt(url.searchParams.get("limit")) || 10; // Get the page parameter and convert to number

//   const skip = (page - 1) * limit;

//   // Build the where condition: only apply filtering if search string is provided
//   const whereCondition = search
//     ? {
//         OR: [{ name: { contains: search } }, { symbol: { contains: search } }],
//       }
//     : {}; // No filtering if search is empty, return all coins

//   try {
//     // Fetch coins from the database based on the condition, including related token contract addresses
//     const coins = await prisma.coin.findMany({
//       where: whereCondition,
//       skip,
//       take: limit,
//       include: {
//         tokenContractAddress: true, // Include related token contract addresses
//       },
//     });

//     // Count total coins for pagination
//     const totalCoins = await prisma.coin.count({
//       where: whereCondition,
//     });

//     return new Response(
//       JSON.stringify({ coins, totalPages: Math.ceil(totalCoins / limit) }),
//       {
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   } catch (error) {
//     return new Response(JSON.stringify({ error: "Error fetching coins" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }

// DELETE coin by ID
export async function DELETE(req) {
  try {
    const body = await req.json();
    const { id } = body; // Extract the coin ID

    if (!id) {
      return NextResponse.json(
        { error: "ID is missing from the request body" },
        { status: 400 }
      );
    }

    // Use a Prisma transaction to delete related records first, then the Coin
    await prisma.$transaction([
      prisma.vote.deleteMany({
        where: { coinId: id },
      }),
      prisma.promotedCoin.deleteMany({
        where: { coinId: id },
      }),
      prisma.hottestPair.deleteMany({
        where: { coinId: id },
      }),
      prisma.watchlistCoin.deleteMany({
        where: { coinId: id },
      }),
      prisma.tokenContractAddress.deleteMany({
        where: { coinId: id },
      }),
      // Finally, delete the Coin itself
      prisma.coin.delete({
        where: { id },
      }),
    ]);

    return NextResponse.json({
      message: "Coin and related records deleted successfully.",
    });
  } catch (error) {
    console.error("Error during coin deletion:", error);
    return NextResponse.json(
      { error: "Coin deletion failed.", details: error.message },
      { status: 500 }
    );
  }
}

// POST to create a new coin
export async function POST(req) {
  const {
    name,
    logo,
    symbol,
    launchDate,
    auditLink = null,
    teamDoxxed = null,
    softcap = null, // Default to null if not provided
    presaleLink = null, // Default to null if not provided
    hardcap = null, // Default to null if not provided
    presaleDate = null, // Default to null if not provided
    whitelist = null, // Default to null if not provided
    description,
    socials,
    contactEmail,
    contactTelegram,
    tokenContractAddresses = [], // Array of token contract addresses
    userId = null,
  } = await req.json();

  // Validate required fields
  if (!name || !symbol) {
    return new Response(
      JSON.stringify({ message: "Name and symbol are required." }),
      { status: 400 }
    );
  }

  // Validate dates if they exist
  const launchDateObject = new Date(launchDate);
  const presaleDateObject = presaleDate ? new Date(presaleDate) : null;

  if (
    isNaN(launchDateObject.getTime()) ||
    (presaleDate && isNaN(presaleDateObject.getTime()))
  ) {
    return new Response(JSON.stringify({ message: "Invalid date provided." }), {
      status: 400,
    });
  }

  try {
    const coin = await prisma.coin.create({
      data: {
        name,
        logo,
        symbol,
        launchDate: launchDateObject,
        auditLink,
        teamDoxxed,
        softcap,
        presaleLink,
        hardcap,
        presaleDate: presaleDateObject, // Use the parsed date or null
        whitelist,
        description,
        socials,
        contactEmail,
        contactTelegram,
        tokenContractAddress: {
          create: tokenContractAddresses.map((address) => ({
            Chain: address.Chain, // Ensure this matches your Prisma schema
            Address: address.Address, // Ensure this matches your Prisma schema
          })),
        },
        userId,
      },
    });

    return new Response(JSON.stringify(coin), { status: 201 });
  } catch (error) {
    console.error("Error creating coin:", error);
    return new Response(
      JSON.stringify({
        message: "Coin creation failed.",
        error: error.message,
      }),
      {
        status: 500,
      }
    );
  }
}

// PUT to update coin
export async function PUT(request) {
  //   console.log(request.json());

  const {
    id,
    name,
    logo,
    symbol,
    launchDate,
    auditLink,
    teamDoxxed,
    softcap,
    presaleLink,
    hardcap,
    presaleDate,
    whitelist,
    description,
    socials,
    contactEmail,
    contactTelegram,
    tokenContractAddresses = [],
  } = await request.json();

  const launchDateObject = new Date(launchDate);
  const presaleDateObject = new Date(presaleDate);

  if (isNaN(launchDateObject.getTime()) || isNaN(presaleDateObject.getTime())) {
    return new Response(JSON.stringify({ message: "Invalid date provided." }), {
      status: 400,
    });
  }

  try {
    const updatedCoin = await prisma.coin.update({
      where: { id },
      data: {
        name,
        logo,
        symbol,
        launchDate: launchDateObject,
        auditLink,
        teamDoxxed,
        softcap,
        presaleLink,
        hardcap,
        presaleDate: presaleDateObject,
        whitelist,
        description,
        socials,
        contactEmail,
        contactTelegram,
        tokenContractAddress: {
          deleteMany: {}, // This will delete existing addresses
          create: tokenContractAddresses.map((address) => ({
            Chain: address.Chain, // Ensure this matches your Prisma schema
            Address: address.Address, // Ensure this matches your Prisma schema
          })),
        },
      },
    });

    return new Response(JSON.stringify(updatedCoin), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error updating coin:", error);
    return new Response(
      JSON.stringify({ message: "Coin update failed.", error: error.message }),
      {
        status: 500,
      }
    );
  }
}
