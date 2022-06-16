import React, { useState } from "react";
import Navbar from "./Navbar";
import axios from "../helpers/axios";
import "../style/login.css";

const Register = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const registerForm = async () => {
    const res = await fetch(
      "http://localhost:80/api/signup",
      { mode: "no-cors" },
      { method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, password }),
      }
    );
    console.log(res);

    // fetch("http://localhost:80/api/signup", {mode:'cors'} ,{
    //   method: "post",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email, name, password }),
    // }).then(res=>res.json()).then(data=>{
    //   console.log(data)
    // });
  };
  return (
    <>
      <Navbar />
      <div className="loginSec">
        <h1>Register</h1>
        <div className="inputSec">
          <h3>Name</h3>
          <input
            type="text"
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="Enter your Name..."
          />
          <h3>Email</h3>
          <input
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter your Email Id..."
          />
          <h3>Password</h3>
          <input
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter your Password..."
          />
        </div>
        <button onClick={registerForm}>Register</button>
      </div>
    </>
  );
};

export default Register;
