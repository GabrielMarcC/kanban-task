import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const allBoards = await prisma.board.findMany();

    return NextResponse.json(allBoards, { status: 200 });
  } catch (error) {
    console.log("[GET ALL BOARDS]", error);
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }
}
