"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const Login = () => {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  const onLogin = async () => {};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-white text-2xl my-5" >Login</h1>
    

      <label htmlFor="email">email</label>
      <input 
            className="p-1 bg-white rounded-md text-black"
            id="email"
            value={user.email}
            onChange={(e)=>setUser({...user,email:e.target.value})}
            type="email" 
            placeholder="@gmail.com" 
        />
      <label htmlFor="password">password</label>
      <input 
            className="p-1 bg-white rounded-md text-black"
            id="email"
            value={user.password}
            onChange={(e)=>setUser({...user,password:e.target.value})}
            type="password" placeholder="password" 
        />
        <button className="p-2 m-4 bg-white text-black rounded-md" onClick={onLogin}>Login Here</button>
        <span>New User ? <Link href="/signup"><span className="text-blue-400 font-bold">Signup Page</span></Link></span>
    </div>
  );
};

export default Login;
