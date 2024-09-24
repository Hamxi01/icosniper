import { compare } from "bcryptjs";
import prisma from "@/lib/prisma"; // Ensure you have prisma set up here

// POST Login
export async function POST(request) {
  const { email, password } = await request.json();
  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    return new Response(JSON.stringify({ message: "User not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  if (await compare(password, user.password)) {
    return new Response(JSON.stringify(user), {
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ message: "Invalid credentials" }), {
    status: 401,
    headers: { "Content-Type": "application/json" },
  });
}
