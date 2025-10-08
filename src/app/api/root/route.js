import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(req) {
  const body = await req.json();
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json({ data: users }, { status: 200 })
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Internal Server Error", error: err.message },
      { status: 500 }
    );
  } 
}
