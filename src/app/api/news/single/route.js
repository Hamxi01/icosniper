// src/app/api/news/single/route.js
import prisma from "@/lib/prisma";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  try {
    const post = await prisma.news.findUnique({
      where: { id: Number(id) },
    });

    if (!post) {
      return new Response("Post not found", { status: 404 });
    }

    return new Response(JSON.stringify(post), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
