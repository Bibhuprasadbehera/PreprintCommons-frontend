import React from 'react';
import './Carousel.css';

const Carousel = ({ children }) => {
  return (
    <div className="carousel">
      {children}
    </div>
  );
};

export default Carousel;
