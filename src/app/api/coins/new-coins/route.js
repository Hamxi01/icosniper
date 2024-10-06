import prisma from "@/lib/prisma"; // Ensure you have prisma set up here

// GET all coins with pagination and search
export async function GET(request) {
  try {
    // Fetch coins from the database, ordering by id to get the latest coins
    const coins = await prisma.coin.findMany({
      take: 5, // Fetch 5 coins (you can adjust the number)
      orderBy: {
        id: "desc", // Order by id in descending order to get the latest coins
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
