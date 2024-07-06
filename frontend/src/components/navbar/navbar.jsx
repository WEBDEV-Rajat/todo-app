import React from 'react';
import Logo from './logo.png';
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className='navbar'>
      <header>
      <p>
        <img src={Logo} alt='logo'/>
      <h1>To Do Ticker</h1>
      </p>
      </header>
    </div>
  )
}


