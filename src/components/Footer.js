import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} preprintcommons |{' '}
        <Link to="/about">About</Link>
      </p>
    </footer>
  );
};

export default Footer;
