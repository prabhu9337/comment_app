import React from 'react'
import Navbar from './Navbar'
import '../style/login.css';

const Login = () => {
  return (
      <>
        <Navbar/>
          <div className="loginSec">
            <h1>Login</h1>
            <div className="inputSec">
              <h3>Email</h3>
              <input type="email" placeholder="Enter your Email Id..."/>
              <h3>Password</h3>
              <input type="password" placeholder="Enter your Password..."/>
            </div>
            <button>Login</button>
          </div>
      </>
  )
}

export default Login