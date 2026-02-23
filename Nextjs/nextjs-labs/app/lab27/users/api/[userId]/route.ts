import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  const { userId } = await params;

  const tasks = await prisma.task.findMany({
    where: { UserID: Number(userId) },
  });

  return NextResponse.json(tasks);
}