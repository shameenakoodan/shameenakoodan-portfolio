// Carousel.js
import React, { useState } from 'react';
import './Carousel.scss';

const Carousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Rest of the Carousel component code

  return (
    <div className="carousel">
        <button>prev</button>
      {/* Map over the slides array */}
      {slides.map((imageUrl, index) => (
        <div key={index}>
          <img src={imageUrl} alt={index} className='image-slides'/>
        </div>
      ))}
      <button>next</button>
    </div>
  );
};

export default Carousel;
