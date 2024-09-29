import prisma from "@/lib/prisma"; // Ensure you have prisma set up here
import { NextResponse } from "next/server";

// GET a single coin by ID
export async function GET(request) {
  const url = new URL(request.url); // Correctly parse the request URL
  const id = url.searchParams.get("id"); // Get the search parameter

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
