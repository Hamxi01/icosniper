import prisma from "@/lib/prisma"; // Ensure prisma is correctly imported
import { NextResponse } from "next/server";

// GET all hottest pairs with pagination
export async function GET() {
  try {
    const hottestPairs = await prisma.hottestPair.findMany({
      include: {
        coin: true, // Include related coin data
      },
    });
    return NextResponse.json({ hottestPairs });
  } catch (error) {
    console.error("Error fetching hottest pairs:", error); // Log the complete error
    return NextResponse.json(
      { error: "Error fetching hottest pairs" },
      { status: 500 }
    );
  }
}

// POST create a new hottest pair
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
    const hottestPair = await prisma.hottestPair.create({
      data: {
        coinId: parseInt(coinId),
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        status: Boolean(status), // Ensure status is a Boolean
      },
    });
    return new Response(JSON.stringify(hottestPair), { status: 201 });
  } catch (error) {
    console.error("Hottest pair creation error:", error); // Log the complete error
    return new Response(
      JSON.stringify({
        message: "Hottest pair creation failed.",
        error: error.message,
      }),
      {
        status: 500,
      }
    );
  }
}

// PUT update a hottest pair
export async function PUT(request) {
  const data = await request.json();
  const { id, coinId, startDate, endDate, status } = data;

  if (!id) {
    return new Response(JSON.stringify({ message: "ID is required." }), {
      status: 400,
    });
  }

  try {
    const updatedHottestPair = await prisma.hottestPair.update({
      where: { id: parseInt(id) },
      data: {
        coinId: parseInt(coinId),
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        status: Boolean(status), // Ensure status is a Boolean
      },
    });

    return new Response(JSON.stringify(updatedHottestPair), { status: 200 });
  } catch (error) {
    console.error("Hottest pair update error:", error); // Log the complete error
    return new Response(
      JSON.stringify({
        message: "Hottest pair update failed.",
        error: error.message,
      }),
      {
        status: 500,
      }
    );
  }
}

// DELETE a hottest pair by ID
export async function DELETE(request) {
  const { id } = await request.json();

  if (!id) {
    return new Response(JSON.stringify({ message: "ID is required." }), {
      status: 400,
    });
  }

  try {
    await prisma.hottestPair.delete({
      where: { id: parseInt(id) },
    });

    return new Response(
      JSON.stringify({ message: "Hottest pair deleted successfully." }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Hottest pair deletion failed." }),
      {
        status: 500,
      }
    );
  }
}
