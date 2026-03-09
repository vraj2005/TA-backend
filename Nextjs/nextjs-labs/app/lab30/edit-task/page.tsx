"use client"

import { useState } from "react";

export default function Page(){

const [id,setId]=useState("");
const [title,setTitle]=useState("");
const [description,setDescription]=useState("");

const updateTask=async()=>{

await fetch(`/lab30/edit-task/api/${id}`,{
method:"PUT",
body:JSON.stringify({title,description}),
headers:{"Content-Type":"application/json"}
})

alert("Task Updated")
}

return(
<div>

<h2>Edit Task</h2>

<input placeholder="Task ID"
onChange={(e)=>setId(e.target.value)}
/>

<input placeholder="New Title"
onChange={(e)=>setTitle(e.target.value)}
/>

<input placeholder="New Description"
onChange={(e)=>setDescription(e.target.value)}
/>

<button onClick={updateTask}>Update Task</button>

</div>
)
}