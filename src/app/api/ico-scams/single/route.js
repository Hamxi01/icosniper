import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Adjust the path based on your project structure

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = parseInt(searchParams.get("id"));

  // Fetch the ICO scam along with comments and replies
  const icoScam = await prisma.icoScam.findUnique({
    where: { id },
    include: {
      IcoScamComment: {
        include: {
          replies: true, // Include replies for each comment
        },
      },
    },
  });

  if (!icoScam) {
    return NextResponse.json(null, { status: 404 });
  }

  // Return the ICO scam data along with comments and their replies
  return NextResponse.json(icoScam, { status: 200 });
}
