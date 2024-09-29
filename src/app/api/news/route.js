// src/app/api/news/route.js

import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Get All News with Search, Filter, and Pagination
export async function GET(request) {
  const search = request.nextUrl.searchParams.get("search") || "";
  const page = parseInt(request.nextUrl.searchParams.get("page")) || 1;
  const limit = parseInt(request.nextUrl.searchParams.get("limit")) || 10;
  const showPublishedOnly =
    request.nextUrl.searchParams.get("showPublishedOnly") === "true";

  // Check if a category is requested and if it's a valid category
  const category = request.nextUrl.searchParams.get("category") || "";
  const showForCategory = category ? true : false; // This will determine if we need to filter by category

  const where = {
    ...(search && {
      title: {
        contains: search,
        // mode: "insensitive", // Uncomment for case insensitive search
      },
    }),
    ...(showPublishedOnly && { status: "published" }), // Only include if true
    ...(showForCategory && { categories: category }), // Only include if a category is provided
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

  // Default date to the current date if not provided
  const newsDate = date || new Date();

  const news = await prisma.news.create({
    data: {
      title,
      thumbnail,
      date: newsDate,
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
export async function PUT(request) {
  const {
    id, // Extracting ID from the request body
    title,
    thumbnail,
    date,
    description,
    tags,
    categories,
    status,
  } = await request.json();

  try {
    const news = await prisma.news.update({
      where: { id: Number(id) }, // Ensure id is a number
      data: {
        title,
        thumbnail,
        date: date || new Date(), // Default to current date if not provided
        description,
        tags,
        categories,
        status,
      },
    });

    return NextResponse.json(news);
  } catch (error) {
    console.error("Error updating news:", error);
    return NextResponse.json(
      { error: "Failed to update news" },
      { status: 500 }
    );
  }
}

// Delete News
export async function DELETE(request) {
  const { id } = await request.json(); // Read the ID from the request body

  try {
    const deletedNews = await prisma.news.delete({
      where: {
        id: parseInt(id), // Ensure the ID is parsed correctly
      },
    });

    return NextResponse.json({ message: "News deleted successfully" });
  } catch (error) {
    console.error(error); // Log error for debugging
    return NextResponse.error(); // Send an error response
  }
}

// Get Single News by ID
// export async function GET(request, { params }) {
//   const { id } = params;

//   const news = await prisma.news.findUnique({
//     where: { id: Number(id) },
//   });

//   if (!news) {
//     return NextResponse.json({ message: "News not found" }, { status: 404 });
//   }

//   return NextResponse.json(news);
// }

// Get News Based on Specific Category
// export async function GET(request, { params }) {
//   const { category } = params;

//   const news = await prisma.news.findMany({
//     where: {
//       categories: {
//         contains: category,
//       },
//     },
//   });

//   return NextResponse.json(news);
// }
