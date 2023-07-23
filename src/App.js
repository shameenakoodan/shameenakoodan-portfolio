import React, { useEffect, useState } from "react";
import "./App.css";
import { useRef } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Navigation from "./components/Navigation/Navigation";
const App = () => {
  const about = useRef(null);
  const experience = useRef(null);
  const projects = useRef(null);
  const skills = useRef(null);
  const awards = useRef(null);
  const education = useRef(null);
  const contact = useRef(null);
  const scrollToSection = (elementRef) => {
    window.scroll({
      top: elementRef.current.offsetTop,
      behaviour: "smooth",
    });
  };
  return (
    <div className="App">
      <div className='"navigation'>
        <Navigation />
      </div>
      <section className="parallax-container">
        <div className="content">
          <div>
            <h1>Shameena Koodan</h1>
          </div>
          <div>Full Stack Java Developer</div>
        </div>
      </section>

      <section className="buffer"></section>

      <section className="parallax-container parallax-container2">
        <div className="card">
          <div className="card-img"></div>
          <h3>Experience</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            aliquam, libero sed blandit efficitur, felis turpis rutrum odio, at
            dapibus lorem augue nec arcu
          </p>
          <a href="#">Learn more</a>
        </div>
        <div className="card">
          <div className="card-img"></div>
          <h3>Projects</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            aliquam, libero sed blandit efficitur, felis turpis rutrum odio, at
            dapibus lorem augue nec arcu
          </p>
          <a href="#">Learn more</a>
        </div>
        <div className="card">
          <div className="card-img"></div>
          <h3>Skills</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            aliquam, libero sed blandit efficitur, felis turpis rutrum odio, at
            dapibus lorem augue nec arcu
          </p>
          <a href="#">Learn more</a>
        </div>
        <div className="card">
          <div className="card-img"></div>
          <h3>Awards</h3>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            aliquam, libero sed blandit efficitur, felis turpis rutrum odio, at
            dapibus lorem augue nec arcu
          </p>
          <a href="#">Learn more</a>
        </div>
      </section>

      <section className="buffer"></section>
    </div>
  );
};

export default App;
