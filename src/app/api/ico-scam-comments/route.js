import { prisma } from "@/lib/prisma";

// Helper function for pagination and filtering
const paginateAndFilter = (icoScamId, page, limit) => {
  const skip = (page - 1) * limit;
  return prisma.icoScamComment.findMany({
    where: { IcoScamId: icoScamId },
    include: { user: true }, // Include user data if needed
    skip,
    take: limit,
  });
};

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const icoScamId = parseInt(searchParams.get("icoScamId")) || 0;
  const page = parseInt(searchParams.get("page")) || 1;
  const limit = parseInt(searchParams.get("limit")) || 10;

  const comments = await paginateAndFilter(icoScamId, page, limit);
  const total = await prisma.icoScamComment.count({
    where: { IcoScamId: icoScamId },
  });

  return new Response(JSON.stringify({ comments, total }), { status: 200 });
}

export async function POST(request) {
  const { IcoScamId, userId, comment, replayId } = await request.json();
  const newComment = await prisma.icoScamComment.create({
    data: {
      IcoScamId,
      userId,
      comment,
      replayId, // Optional
    },
  });

  return new Response(JSON.stringify(newComment), { status: 201 });
}

export async function PUT(request) {
  const { id, comment } = await request.json();
  const updatedComment = await prisma.icoScamComment.update({
    where: { id },
    data: {
      comment,
    },
  });

  return new Response(JSON.stringify(updatedComment), { status: 200 });
}

export async function DELETE(request) {
  const { id } = await request.json();
  await prisma.icoScamComment.delete({ where: { id } });
  return new Response(null, { status: 204 });
}

export async function GET_SINGLE(request) {
  const { id } = await request.json();
  const comment = await prisma.icoScamComment.findUnique({ where: { id } });

  if (!comment) {
    return new Response(null, { status: 404 });
  }
  return new Response(JSON.stringify(comment), { status: 200 });
}