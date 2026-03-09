"use client"

import { useEffect, useState } from "react";

export default function Page() {
  const [tasks, setTasks] = useState([]);

  const getTasks = async () => {
    const res = await fetch("/lab27/tasks/api/1");
    const data = await res.json();
    setTasks(data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  const deleteTask = async (id:number) => {
    await fetch(`/lab29/delete-task/api/${id}`, {
      method: "DELETE",
    });

    getTasks();
  };

  return (
    <div>
      <h2>Delete Task (Prisma)</h2>

      <ul>
        {tasks.map((t:any) => (
          <li key={t.TaskID}>
            {t.TaskTitle}

            <button onClick={() => deleteTask(t.TaskID)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}