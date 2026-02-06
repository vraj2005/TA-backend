let items = ["Apple", "Banana", "Mango"];

export async function GET() {
  return Response.json(items);
}

export async function POST(req: Request) {
  const body = await req.json();
  items.push(body.name);

  return Response.json({ message: "Item added", items });
}

export async function PUT(req: Request) {
  const body = await req.json();
  const { index, name } = body;

  if (items[index]) {
    items[index] = name;
    return Response.json({ message: "Item updated", items });
  }

  return Response.json({ message: "Item not found" }, { status: 404 });
}

export async function DELETE(req: Request) {
  const body = await req.json();
  const { index } = body;

  if (items[index]) {
    items.splice(index, 1);
    return Response.json({ message: "Item deleted", items });
  }

  return Response.json({ message: "Item not found" }, { status: 404 });
}
