import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Burger from "../assets/burger.svg";
import Close from "../assets/close.svg";

const Navbar = () => {
// const pages = ['Home', 'About', 'Skils', 'Sign-Up' ,'Contacts'];
// const router = ["/", '/home', '/about', '/skils', '/signup' ,'contacts']

  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className="navbar">
      <h3 className="logo">Logo</h3>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}>
        <Link to="/" className="home">Home</Link>
        <Link to="/about" className="about"> About </Link>
        <Link to="/skills" className="skills">Skills</Link>
        <Link to="/signup" className="signup">Sign Up</Link>
        <Link to="/contacts" className="contacts">Contacts</Link> 
      </ul>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (
          <img className="burger-icons" src={Close}></img>
        ) : (
          <img className="burger-icons" src={Burger}></img>
        )}
      </button>
    </nav>
  );
};

export default Navbar;
