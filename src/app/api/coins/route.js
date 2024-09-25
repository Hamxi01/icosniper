import prisma from "@/lib/prisma"; // Ensure you have prisma set up here
import { NextResponse } from "next/server";

// GET all coins with pagination and search
export async function GET(request) {
  const url = new URL(request.url); // Correctly parse the request URL
  const search = url.searchParams.get("search") || ""; // Get the search parameter
  const page = parseInt(url.searchParams.get("page")) || 1; // Get the page parameter and convert to number

  const limit = 10; // Items per page
  const skip = (page - 1) * limit;

  // Build the where condition: only apply filtering if search string is provided
  const whereCondition = search
    ? {
        OR: [{ name: { contains: search } }, { symbol: { contains: search } }],
      }
    : {}; // No filtering if search is empty, return all coins

  try {
    // Fetch coins from the database based on the condition, including related token contract addresses
    const coins = await prisma.coin.findMany({
      where: whereCondition,
      skip,
      take: limit,
      include: {
        tokenContractAddress: true, // Include related token contract addresses
      },
    });

    // Count total coins for pagination
    const totalCoins = await prisma.coin.count({
      where: whereCondition,
    });

    return new Response(
      JSON.stringify({ coins, totalPages: Math.ceil(totalCoins / limit) }),
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

// GET a single coin by ID
export async function GET_COIN(request) {
  const { id } = request.nextUrl;

  try {
    const coin = await prisma.coin.findUnique({
      where: { id: parseInt(id) },
      include: {
        tokenContractAddress: true, // Include related token contract addresses
      },
    });

    if (!coin) {
      return new Response("Coin not found", { status: 404 });
    }

    return new Response(JSON.stringify(coin), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error fetching coin" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// DELETE coin by ID
export async function DELETE(req) {
  const { id } = await req.json(); // Extract the id from the request body

  try {
    await prisma.coin.delete({
      where: { id }, // Use the id to delete the coin
    });
    return NextResponse.json({ message: "Coin deleted successfully." });
  } catch (error) {
    return NextResponse.json(
      { error: "Coin deletion failed." },
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
