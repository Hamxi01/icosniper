import { hash, compare } from "bcryptjs";
import prisma from "@/lib/prisma"; // Ensure you have prisma set up here

// PUT to update user password
export async function PUT(request) {
  try {
    // Parse the incoming request body
    const { id, currentPassword, newPassword } = await request.json();

    // Find the user in the database
    const findUser = await prisma.user.findUnique({ where: { id } });

    // Check if the user exists
    if (!findUser) {
      return new Response(JSON.stringify({ message: "User not found." }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Check if the current password matches the hashed password in the DB
    const isPasswordMatch = await compare(currentPassword, findUser.password);
    if (!isPasswordMatch) {
      return new Response(
        JSON.stringify({ message: "Incorrect current password." }),
        { status: 401, headers: { "Content-Type": "application/json" } }
      );
    }

    // Hash the new password
    const hashedPassword = await hash(newPassword, 10);

    // Update the user's password in the database
    const updatedUser = await prisma.user.update({
      where: { id },
      data: {
        password: hashedPassword,
      },
    });

    // Return the updated user (without password)
    return new Response(
      JSON.stringify({ message: "Password updated successfully." }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error updating password:", error);
    return new Response(JSON.stringify({ message: "Internal server error." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
