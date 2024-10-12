import prisma from "@/lib/prisma"; // Ensure you have prisma set up here
import { NextResponse } from "next/server";

// GET all coins with pagination and search
// export async function GET() {
//   try {
//     const coins = await prisma.coin.findMany({
//       take: 5, // Fetch 5 coins
//       orderBy: {
//         id: "desc", // Latest coins first
//       },
//     });

//     // Logging fetched coins for debugging
//     console.log("Fetched coins:", coins);

//     const response = NextResponse.json({ coins });
//     // Set headers to prevent caching
//     response.headers.set(
//       "Cache-Control",
//       "no-store, no-cache, must-revalidate, proxy-revalidate"
//     );
//     response.headers.set("Pragma", "no-cache");
//     response.headers.set("Expires", "0");

//     return response;
//   } catch (error) {
//     console.error("Error fetching coins:", error);
//     return NextResponse.json(
//       { error: "Error fetching coins" },
//       { status: 500 }
//     );
//   }
// }

export async function GET(request) {
  const url = new URL(request.url); // Correctly parse the request URL
  const limit = parseInt(url.searchParams.get("limit")) || 10; // Get the limit parameter and convert to number

  try {
    // Fetch coins from the database based on the condition, including related token contract addresses
    const coins = await prisma.coin.findMany({
      take: limit,
      include: {
        tokenContractAddress: true, // Include related token contract addresses
      },
      orderBy: {
        id: "desc", // Sort coins by total vote count in descending order
      },
    });

    return new Response(JSON.stringify({ coins }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error fetching coins" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
