async function getUser(id: string) {
  const res = await fetch(`http://localhost:3000/lab26/mysql/api/${id}`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const user = await getUser(id);

  return <pre>{JSON.stringify(user)}</pre>;
}
