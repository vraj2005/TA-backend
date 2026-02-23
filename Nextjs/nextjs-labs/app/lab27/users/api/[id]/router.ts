import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const user = await prisma.users.findUnique({
    where: { UserID: Number(id) },
  });

  return NextResponse.json(user);
}