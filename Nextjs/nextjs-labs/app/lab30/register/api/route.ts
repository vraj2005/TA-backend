import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const user = await prisma.user.create({
    data: {
      UserName: body.name,
      Password: body.password,
    },
  });

  return NextResponse.json(user);
}