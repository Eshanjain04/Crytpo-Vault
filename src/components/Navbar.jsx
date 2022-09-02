import React, { useState } from 'react'
import {Link} from "react-router-dom"
import ThemeToggle from './ThemeToggle'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import "../css/Navbar.css"

const Navbar = () => {

    const [nav,setNav] = useState(false);

    const handleNav = () =>{
        setNav(!nav)
    }
  return ( 
    <div className='navbar-container'>
        <Link className='main-heading' to="/">
            <h1>Cyrpto Vault</h1>
        </Link>
        <div className='toggleTheme'>
            <ThemeToggle/>
        </div>
        <div className='signup-and-signin'>
            <Link to="/signin" className='signin'>Sign In</Link>
            <Link to="/signup" className='signup'>Sign Up</Link>
        </div>
        <div onClick={handleNav} className='menu-icon'>
            {nav ? <AiOutlineClose/> : <AiOutlineMenu/>}
        </div>
        <div className={nav ? "mobile-menu-show" : "mobile-menu-hide"}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/account">Account</Link>
                </li>
                <li>
                    <ThemeToggle/>
                </li>
            </ul>
            <div className='mobile-signin-and-signup'>
                <Link to="/singin" className='mobile-signin'>Sign In</Link>
                <Link to="/signup"  className='mobile-signup'>Sign Up</Link>
            </div>
        </div>
       
       
    </div>
  )
}

export default Navbar