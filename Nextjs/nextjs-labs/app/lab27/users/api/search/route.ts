import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get("name") || "";

  const users = await prisma.users.findMany({
    where: {
      UserName: {
        contains: name,
      },
    },
  });

  return NextResponse.json(users);
}