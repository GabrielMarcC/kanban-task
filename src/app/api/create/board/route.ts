import { prisma } from "./../../../../lib/prisma";
import { NextResponse } from "next/server";
import { CreateBoard } from "@/lib/schema";

export async function POST(request: Request) {
  try {
    const { name, email } = CreateBoard.parse(await request.json());

    if (!name || !email) {
      return NextResponse.json({
        status: 400,
        message: "missing fields",
      });
    }

    const createBoard = await prisma.board.create({
      data: {
        name: name,
        user: {
          connect: {
            email: email,
          },
        },
      },
      include: {
        user: true,
      },
    });

    return NextResponse.json(createBoard, { status: 201 });
  } catch (error) {
    console.log("[POST USER]", error);
    return NextResponse.json("Not created", { status: 400 });
  }
}
