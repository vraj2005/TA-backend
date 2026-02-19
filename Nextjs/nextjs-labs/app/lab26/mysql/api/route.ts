import { db } from "@/lib/mysql";
import { NextResponse } from "next/server";

export async function GET() {
  const [rows] = await db.query("SELECT * FROM users");
  return NextResponse.json(rows);
}
