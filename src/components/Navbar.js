import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from "../../src/images/logo1.png";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="Preprint Commons Logo" className="logo" />
      </Link>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/search">Search</Link>
      <Link to="/browse">Browse</Link>
      <Link to="/download">Download</Link>
      <Link to="/faq">FAQ</Link>
    </nav>
  );
};

export default Navbar;
