import prisma from "@/lib/prisma"; // Ensure prisma is correctly imported
import { NextResponse } from "next/server";

export async function GET(request) {
  const url = new URL(request.url);
  const search = url.searchParams.get("search") || "";
  const page = parseInt(url.searchParams.get("page")) || 1;
  const userId = parseInt(url.searchParams.get("userId"), 10) || null;
  const votedUserId = url.searchParams.get("votedUserId")
    ? parseInt(url.searchParams.get("votedUserId"), 10)
    : null;
  const limit = parseInt(url.searchParams.get("limit")) || 10;
  const skip = (page - 1) * limit;

  const whereCondition = {
    ...(search
      ? {
          OR: [
            { name: { contains: search } },
            { symbol: { contains: search } },
          ],
        }
      : {}),
  };

  try {
    const coins = await prisma.coin.findMany({
      where: whereCondition,
      skip,
      take: limit,
      include: {
        tokenContractAddress: true,
        _count: { select: { Votes: true } },
        Votes: votedUserId
          ? {
              where: { userId: votedUserId },
              select: { id: true },
            }
          : false,
      },
    });

    const totalCoins = await prisma.coin.count({
      where: whereCondition,
    });

    const modifiedCoins = coins.map((coin) => ({
      ...coin,
      voteCount: coin._count.Votes,
      hasVoted: votedUserId ? coin.Votes.length > 0 : false,
    }));

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

export async function POST(request) {
  try {
    const { userId, coinId } = await request.json();

    // Ensure userId and coinId are provided
    if (!userId || !coinId) {
      return new Response(
        JSON.stringify({ error: "Missing userId or coinId" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Check if the user has already voted for this coin
    const existingVote = await prisma.vote.findFirst({
      where: { userId, coinId },
    });

    if (existingVote) {
      return new Response(
        JSON.stringify({ error: "You have already voted for this coin" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Create a new vote
    const newVote = await prisma.vote.create({
      data: {
        userId,
        coinId,
        date: new Date(),
      },
    });

    return new Response(JSON.stringify({ vote: newVote }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error voting" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
