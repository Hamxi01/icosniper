import prisma from "@/lib/prisma"; // Ensure prisma is correctly imported
import { NextResponse } from "next/server";

// GET all promoted coins with pagination
// export async function GET(request) {
//   const url = new URL(request.url);
//   const page = parseInt(url.searchParams.get("page")) || 1;
//   const limit = 10;
//   const skip = (page - 1) * limit;

//   try {
//     const promotedCoins = await prisma.promotedCoins.findMany({
//       skip,
//       take: limit,
//       include: {
//         coin: true, // Assuming PromotedCoins has a relation with Coin table
//       },
//     });

//     const totalPromotedCoins = await prisma.promotedCoins.count();

//     return new Response(
//       JSON.stringify({
//         promotedCoins,
//         totalPages: Math.ceil(totalPromotedCoins / limit),
//       }),
//       {
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   } catch (error) {
//     return new Response(
//       JSON.stringify({ error: "Error fetching promoted coins" }),
//       {
//         status: 500,
//         headers: { "Content-Type": "application/json" },
//       }
//     );
//   }
// }
export async function GET() {
  try {
    const promotedCoins = await prisma.promotedCoin.findMany({
      include: {
        coin: true, // Include related coin data
      },
    });
    return NextResponse.json({ promotedCoins });
  } catch (error) {
    console.error("Error fetching promoted coins:", error); // Log the complete error
    return NextResponse.json(
      { error: "Error fetching promoted coins" },
      { status: 500 }
    );
  }
}

// POST create a new promoted coin
export async function POST(request) {
  const data = await request.json();
  const { coinId, startDate, endDate, status } = data;

  if (!coinId || !startDate || !endDate) {
    return new Response(
      JSON.stringify({
        message: "Coin ID, start date, and end date are required.",
      }),
      {
        status: 400,
      }
    );
  }

  try {
    const promotedCoin = await prisma.promotedCoin.create({
      data: {
        coinId: parseInt(coinId),
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        status: Boolean(status), // Ensure status is a Boolean
      },
    });
    return new Response(JSON.stringify(promotedCoin), { status: 201 });
  } catch (error) {
    console.error("Promoted coin creation error:", error); // Log the complete error
    return new Response(
      JSON.stringify({
        message: "Promoted coin creation failed.",
        error: error.message,
      }),
      {
        status: 500,
      }
    );
  }
}

// PUT update a promoted coin
export async function PUT(request) {
  const data = await request.json();
  const { id, coinId, startDate, endDate, status } = data;

  if (!id) {
    return new Response(JSON.stringify({ message: "ID is required." }), {
      status: 400,
    });
  }

  try {
    const updatedPromotedCoin = await prisma.promotedCoin.update({
      where: { id: parseInt(id) },
      data: {
        coinId: parseInt(coinId),
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        status: Boolean(status), // Ensure status is a Boolean
      },
    });

    return new Response(JSON.stringify(updatedPromotedCoin), { status: 200 });
  } catch (error) {
    console.error("Promoted coin update error:", error); // Log the complete error
    return new Response(
      JSON.stringify({
        message: "Promoted coin update failed.",
        error: error.message,
      }),
      {
        status: 500,
      }
    );
  }
}

// DELETE a promoted coin by ID
export async function DELETE(request) {
  const { id } = await request.json();

  if (!id) {
    return new Response(JSON.stringify({ message: "ID is required." }), {
      status: 400,
    });
  }

  try {
    await prisma.promotedCoin.delete({
      where: { id: parseInt(id) },
    });

    return new Response(
      JSON.stringify({ message: "Promoted coin deleted successfully." }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Promoted coin deletion failed." }),
      {
        status: 500,
      }
    );
  }
}
