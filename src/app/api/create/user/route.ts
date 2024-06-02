import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return new NextResponse("Name and password are required", {
        status: 400,
      });
    }

    if (password.length < 6) {
      return new NextResponse("Password must be at least 6 characters long", {
        status: 400,
      });
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        email: email,
        password: hash,
      },
    });
    return NextResponse.json(user, { status: 200 });
  } catch (error: any) {
    console.log("[POST USER]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
