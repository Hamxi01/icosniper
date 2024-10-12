import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const coins = await prisma.coin.findMany({
      take: 5, // Fetch 5 coins
      orderBy: {
        id: "desc", // Latest coins first
      },
    });

    const response = NextResponse.json({ coins });

    // Set headers to prevent caching
    response.headers.set(
      "Cache-Control",
      "no-store, no-cache, must-revalidate, proxy-revalidate"
    );
    response.headers.set("Pragma", "no-cache");
    response.headers.set("Expires", "0");

    return response;
  } catch (error) {
    console.error("Error fetching hottest pairs:", error);
    return NextResponse.json(
      { error: "Error fetching coins" },
      { status: 500 }
    );
  }
}
