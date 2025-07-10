"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const SignUp = () => {
  const [user, setUser] = React.useState({
    userName: "",
    email: "",
    password: "",
  });
  const onSignUp = async () => {};
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-white text-2xl my-5" >Sign Up</h1>
    
      <label htmlFor="userame">username</label>
      <input
        className="p-1 bg-white rounded-md text-black"
        type="text"
        placeholder="username"
        id="username"
        value={user.userName}
        onChange={(e) => setUser({ ...user, userName: e.target.value })}
      />
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
        <button className="p-2 m-4 bg-white text-black rounded-md" onClick={onSignUp}>Sign Up</button>
        <span>Already a User ? Visit  <Link href="/login"><span className="text-blue-400 font-bold">Login Page</span></Link></span>
    </div>
  );
};

export default SignUp;
