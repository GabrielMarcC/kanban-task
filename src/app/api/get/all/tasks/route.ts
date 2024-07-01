import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const allTasks = await prisma.task.findMany();

    return NextResponse.json(allTasks, { status: 200 });
  } catch (error) {
    console.log("[GET ALL TASKS]", error);
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }
}
