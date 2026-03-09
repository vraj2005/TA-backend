import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT(request:Request){

const body=await request.json();

const user=await prisma.user.update({
where:{UserID:Number(body.id)},
data:{Password:body.password}
})

return NextResponse.json(user);
}