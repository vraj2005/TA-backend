async function getUsers() {
  const res = await fetch("http://localhost:3000/lab26/mysql/api", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Page() {
  const users = await getUsers();

  return (
    <div>
      <h2>MySQL Users</h2>

      <ul>
        {users.map((u: any) => (
          <li key={u.UserID}>ID: {u.UserID} -- Name: {u.UserName}</li>
        ))}
      </ul>
    </div>
  );
}
