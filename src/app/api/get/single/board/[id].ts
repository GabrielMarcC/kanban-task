import { prisma } from "@/lib/prisma";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(request: NextApiRequest) {
  const { id } = request.query;

  if (!id) {
    return NextResponse.json("Missing id", { status: 400 });
  }

  try {
    const board = await prisma.board.findUnique({
      where: {
        id: id as string,
      },
    });

    return NextResponse.json(board, { status: 200 });
  } catch (error) {
    console.log("[GET ]", error);
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }
}
