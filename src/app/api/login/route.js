import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req) {
  const body = await req.json();
  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });
    console.log(existingUser);

    if (existingUser) {
      if (existingUser.password === body.password) {
        return NextResponse.json({ message: "Welcome Back", data: existingUser }, { status: 200 });
      } else {
        return NextResponse.json(
          { message: "Wrong Password" },
          { status: 400 }
        );
      }
    } else {
      return NextResponse.json(
        { message: "User doesn't exist" },
        { status: 400 }
      );
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Internal Server Error", error: err.message },
      { status: 500 }
    );
  } 
}
