import React from 'react';
import { NavLink } from 'react-router-dom'; 
import './Header.css';

function Header() {
  return (
    <header className="header">
      
      <div className="header-logo">
        <h2>Church Name</h2>
      </div>

      
      <nav className="header-nav">
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/dashboard">
          Dashboard
        </NavLink>
        <NavLink to="/sermons">
          Sermons
        </NavLink>
        <NavLink to="/events">
          Events
        </NavLink>
        <NavLink to="/about">
          About
        </NavLink>
        <NavLink to="/contact">
          Contact
        </NavLink>
      </nav>

      
      <div className="header-buttons">
        <button className="donate-btn">Donate</button>
      </div>
    </header>
  );
}

export default Header;

