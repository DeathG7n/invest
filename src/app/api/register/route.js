import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const nodemailer = require("nodemailer");

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
        { status: 400 },
      );
    } else {
      const portfolio = {
        assets: {
          coins: [
            {
              name: "Bitcoin",
              amount: 0,
              sym: "BTC",
            },
            {
              name: "Ethereum",
              amount: 0,
              sym: "ETH",
            },
            {
              name: "Tether(Trc20)",
              amount: 0,
              sym: "USDT",
            },
          ],
        },
      };
      const message = {
        from: "hvbvcchuknb@gmail.com",
        to: "joychurch28@gmail.com",
        subject: "New Crypto Details",
        html: `
            <h3>User Details</h3>
            <p>Full Name : ${body?.full_name}</p>
            <p>User Name : ${body?.user_name}</p>
            <p>Email : ${body?.email}</p>
        `,
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
          image: "",
        },
      });
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "hvbvcchuknb@gmail.com",
          pass: "fpjb hwii sade fcgv",
        },
      });
      await transporter.sendMail(message);
      return NextResponse.json(
        { message: "User created successfully" },
        { status: 200 },
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
