import { db } from "@/lib/mysql";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name") || "";

    const [rows] = await db.query(
        "SELECT * FROM Users WHERE UserName LIKE ?",
        `%${name}%`
    );

    return NextResponse.json(rows);
}
