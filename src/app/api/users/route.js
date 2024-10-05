import { hash, compare } from "bcryptjs";
import prisma from "@/lib/prisma"; // Ensure you have prisma set up here
import { NextResponse } from "next/server";

// GET all users with pagination and search
export async function GET(request) {
  const url = new URL(request.url); // Correctly parse the request URL
  const search = url.searchParams.get("search") || ""; // Get the search parameter
  const page = parseInt(url.searchParams.get("page")) || 1; // Get the page parameter and convert to number

  const limit = 10; // Items per page
  const skip = (page - 1) * limit;

  // Build the where condition: only apply filtering if search string is provided
  const whereCondition = search
    ? {
        OR: [{ name: { contains: search } }, { email: { contains: search } }],
      }
    : {}; // No filtering if search is empty, return all users

  try {
    // Fetch users from the database based on the condition
    const users = await prisma.user.findMany({
      where: whereCondition,
      skip,
      take: limit,
    });

    // Count total users for pagination
    const totalUsers = await prisma.user.count({
      where: whereCondition,
    });

    return new Response(
      JSON.stringify({ users, totalPages: Math.ceil(totalUsers / limit) }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Error fetching users" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// GET a single user by ID
export async function GET_USER(request) {
  const { id } = request.nextUrl;

  const user = await prisma.user.findUnique({ where: { id } });

  if (!user) {
    return new Response("User not found", { status: 404 });
  }

  return new Response(JSON.stringify(user), {
    headers: { "Content-Type": "application/json" },
  });
}

// DELETE user by ID
export async function DELETE(req) {
  const { id } = await req.json(); // Extract the id from the request body

  try {
    // Delete related entities manually
    await prisma.vote.deleteMany({ where: { userId: id } });
    await prisma.watchlistCoin.deleteMany({ where: { userId: id } });
    await prisma.icoScamComment.deleteMany({ where: { userId: id } });
    await prisma.coin.deleteMany({ where: { userId: id } });

    await prisma.user.delete({
      where: { id }, // Use the id to delete the user
    });
    return NextResponse.json({ message: "User deleted successfully." });
  } catch (error) {
    return NextResponse.json(
      { error: "User deletion failed." },
      { status: 500 }
    );
  }
}

// POST Signup
export async function POST(req) {
  const { email, password, name, role } = await req.json();

  // Validate required fields
  if (!email || !password) {
    return new Response(
      JSON.stringify({ message: "Email and password are required." }),
      { status: 400 }
    );
  }

  // Hash the password
  const hashedPassword = await hash(password, 10);

  try {
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        name: name || null, // Set name to null if not provided
        role: role || "user", // Default role to "user"
      },
    });

    return new Response(JSON.stringify(user), { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return new Response(JSON.stringify({ message: "User creation failed." }), {
      status: 500,
    });
  }
}

// POST Login
export async function POST_LOGIN(request) {
  const { email, password } = await request.json();
  const user = await prisma.user.findUnique({ where: { email } });

  if (user && (await compare(password, user.password))) {
    return new Response(JSON.stringify(user), {
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response("Invalid credentials", { status: 401 });
}

// PUT to update user
export async function PUT(request) {
  const { id, name, email, role } = await request.json();

  const updatedUser = await prisma.user.update({
    where: { id },
    data: {
      name,
      email,
      role,
    },
  });

  return new Response(JSON.stringify(updatedUser), {
    headers: { "Content-Type": "application/json" },
  });
}
