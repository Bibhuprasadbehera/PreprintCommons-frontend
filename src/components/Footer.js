import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <p>
        &copy; {new Date().getFullYear()} preprintcommons |{' '}
        <a href="/about">About Preprints</a>
      </p>
    </footer>
  );
};

export default Footer;
