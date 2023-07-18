import logo from "./logo.svg";
import "./App.css";
import { useRef } from "react";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  const about = useRef(null);
  const experience = useRef(null);
  const projects = useRef(null);
  const skills = useRef(null);
  const awards = useRef(null);
  const education = useRef(null);
  const contact = useRef(null);
  const scrollToSection = (elementRef) =>{
    window.scroll({
        top:elementRef.current.offsetTop,
        behaviour: "smooth"
    });
}
  return (
    <div className="App">
      <ScrollToTop/>
      <div className="hero">
        <ul>
          <li className="link" onClick={()=>scrollToSection(about)}>About</li>
          <li className="link" onClick={()=>scrollToSection(experience)}>Experience</li>
          <li className="link" onClick={()=>scrollToSection(projects)}>Projects</li>
          <li className="link" onClick={()=>scrollToSection(skills)}>Skills</li>
          <li className="link" onClick={()=>scrollToSection(awards)}>Awards</li>
          <li className="link" onClick={()=>scrollToSection(education)}>Education</li>
          <li className="link" onClick={()=>scrollToSection(contact)}>Contact</li>
        </ul>
      </div>
      <div className="about" ref={about} >About</div>
      <div className="experience" ref={experience}>Experience</div>
      <div className="projects" ref={projects}>Projects</div>
      <div className="skills" ref={skills}>Skills</div>
      <div className="awards" ref={awards}>Awards</div>
      <div className="education" ref={education}>Education</div>
      <div className="contact" ref={contact}>Contact</div>
    </div>
  );
}

export default App;