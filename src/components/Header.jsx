import React from 'react';
import { NavLink } from 'react-router-dom'; 
import './Header.css';

function Header() {
  return (
    <header className="header">
      {/* Logo Section */}
      <div className="header-logo">
        <h2>Church Name</h2>
      </div>

      {/* Navigation Links */}
      <nav className="header-nav">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">
          About
        </NavLink>
        <NavLink to="/events">
          Events
        </NavLink>
        <NavLink to="/sermons">
          Sermon
        </NavLink>
        <NavLink to="/contact">
          Contact
        </NavLink>
      </nav>

      {/* Buttons Section (Donate + Login) */}
      <div className="header-buttons">
        <button className="donate-btn">Donate</button>
        <NavLink to="/dashboard" className="login-btn">
          Login
        </NavLink>
      </div>
    </header>
  );
}

export default Header;

