
async function getUsers(id:string) {
  const res = await fetch(`https://6991f7328f29113acd3ce0ea.mockapi.io/api/student/students/${id}`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function UsersPage({params}:{params:Promise<{id:string}>}) {
    const { id } = await params;
    const users = await getUsers(id);

  return (
    <div>
      <h1>Get User by ID:</h1>
      <p>ID:{users.id}</p>
      <p>name:{users.name}</p>
    </div>
  );
}
