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

    // Construct the response object with additional fields
    const responseCoin = {
      ...coin,
      voteCount, // Total votes for the coin
      last24HourVotesCount, // Count of votes in the last 24 hours for this coin
      hasVoted, // Whether the user has voted
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
