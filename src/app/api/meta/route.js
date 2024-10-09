import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  try {
    const body = await req.json();
    const {
      visitorIp,
      visitTime,
      location,
      browser,
      os,
      device,
      duration,
      referrer,
      pageViews,
    } = body;

    // Validate required fields
    if (!visitorIp || !visitTime || !location) {
      return new Response(
        JSON.stringify({ success: false, error: "Missing required fields" }),
        {
          status: 400,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Log the incoming request body for debugging
    console.log("Incoming visitor data:", body);

    // Check if metadata already exists for this visitor IP
    const existingMeta = await prisma.meta.findUnique({
      where: { visitorIp },
    });

    if (existingMeta) {
      // Update the existing record if it exists
      const updatedMeta = await prisma.meta.update({
        where: { visitorIp },
        data: {
          duration: existingMeta.duration + duration,
          pageViews: existingMeta.pageViews + pageViews,
        },
      });

      console.log("Updated metadata:", updatedMeta); // Log the updated metadata
      return new Response(JSON.stringify({ success: true, updatedMeta }), {
        status: 200, // OK
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      // Save the metadata to the database using Prisma if it doesn't exist
      const meta = await prisma.meta.create({
        data: {
          visitorIp,
          visitTime: new Date(visitTime), // Ensure correct date format
          location,
          browser,
          os,
          device,
          duration,
          referrer,
          pageViews,
        },
      });

      console.log("Created new metadata:", meta); // Log the created metadata
      return new Response(JSON.stringify({ success: true, meta }), {
        status: 201, // Created
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  } catch (error) {
    console.error("Error saving meta data:", error); // Enhanced error logging
    return new Response(
      JSON.stringify({ success: false, error: "Failed to save meta data" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

export async function PUT(req) {
  try {
    const body = await req.json();
    const { visitorIp, duration, pageViews } = body;

    // Find the existing metadata entry by visitor IP
    const existingMeta = await prisma.meta.findUnique({
      where: { visitorIp },
    });

    if (!existingMeta) {
      return new Response(
        JSON.stringify({ success: false, error: "Metadata not found" }),
        {
          status: 404,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    }

    // Update the metadata
    const updatedMeta = await prisma.meta.update({
      where: { visitorIp },
      data: {
        duration: existingMeta.duration + duration, // Add to existing duration
        pageViews: existingMeta.pageViews + pageViews, // Add to existing page views
      },
    });

    return new Response(JSON.stringify({ success: true, updatedMeta }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error updating meta data:", error);
    return new Response(
      JSON.stringify({ success: false, error: "Failed to update meta data" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
