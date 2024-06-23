import { prisma } from "@/lib/prisma";
import { CreateTask } from "@/lib/schema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, status, description, boardId } = CreateTask.parse(
      await request.json()
    );

    const board = await prisma.board.findUnique({
      where: {
        id: boardId,
      },
    });

    if (!board) {
      return NextResponse.json("Board not found", { status: 404 });
    }

    const creatTask = await prisma.task.create({
      data: {
        boardId: boardId,
        name: name,
        description: description as string,
        status: status ?? "TODO",
      },
      include: {
        board: true,
      },
    });

    return NextResponse.json(creatTask, { status: 201 });
  } catch (error) {
    console.log("[POST TASK]", error);
    return NextResponse.json("Not created", { status: 400 });
  }
}
