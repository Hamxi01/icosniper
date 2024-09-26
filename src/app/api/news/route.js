// src/app/api/news/route.js

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Get All News with Search, Filter, and Pagination
export async function GET(request) {
  const {
    search,
    category,
    page = 1,
    limit = 10,
  } = request.nextUrl.searchParams;

  const where = {
    ...(search && {
      title: {
        contains: search,
        mode: "insensitive", // case insensitive search
      },
    }),
    ...(category && {
      categories: {
        contains: category,
        mode: "insensitive",
      },
    }),
  };

  const news = await prisma.news.findMany({
    where,
    skip: (page - 1) * limit,
    take: Number(limit),
  });

  const totalCount = await prisma.news.count({ where });

  return NextResponse.json({
    news,
    totalCount,
    currentPage: page,
    totalPages: Math.ceil(totalCount / limit),
  });
}

// Add News
export async function POST(request) {
  const {
    title,
    thumbnail,
    date,
    description,
    tags,
    categories,
    status,
    userId,
  } = await request.json();

  const news = await prisma.news.create({
    data: {
      title,
      thumbnail,
      date,
      description,
      tags,
      categories,
      status,
      userId,
    },
  });

  return NextResponse.json(news, { status: 201 });
}

// Edit News
export async function PUT(request, { params }) {
  const { id } = params;
  const { title, thumbnail, date, description, tags, categories, status } =
    await request.json();

  const news = await prisma.news.update({
    where: { id: Number(id) },
    data: {
      title,
      thumbnail,
      date,
      description,
      tags,
      categories,
      status,
    },
  });

  return NextResponse.json(news);
}

// Delete News
export async function DELETE(request, { params }) {
  const { id } = params;

  await prisma.news.delete({
    where: { id: Number(id) },
  });

  return NextResponse.json({ message: "News deleted successfully" });
}

// Get Single News by ID
export async function GET(request, { params }) {
  const { id } = params;

  const news = await prisma.news.findUnique({
    where: { id: Number(id) },
  });

  if (!news) {
    return NextResponse.json({ message: "News not found" }, { status: 404 });
  }

  return NextResponse.json(news);
}

// Get News Based on Specific Category
export async function GET(request, { params }) {
  const { category } = params;

  const news = await prisma.news.findMany({
    where: {
      categories: {
        contains: category,
      },
    },
  });

  return NextResponse.json(news);
}
