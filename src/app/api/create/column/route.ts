import { prisma } from "@/lib/prisma";
import { CreateColumns } from "@/lib/schema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { boardId, name } = CreateColumns.parse(await request.json());

    if (!boardId || !name) {
      return NextResponse.json("Missing fields", { status: 400 });
    }

    const createColumn = await prisma.column.create({
      data: {
        boardId: boardId,
        name: name || "TODO",
      },
      include: {
        board: true,
      },
    });

    return NextResponse.json(createColumn, { status: 201 });
  } catch (error) {
    console.log("[POST COLUMN]", error);
    return NextResponse.json({ message: "Not created" }, { status: 400 });
  }
}
