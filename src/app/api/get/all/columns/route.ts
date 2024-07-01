import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const allColumns = await prisma.column.findMany();

    return NextResponse.json(allColumns, { status: 200 });
  } catch (error) {
    console.log("[GET ALL COLUMNS]", error);
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }
}
