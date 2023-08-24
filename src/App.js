import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import About from "./components/About/About";
import Projects from "./components/Projects/Project";
import Experience from "./components/Experience/Experience";
import Skills from "./components/Skills/Skills";
import Education from "./components/Education/Education";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <section className="parallax-container parallax-container1" id="about-me">
        <About />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section className="buffer" id="experience">
        <Experience />
      </section>
      <div className="skills-heading">Skill Set</div>
      <section className="parallax-container parallax-container3" id="skills">
        <Skills />
      </section>
      <section
        className="parallax-container parallax-container2"
        id="education"
      >
        <Education />
      </section>
      <section className="buffer" id="contact"></section>
    </div>
  );
};

export default App;
