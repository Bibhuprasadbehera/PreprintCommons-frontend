import React, { useState, useEffect } from 'react';
import './GoToTop.css';

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scrolling
    });
  };

  return (
    isVisible && (
      <button className="go-to-top" onClick={scrollToTop}>
        &#8593;
      </button>
    )
  );
};

export default GoToTop;
