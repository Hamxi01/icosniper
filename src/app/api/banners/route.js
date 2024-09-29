import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  const url = new URL(req.url); // Correctly parse the request URL
  const placement = url.searchParams.get("placement") || ""; // Get the search parameter
  const showAll = url.searchParams.get("showAll") === "true"; // Check if 'showAll' is set to true

  // Build the where condition: only apply filtering if search string is provided
  const whereCondition = placement
    ? {
        placement: { contains: placement },
      }
    : {}; // No filtering if search is empty, return all banners

  try {
    const banners = await prisma.banner.findMany({
      where: whereCondition,
    });

    let selectedBanners = banners;

    if (!showAll) {
      // Logic for 'rotating' placement: Select 2 random banners
      if (placement === "rotating") {
        // Shuffle the banners and pick the first two
        selectedBanners = shuffleArray(banners).slice(0, 2);
      } else {
        // For other placements, select only one banner (the first one)
        selectedBanners = banners.slice(0, 1); // Assuming at least 1 banner exists
      }
    }

    // Return the selected banners using NextResponse
    return NextResponse.json(selectedBanners, { status: 200 });
  } catch (error) {
    console.error("Error fetching banners:", error);

    // Return error response using NextResponse
    return NextResponse.json(
      { error: "Failed to fetch banners" },
      { status: 500 }
    );
  }
}

// Helper function to shuffle an array (Fisher-Yates shuffle)
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export async function POST(req) {
  try {
    const {
      name,
      url,
      media,
      launchDate,
      endDate,
      placement,
      value,
      status,
      mediaType,
    } = await req.json();

    const newBanner = await prisma.banner.create({
      data: {
        name,
        url,
        media,
        launchDate: new Date(launchDate),
        endDate: new Date(endDate),
        placement,
        value: parseFloat(value),
        status,
        mediaType,
      },
    });

    return new Response(JSON.stringify(newBanner), { status: 201 });
  } catch (error) {
    console.error("Error creating banner:", error);
    return new Response(JSON.stringify({ error: "Failed to create banner" }), {
      status: 500,
    });
  }
}

export async function DELETE(req) {
  try {
    const { id } = await req.json(); // Get ID from the request body
    await prisma.banner.delete({
      where: { id: parseInt(id) },
    });
    return new Response(
      JSON.stringify({ message: "Banner deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting banner:", error);
    return new Response(JSON.stringify({ error: "Failed to delete banner" }), {
      status: 500,
    });
  }
}

// Update an existing banner
export async function PUT(req) {
  try {
    const {
      id,
      name,
      url,
      media,
      launchDate,
      endDate,
      placement,
      value,
      status,
    } = await req.json();

    const updatedBanner = await prisma.banner.update({
      where: { id: parseInt(id) },
      data: {
        name,
        url,
        media, // Update media only if provided
        launchDate: new Date(launchDate),
        endDate: new Date(endDate),
        placement,
        value: parseFloat(value),
        status,
      },
    });

    return NextResponse.json(updatedBanner);
  } catch (error) {
    console.error("Error updating banner:", error);
    return NextResponse.json(
      { error: "Error updating banner" },
      { status: 500 }
    );
  }
}
