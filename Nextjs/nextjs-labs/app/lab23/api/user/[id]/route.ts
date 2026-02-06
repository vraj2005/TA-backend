import { NextRequest, NextResponse } from "next/server";
import { students } from "../../data";



export async function GET(
  request: NextRequest,
  { params }: {params:Promise<{id:string}>}
) {
  const { id } = await params;          
  const numericId = Number(id);         

  const student = students.find(
    (s) => s.id === numericId
  );

  if (!student) {
    return NextResponse.json(
      { message: "Student not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(student);
}

export async function PUT(
  request: NextRequest,
  { params }: {params:Promise<{id:string}>}
) {
  const { id } = await params;
  const numericId = Number(id);
  const body = await request.json();

  const index = students.findIndex(
    (s) => s.id === numericId
  );

  if (index === -1) {
    return NextResponse.json(
      { message: "Student not found" },
      { status: 404 }
    );
  }

  students[index].name = body.name;

  return NextResponse.json({ message: "Student updated" });
}


export async function DELETE(
  request: NextRequest,
  {  params }: {params:Promise<{id:string}>}
) {
  const { id } = await params;
  const numericId = Number(id);

  const index = students.findIndex(
    (s) => s.id === numericId
  );

  if (index === -1) {
    return NextResponse.json(
      { message: "Student not found" },
      { status: 404 }
    );
  }

  students.splice(index, 1);

  return NextResponse.json({ message: "Student deleted" });
}