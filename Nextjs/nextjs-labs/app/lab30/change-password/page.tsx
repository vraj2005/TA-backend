"use client"

import { useState } from "react";

export default function Page(){
const [id,setId]=useState("");
const [password,setPassword]=useState("");

const changePassword=async()=>{
    await fetch("/lab30/change-password/api",{
    method:"PUT",
    body:JSON.stringify({id,password}),
    headers:{"Content-Type":"application/json"}
    })

    alert("Password Updated")
}

return(
<div>

    <h2>Change Password</h2>

    <input placeholder="User ID"
    onChange={(e)=>setId(e.target.value)}
    />
    <input placeholder="New Password"
    onChange={(e)=>setPassword(e.target.value)}
    />
    <button onClick={changePassword}>Update</button>

</div>
)
}