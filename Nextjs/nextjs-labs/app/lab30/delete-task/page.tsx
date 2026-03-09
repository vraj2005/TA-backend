"use client"

import { useState } from "react";

export default function Page(){

const [id,setId] = useState("");

const deleteTask = async () => {

await fetch(`/lab30/delete-task/api/${id}`,{
method:"DELETE"
})

alert("Task Deleted")

}

return(

<div>

<h2>Delete Task</h2>

<input
placeholder="Enter Task ID"
onChange={(e)=>setId(e.target.value)}
/>

<button onClick={deleteTask}>
Delete Task
</button>

</div>

)

}