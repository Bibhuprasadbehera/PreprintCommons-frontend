import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} preprintcommons |{' '}
          <Link to="/about">About</Link> |{' '}
          <Link to="/contact">Contact</Link>
        </p>
        </div>
    </footer>
  );
};

export default Footer;
