// Carousel.js
import React, { useState } from "react";
import "./Carousel.scss";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Carousel = ({ slides,heading,description,github }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };
  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };
  return (
    <div>
      <div className="carousel">
        <BsArrowLeftCircleFill onClick={goToPrevious} className="arrows" />
        <img
          src={slides[currentIndex]}
          alt={`Slide ${currentIndex}`}
          className="image-slides"
        />
        <BsArrowRightCircleFill onClick={goToNext} className="arrows" />
      </div>
      <div className="description">
        <h2 class="curved-underline">
          {heading}
        </h2>
        <br />
        {description}
        <br />
        <a href = {github} target = '_blank' rel = 'noopener noreferrer'> Github </a > 
      </div>
    </div>
  );
};

export default Carousel;
