import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Adjust the path based on your project structure

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const id = parseInt(searchParams.get("id"));
  const icoScam = await prisma.icoScam.findUnique({ where: { id } });

  if (!icoScam) {
    return new Response(null, { status: 404 });
  }
  return new Response(JSON.stringify(icoScam), { status: 200 });
}
