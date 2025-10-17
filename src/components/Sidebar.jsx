import React from 'react';
import { NavLink } from 'react-router-dom'; 
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Dashboard</h3>
      <ul>
        <li>
          <NavLink to="/dashboard" end>
            Overview
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">   {/* ✅ lowercase */}
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/events">
            Events
          </NavLink>
        </li>
        <li>
          <NavLink to="/sermons"> {/* ✅ lowercase */}
            Sermons
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
