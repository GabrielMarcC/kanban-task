import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  try {
    const { name, email, password } = await request.json();

    if (!name || !email || !password) {
      return new NextResponse("name and password are required", {
        status: 401,
      });
    }

    const hash = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: hash,
      },
    });

    return NextResponse.json(user, { status: 200 });
  } catch (error: any) {
    console.log("[POST USER]", error);
    return new NextResponse("Invalid credentials", { status: 400 });
  }
}
