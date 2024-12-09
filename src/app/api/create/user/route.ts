import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { UserSchema } from "@/lib/schema";

export async function POST(request: Request) {
  try {
    const { name, email, password } = UserSchema.parse(await request.json());

    if (!name || !email || !password) {
      return new NextResponse("Name and Password are required", {
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

    return NextResponse.json(user, { status: 201 });
  } catch (error: any) {
    console.log("[POST USER]", error);
    return new NextResponse("Missing fields", { status: 400 });
  }
}
