import "./NavMenu.scss";
import { useState } from "react";

const NavMenu = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false)
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        section.scrollIntoView({ behavior: 'smooth' });
    };
    const upload = () => {
       // alert("hello");
        setIsNavExpanded(!isNavExpanded);
        console.log(isNavExpanded);
    }
    return (
        <nav className="navigation">
            <p href="/" className="brand-name">
                SK
            </p>
            <button className="hamburger" onClick={() => {
               // setIsNavExpanded(!isNavExpanded)
               upload()
            }} >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div className={`navigation-menu ${isNavExpanded ? 'expanded' : ''}`}>
                <ul>
                    <li onClick={() => scrollToSection('about-me')}>About
                    </li>
                    <li onClick={() => scrollToSection('projects')}>Projects</li>
                    <li onClick={() => scrollToSection('experience')}>Experience</li>
                    <li onClick={() => scrollToSection('skills')}>Skills</li>
                    <li onClick={() => scrollToSection('education')}>Education</li>
                    <li onClick={() => scrollToSection('certifications')}>Certifications</li>
                    <li onClick={() => scrollToSection('contact')} >Contact</li>
                </ul>
            </div>
        </nav>
    )
}
export default NavMenu;