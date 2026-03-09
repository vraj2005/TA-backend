import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(
request:Request,
{params}:{params:Promise<{id:string}>}
){

const {id}=await params;
const body=await request.json();

const task=await prisma.task.update({
where:{TaskID:Number(id)},
data:{
TaskTitle:body.title,
TaskDescription:body.description
}
})

return NextResponse.json(task)
}