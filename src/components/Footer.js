import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} PreprintTrack</p>
    </footer>
  );
};

export default Footer;
