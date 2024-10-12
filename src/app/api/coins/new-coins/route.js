import prisma from "@/lib/prisma"; // Ensure you have prisma set up here
import { NextResponse } from "next/server";

// GET all coins with pagination and search
export async function GET() {
  try {
    const coins = await prisma.coin.findMany({
      take: 5, // Fetch 5 coins
      orderBy: {
        id: "desc", // Latest coins first
      },
    });

    console.log(coins); // Log the complete error
    return NextResponse.json({ coins });
  } catch (error) {
    console.error("Error fetching hottest pairs:", error); // Log the complete error
    return NextResponse.json(
      { error: "Error fetching coins" },
      { status: 500 }
    );
  }
}
