import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET request

export async function GET(request) {
  const url = new URL(request.url);
  const userId = parseInt(url.searchParams.get("userId"), 10) || null;
  const coinId = parseInt(url.searchParams.get("coinId"), 10) || null;

  // Validate coinId
  if (!coinId) {
    return NextResponse.json({ error: "Coin ID is required" }, { status: 400 });
  }

  try {
    // Count total watchlisted coins for the specific coinId
    const totalWatchlistedCoins = await prisma.watchlistCoin.count({
      where: {
        coinId: coinId,
      },
    });

    let hasAdded = false;

    // Check if the user has added this coin to their watchlist if userId is provided
    if (userId) {
      const userWatchlistEntry = await prisma.watchlistCoin.findFirst({
        where: {
          userId: userId, // Search by userId
          coinId: coinId, // and coinId
        },
      });

      hasAdded = userWatchlistEntry !== null; // Set hasAdded based on existence
    }

    return NextResponse.json({
      totalWatchlistedCoins,
      hasAdded,
    });
  } catch (error) {
    console.error("Error fetching Watchlist coins:", error);
    return NextResponse.json(
      { error: "Error fetching Watchlist coins" },
      { status: 500 }
    );
  }
}
