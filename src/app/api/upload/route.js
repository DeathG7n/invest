import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function capitalizeFirstLetter(str) {
  if (str.length === 0) {
    return ""; // Handle empty strings
  }
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export async function POST(req) {
  const body = await req.json();
  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (existingUser) {
      await prisma.user.update({
        where: {
          id: existingUser?.id,
        },
        data: {
          image: body.image,
        },
      });
      return NextResponse.json({ message: "User Updated" }, { status: 200 });
    } else {
      return NextResponse.json(
        { message: "User doesn't exist" },
        { status: 400 },
      );
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Internal Server Error", error: err.message },
      { status: 500 },
    );
  }
}
