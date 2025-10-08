import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { MongoClient } from "mongodb";

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
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    } else {
      const portfolio = {
        assets: {
          coins: [
            {
              name: "Bitcoin",
              amount: 0,
              sym: "BTC"
            },
            {
              name: "Ethereum",
              amount: 0,
              sym: "ETH"
            },
            {
              name: "Tether(Trc20)",
              amount: 0,
              sym: "USDT"
            },
          ],
        },
      };
      await prisma.user.create({
        data: {
          full_name: body.full_name,
          user_name: body.user_name,
          email: body.email,
          country: body.country,
          password: body.password,
          agree: body.agree,
          portfolio: portfolio,
        },
      });
      return NextResponse.json(
        { message: "User created successfully" },
        { status: 200 }
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
