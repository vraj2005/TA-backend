import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request:Request){

const body=await request.json();

const task=await prisma.task.create({
data:{
TaskTitle:body.title,
TaskDescription:body.description,
IsCompleted:false,
UserID:Number(body.userId)
}
});

return NextResponse.json(task);
}