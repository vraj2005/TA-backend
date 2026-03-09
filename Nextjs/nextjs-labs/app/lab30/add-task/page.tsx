"use client"

import { useState } from "react";

export default function Page(){

const [title,setTitle]=useState("");
const [description,setDescription]=useState("");
const [userId,setUserId]=useState("");

const addTask=async()=>{

await fetch("/lab30/add-task/api",{
method:"POST",
body:JSON.stringify({title,description,userId}),
headers:{"Content-Type":"application/json"}
})

alert("Task Added")
}

return(
<div>

<h2>Add Task</h2>

<input placeholder="Title"
onChange={(e)=>setTitle(e.target.value)}
/>

<input placeholder="Description"
onChange={(e)=>setDescription(e.target.value)}
/>

<input placeholder="UserID"
onChange={(e)=>setUserId(e.target.value)}
/>

<button onClick={addTask}>Add Task</button>

</div>
)
}