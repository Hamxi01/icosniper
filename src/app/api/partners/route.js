import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Ensure this path is correct

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page")) || 1;
  const limit = parseInt(searchParams.get("limit")) || 10;
  const query = searchParams.get("query") || "";

  try {
    const partners = await prisma.partner.findMany({
      where: {
        title: {
          contains: query,
          // mode: "insensitive",
        },
      },
      skip: (page - 1) * limit,
      take: limit,
    });

    const totalPartners = await prisma.partner.count({
      where: {
        title: {
          contains: query,
          // mode: "insensitive",
        },
      },
    });

    return NextResponse.json({ partners, total: totalPartners });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to retrieve partners" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  const data = await req.json();
  const newPartner = await prisma.partner.create({ data });
  return NextResponse.json(newPartner);
}

export async function PUT(req) {
  const data = await req.json();
  const { id, ...rest } = data;
  const updatedPartner = await prisma.partner.update({
    where: { id },
    data: rest,
  });
  return NextResponse.json(updatedPartner);
}

export async function DELETE(req) {
  const data = await req.json();
  const deletedPartner = await prisma.partner.delete({
    where: { id: data.id },
  });
  return NextResponse.json(deletedPartner);
}

export async function GET_SINGLE(request) {
  const { id } = await request.json();
  const partner = await prisma.partner.findUnique({ where: { id } });

  if (!partner) {
    return new Response(null, { status: 404 });
  }
  return new Response(JSON.stringify(partner), { status: 200 });
}
