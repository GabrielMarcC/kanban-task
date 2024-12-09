import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const allSubtasks = await prisma.subtask.findMany();

    return NextResponse.json(allSubtasks, { status: 200 });
  } catch (error) {
    console.log("[GET ALL SUBTASKS]", error);
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }
}
