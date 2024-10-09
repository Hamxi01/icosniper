import prisma from "@/lib/prisma"; // Ensure you have prisma set up here
import { NextResponse } from "next/server";

// GET a single coin by ID
export async function GET(request) {
  const url = new URL(request.url); // Correctly parse the request URL
  const id = url.searchParams.get("id"); // Get the coin ID from the search parameter
  const userId = parseInt(url.searchParams.get("userId"), 10) || null; // Get userId from query params (nullable)

  try {
    // Fetch the coin along with related token contract addresses and votes
    const coin = await prisma.coin.findUnique({
      where: { id: parseInt(id) },
      include: {
        tokenContractAddress: true, // Include related token contract addresses
        Votes: true, // Include votes to check if the user has voted
      },
    });

    if (!coin) {
      return new Response("Coin not found", { status: 404 });
    }

    // Count total votes for the coin
    const voteCount = await prisma.vote.count({
      where: { coinId: coin.id },
    });

    // Get current date and time
    const currentDateTime = new Date();
    // Calculate the date and time for 24 hours ago
    const twentyFourHoursAgo = new Date(
      currentDateTime.getTime() - 24 * 60 * 60 * 1000
    );

    // Count votes in the last 24 hours for this specific coin
    const last24HourVotesCount = await prisma.vote.count({
      where: {
        coinId: coin.id,
        date: {
          gte: twentyFourHoursAgo, // Votes that are greater than or equal to 24 hours ago
        },
      },
    });

    // Check if the user has voted
    const hasVoted = userId
      ? coin.Votes.some((vote) => vote.userId === userId) // Check if the userId exists in the Votes
      : false; // Default to false if no userId is provided

    // ====================
    // Calculate Rankings
    // ====================

    // 1. Overall rank based on total votes
    const allCoinsWithTotalVotes = await prisma.coin.findMany({
      include: {
        _count: {
          select: { Votes: true }, // Get the total vote count for each coin
        },
      },
    });

    const overallRank =
      allCoinsWithTotalVotes
        .sort((a, b) => b._count.Votes - a._count.Votes) // Sort coins by total votes (descending)
        .findIndex((c) => c.id === coin.id) + 1; // Find the rank of the current coin (+1 for 1-based index)

    // 2. Daily rank based on last 24-hour votes
    const allCoinsWithDailyVotes = await prisma.coin.findMany({
      include: {
        Votes: {
          where: {
            date: {
              gte: twentyFourHoursAgo, // Get votes only from the last 24 hours
            },
          },
        },
      },
    });

    const dailyRank =
      allCoinsWithDailyVotes
        .sort((a, b) => b.Votes.length - a.Votes.length) // Sort coins by last 24-hour votes (descending)
        .findIndex((c) => c.id === coin.id) + 1; // Find the rank of the current coin (+1 for 1-based index)

    // Construct the response object with additional fields
    const responseCoin = {
      ...coin,
      voteCount, // Total votes for the coin
      last24HourVotesCount, // Count of votes in the last 24 hours for this coin
      hasVoted, // Whether the user has voted
      overallRank, // Overall rank based on total votes
      dailyRank, // Daily rank based on last 24-hour votes
    };

    return new Response(JSON.stringify(responseCoin), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error fetching coin" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
