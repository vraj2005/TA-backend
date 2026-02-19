async function getUser(id: string) {
  const res = await fetch(`https://6991f7328f29113acd3ce0ea.mockapi.io/api/student/students/${id}`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function UserDetail({params}: {params: Promise<{ id: string }>;}) {
    const { id } = await params;
    const user = await getUser(id);

    return (
      <div>
        <h1>User Detail</h1>
        <p>ID: {user.id}</p>
        <p>Name: {user.name}</p>
      </div>
    );
}
