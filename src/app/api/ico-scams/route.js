import { NextResponse } from "next/server";
import prisma from "@/lib/prisma"; // Adjust the path based on your project structure

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page")) || 1;
  const limit = parseInt(searchParams.get("limit")) || 10;
  const query = searchParams.get("query") || "";
  const status = searchParams.get("status") || null; // Set to null if not provided

  const whereConditions = {
    OR: [
      {
        title: {
          contains: query,
          // mode: "insensitive", // Uncommented for case insensitivity
        },
      },
      {
        description: {
          contains: query,
          // mode: "insensitive", // Uncommented for case insensitivity
        },
      },
    ],
  };

  // Only add status filter if it exists
  if (status) {
    whereConditions.status = status; // Ensure this is the correct field
  }

  const icoScams = await prisma.icoScam.findMany({
    where: whereConditions,
    skip: (page - 1) * limit,
    take: limit,
  });

  const total = await prisma.icoScam.count({
    where: {
      ...whereConditions, // Use the same conditions for total count
      // Include status condition if needed
    },
  });

  return NextResponse.json({ icoScams, total });
}

export async function POST(req) {
  const data = await req.json();
  const newIcoScam = await prisma.icoScam.create({ data });
  return NextResponse.json(newIcoScam);
}

export async function PUT(req) {
  const data = await req.json();
  const { id, ...rest } = data;
  const updatedIcoScam = await prisma.icoScam.update({
    where: { id },
    data: rest,
  });
  return NextResponse.json(updatedIcoScam);
}

export async function DELETE(req) {
  const data = await req.json();
  const deletedIcoScam = await prisma.icoScam.delete({
    where: { id: data.id },
  });
  return NextResponse.json(deletedIcoScam);
}
