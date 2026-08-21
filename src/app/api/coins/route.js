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
  console.log(body)
  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        email: body.email,
      },
    });

    if (existingUser) {
      const newCoins = {
        updatedAt: body.updatedAt,
        data: body.data,
      };
      const portfolio = {
        prices : newCoins,
        assets: {
          coins: [...existingUser.portfolio.coins],
        },
      };
      await prisma.user.update({
        where: {
          id: existingUser?.id,
        },
        data: {
          portfolio: portfolio,
        },
      });
      return NextResponse.json({ message: "Coins Updated" }, { status: 200 });
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
