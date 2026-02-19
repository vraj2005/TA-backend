import { db } from "@/lib/mysql";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const [rows] = await db.query("SELECT * FROM Users WHERE UserID = ?", id);

  return NextResponse.json(rows);
}
  