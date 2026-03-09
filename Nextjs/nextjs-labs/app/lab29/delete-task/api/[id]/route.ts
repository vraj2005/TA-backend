import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  await prisma.task.delete({
    where: {
      TaskID: Number(id),
    },
  });

  return NextResponse.json({ message: "Task deleted" });
}