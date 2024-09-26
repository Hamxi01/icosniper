import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const banners = await prisma.banner.findMany();
    return new Response(JSON.stringify(banners), { status: 200 });
  } catch (error) {
    console.error("Error fetching banners:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch banners" }), {
      status: 500,
    });
  }
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
    const { id } = req.params;
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
