// Carousel.js
import React, { useState } from 'react';
import './Carousel.scss';
import { BsArrowLeftCircleFill,BsArrowRightCircleFill } from "react-icons/bs";

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };
  return (
    <div className="carousel">
        <button>prev</button>
        <BsArrowLeftCircleFill onClick={goToPrevious} />
        <img src={slides[currentIndex]} alt={`Slide ${currentIndex}`} className='image-slides'/>
        <BsArrowRightCircleFill onClick={goToNext}/>
      
    </div>
  );
};

export default Carousel;
