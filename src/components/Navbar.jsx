import React from 'react'
import {Link, NavLink} from 'react-router-dom';
import '../style/navbar.css'

const Navbar = () => {
  return (
      <>
          <div className="nav">
            <div className="firstSec">
                <NavLink to="/" style={{textDecoration: 'none'}}><h1>CommentApp</h1></NavLink>
            </div>
            <div className="secondSec">
                <NavLink to="/" style={{textDecoration: 'none'}}><h2>Home</h2></NavLink>
                <NavLink to="/about" style={{textDecoration: 'none'}}><h2>About</h2></NavLink>
                <NavLink to="/contact" style={{textDecoration: 'none'}}><h2>Contact</h2></NavLink>
            </div>
            <div className="thirdSec">
                <NavLink to="/login" style={{textDecoration: 'none'}}><h2>Login</h2></NavLink>
                <NavLink to="/register" style={{textDecoration: 'none'}}><h2>Register</h2></NavLink>
            </div>
          </div>
      </>
  )
}

export default Navbar