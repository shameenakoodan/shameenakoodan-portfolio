import "./App.css";
import Popup from "reactjs-popup";
import Navigation from "./components/Navigation/Navigation";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import About from "./components/About/About";
import Projects from "./components/Projects/Project";

const App = () => {
  const image1 = process.env.PUBLIC_URL + "/images/handyman-homepage.png";
  return (
    <div className="App">
      <Navigation />
      <section className="parallax-container parallax-container1" id = "about-me">
        <About />
      </section>
      <section  id="projects">
        <Projects />
      </section>

      <section className="buffer" id="experience"></section>
      <section className="parallax-container parallax-container3" id="skills">
        <div className="skill-card">
          <img src="/"></img>
          <div className="skill-card-img"></div>
        </div>
        <div className="skill-card">
          <div className="skill-card-img"></div>
        </div>
        <div className="skill-card">
          <div className="skill-card-img"></div>
        </div>
        <div className="skill-card">
          <div className="skill-card-img"></div>
        </div>
        <div className="skill-card">
          <div className="skill-card-img"></div>
        </div>
        <div className="skill-card">
          <div className="skill-card-img"></div>
        </div>
        <div className="skill-card">
          <div className="skill-card-img"></div>
        </div>
        <div className="skill-card">
          <div className="skill-card-img"></div>
        </div>
        <div className="skill-card">
          <div className="skill-card-img"></div>
        </div>
        <div className="skill-card">
          <div className="skill-card-img"></div>
        </div>
        <div className="skill-card">
          <div className="skill-card-img"></div>
        </div>
        <div className="skill-card">
          <div className="skill-card-img"></div>
        </div>
        <div className="skill-card">
          <div className="skill-card-img"></div>
        </div>
        <div className="skill-card">
          <div className="skill-card-img"></div>
        </div>
        <div className="skill-card">
          <div className="skill-card-img"></div>
        </div>
        <div className="skill-card">
          <div className="skill-card-img"></div>
        </div>
        <div className="skill-card">
          <div className="skill-card-img"></div>
        </div>
        <div className="skill-card">
          <div className="skill-card-img"></div>
        </div>
        <div className="skill-card">
          <div className="skill-card-img"></div>
        </div>
      </section>
      <section className="buffer" id="awards"></section>
      <section
        className="parallax-container parallax-container2"
        id="education"
      ></section>
      <section className="buffer" id="contact"></section>
    </div>
  );
};

export default App;
