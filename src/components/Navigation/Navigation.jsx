import "./Navigation.scss";
const Navigation = ()=>{
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };
    return (
        <div>
          <ul>
          <li className="link" onClick={() => scrollToSection('about-me')}>About</li>
          <li className="link" onClick={() => scrollToSection('projects')}>Projects</li>
          <li className="link" onClick={() => scrollToSection('experience')}>Experience</li>
          <li className="link" onClick={() => scrollToSection('skills')}>Skills</li>
          <li className="link" onClick={() => scrollToSection('education')}>Education</li>
         <li className="link" onClick={() => scrollToSection('certifications')}>Certifications</li>
          <li className="link" onClick={() => scrollToSection('contact')} >Contact</li>
        </ul>

        </div>
    )
}
export default Navigation;