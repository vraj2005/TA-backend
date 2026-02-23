import { db } from "@/lib/mysql";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ userId: string }> }
) {
  const { userId } = await params;

  const [rows] = await db.query(
    `SELECT 
        Task.TaskID,
        Task.TaskTitle,
        Task.TaskDescription,
        Task.IsCompleted,
        Users.UserName
     FROM Task
     JOIN Users ON Task.UserID = Users.UserID
     WHERE Users.UserID = ?`,
    [userId]
  );

  return NextResponse.json(rows);
}