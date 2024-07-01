import { prisma } from "@/lib/prisma";
import { CreateSubtask } from "@/lib/schema";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { taskId, description, complete } = CreateSubtask.parse(
      await request.json()
    );

    if (!taskId || !description) {
      return NextResponse.json("Missing fields", { status: 400 });
    }

    const creatSubTask = await prisma.subtask.create({
      data: {
        taskId: taskId,
        description: description,
        complete: complete ?? false,
      },
      include: {
        task: true,
      },
    });

    return NextResponse.json(creatSubTask, { status: 201 });
  } catch (error) {
    console.log("[POST SUBTASK]", error);
    return NextResponse.json({ message: "Not created" }, { status: 400 });
  }
}
