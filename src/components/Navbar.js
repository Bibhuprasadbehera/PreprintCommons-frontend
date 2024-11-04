import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/search">Search</Link>
      <Link to="/browse">Browse</Link>
      <Link to="/download">Download</Link>
      <Link to="/faq">FAQ</Link> {/* Add FAQ link */}
    </nav>
  );
};

export default Navbar;
