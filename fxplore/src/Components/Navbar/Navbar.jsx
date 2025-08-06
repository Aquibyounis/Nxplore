import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png';

const Navbar = () => {
  const [curr, setCurr] = useState("About");

  return (
    <div className='navbar'>
      <div className='navbar__logo'>
        <img src={logo} alt="Logo" className='logo'/>
      </div>
      <div className='navbar__links'>
        <Link 
          onClick={() => setCurr("Home")} 
          to="/home" 
          className={curr === "Home" ? "active" : ""}
        >
          HOME
        </Link>

        <Link 
          onClick={() => setCurr("About")} 
          to="/" 
          className={curr === "About" ? "active" : ""}
        >
          ABOUT
        </Link>

        <Link 
          onClick={() => setCurr("Login")} 
          to="/login" 
          className={curr === "Login" ? "active" : ""}
        >
          LOGIN
        </Link>

        <Link 
          onClick={() => setCurr("Signup")} 
          to="/signup" 
          className={curr === "Signup" ? "active" : ""}
        >
          GETSTARTED
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
