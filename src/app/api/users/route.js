import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
  try {
    const existingUsers = await prisma.user.findMany();

    if (existingUsers) {
      return NextResponse.json({data: existingUsers }, { status: 200 });
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
