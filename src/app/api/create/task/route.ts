import { prisma } from "@/lib/prisma";
import { CreateTask } from "@/lib/schema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, status, description, columnId } = CreateTask.parse(
      await request.json()
    );

    const column = await prisma.column.findUnique({
      where: {
        id: columnId,
      },
    });

    if (!column) {
      return NextResponse.json("Board not found", { status: 404 });
    }

    const creatTask = await prisma.task.create({
      data: {
        columnId: columnId,
        name: name,
        description: description as string,
        status: status ?? "TODO",
      },
      include: {
        column: true,
      },
    });

    return NextResponse.json(creatTask, { status: 201 });
  } catch (error) {
    console.log("[POST TASK]", error);
    return NextResponse.json("Not created", { status: 400 });
  }
}
