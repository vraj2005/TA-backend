"use client"

import { useState } from "react";

export default function Page() {
  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
  const register=async()=>{
    await fetch("/lab30/register/api",{
      method:"POST",
      body:JSON.stringify({name,password}),
      headers:{ "Content-Type":"application/json"}
    });
    alert("User Registered");
  }
  
  return(
    <div>   
      <h2>Register User</h2>
      <input placeholder="Name"
      onChange={(e)=>setName(e.target.value)}
      />
      <input placeholder="Password"
      onChange={(e)=>setPassword(e.target.value)}
      />
      <button onClick={register}>Register</button>
    </div>
  )
}