import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const client = new MongoClient(
  "mongodb+srv://DeathG7n:if3anYichukwu@cluster0.gpfyqmb.mongodb.net/?retryWrites=true&w=majority"
);

async function getDB(dbName) {
  await client.connect();
  console.log("Connected to Database");
  return client.db(dbName).collection("user");
}

export async function POST(req) {
  try {
    const body = await req.json();

    const userCollection = await getDB("users");
    const existingUser = await userCollection.findOne({ email: body.email });
    console.log(existingUser);

    if (existingUser) {
      if (existingUser.password === body.password) {
        return NextResponse.json({ message: "Welcome Back" }, { status: 200 });
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
  } finally {
    await client.close().catch(() => {});
  }
}
