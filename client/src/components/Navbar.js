// src/components/Navbar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/" className="nav-button">Home</NavLink>
      <NavLink to="/login" className="nav-button">Login</NavLink>
      <NavLink to="/signup" className="nav-button">Signup</NavLink>
      <NavLink to="/cart" className="nav-button">Cart</NavLink>
    </nav>
  );
};

export default Navbar;
