  import Link from "next/link";
  async function getUsers() {
    const res = await fetch("https://6991f7328f29113acd3ce0ea.mockapi.io/api/student/students", {
      cache: "no-store",
    });
    return res.json();
  }

  export default async function UsersPage() {
    const users = await getUsers();

    return (
      <div>
        <h1>All Users</h1>
        <ul>
          {users.map((u: any) => (
              //<li key={u.id}>{u.name}</li>
            <li key={u.id}>
              <Link href={`/lab25/users/${u.id}`}>{u.name}</Link>
          </li>
          ))}
        </ul>
      </div>
    );
  }
