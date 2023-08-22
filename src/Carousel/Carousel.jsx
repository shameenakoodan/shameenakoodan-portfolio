// Carousel.js
import React, { useState } from "react";
import "./Carousel.scss";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";

const Carousel = ({ slides }) => {
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
          HelpOnYourWay - A handyman services listing application
        </h2>
        <br />
        Developed using a robust tech stack that includes Spring Boot,
        Thymeleaf, HTML, SCSS, JavaScript, JSON, Spring Security, MySQL, and
        REST API, HandyMap provides an intuitive interface for users to explore
        and request various services conveniently. With a seamless blend of
        frontend and backend technologies, users can easily search for services,
        view detailed listings. HandyMap not only streamlines the process of
        service discovery but also ensures data security and integrity through
        its implementation of Spring Security and MySQL database integration.
        Elevate your experience of finding and offering services with
        HelpOnYourWay – where technology meets convenience.
        <a
          href="https://github.com/shameenakoodan/HandyManApplication-PerScholas"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default Carousel;
