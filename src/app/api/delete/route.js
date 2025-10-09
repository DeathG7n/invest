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

    if (existingUser) {
      const coins = existingUser?.portfolio?.assets?.coins?.map((i) => {
        return i;
      });
      const currentCoin = coins?.find((i) => i?.sym.toLowerCase() == body?.sym.toLowerCase());
      if (currentCoin) {
        const index = coins?.indexOf(currentCoin);
        coins.splice(index, 1)
      } else {
        return NextResponse.json({ message: "Coin  Doesn't Exist" }, { status: 400 });
      }
      const portfolio = {
        assets: {
          coins: coins,
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
      return NextResponse.json({ message: "User Updated" }, { status: 200 });
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
