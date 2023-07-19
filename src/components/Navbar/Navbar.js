import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {


  return (
    <nav className="navbar">
      <h3 className="logo">Logo</h3>
      <ul className="nav-links">
        <Link to="/" className="home">Home</Link>
        <Link to="/about" className="about">About</Link>
        <Link to="/skills" className="skills">Skills</Link>
        <Link to="/signup" className="signup"> Sign Up</Link>
        <Link to="/contacts" className="contacts">Contacts</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
