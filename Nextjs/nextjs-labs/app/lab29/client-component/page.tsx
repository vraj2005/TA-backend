"use client"

import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Client Component Example</h2>

      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}