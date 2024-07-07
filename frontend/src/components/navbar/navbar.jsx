import React from 'react';
import Logo from './logo.png';
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className='navbar'>
      <header>
      <img src={Logo} alt='logo'/>
      <h1>ToDo Ticker</h1>
      </header>
    </div>
  )
}


