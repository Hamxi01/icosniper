import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET request
export async function GET(request) {
  const url = new URL(request.url);
  const userId = parseInt(url.searchParams.get("userId"), 10) || null;

  if (!userId) {
    return NextResponse.json({ error: "User ID is required" }, { status: 400 });
  }

  try {
    const watchlistCoin = await prisma.watchlistCoin.findMany({
      where: {
        userId: userId,
      },
      include: {
        coin: true,
      },
    });
    return NextResponse.json({ watchlistCoin });
  } catch (error) {
    console.error("Error fetching Watchlist coins:", error);
    return NextResponse.json(
      { error: "Error fetching Watchlist coins" },
      { status: 500 }
    );
  }
}

// POST request
export async function POST(request) {
  const data = await request.json();
  const { coinId, userId } = data;

  if (!coinId || !userId) {
    return NextResponse.json(
      { message: "Coin ID and User ID are required." },
      { status: 400 }
    );
  }

  try {
    const watchlistCoin = await prisma.watchlistCoin.create({
      data: {
        coinId: parseInt(coinId),
        userId: parseInt(userId),
      },
    });
    return NextResponse.json(watchlistCoin, { status: 201 });
  } catch (error) {
    console.error("Watchlist coin creation error:", error);
    return NextResponse.json(
      { message: "Watchlist coin creation failed.", error: error.message },
      { status: 500 }
    );
  }
}
