import "./Experience.scss";
const Experience = () => {
  const nology = process.env.PUBLIC_URL + "/logo/nology.svg";
  const siva = process.env.PUBLIC_URL + "/logo/siva.png";
  return (
    <div className="custom-font work-experience">
      <div className="skills-heading">Experience</div>
      <div className="exp-section">
        <div className="left-exp heading-exp">Oct 2023 - Current</div>
        <div className="right-exp">
          <div className="heading-exp">
            The University of Texas - Software Developer
          </div>
          As a current web software developer, I specialize in PHP and Laravel
          development, complemented by extensive experience with AWS services.
          My current role revolves around revamping existing tools and
          maintaining codebases to ensure optimal performance and functionality.
          I thrive in addressing client needs and resolving issues promptly,
          drawing on my problem-solving skills and technical acumen. By
          continuously honing my craft and staying abreast of industry trends, I
          deliver innovative solutions that drive business success.
          <br />
          <ul class="skills-list">
            <li>PHP</li>
            <li>Laravel</li>
            <li>Springboot</li>
            <li>Python</li>
            <li>Continuous Integration and Continuous Delivery (CI/CD)</li>
            <li>Scrum</li>
            <li>Full-Stack Development</li>
            <li>Git</li>
            <li>Jenkins</li>
            <li>GitHub</li>
            <li>Amazon Web Services (AWS)</li>
            <li>Agile Methodologies</li>
            <li>CSS</li>
            <li>MySQL</li>
            <li>JavaScript</li>
            <li>HTML5</li>
            
          </ul>
        </div>
      </div>
      <div className="exp-section">
        <div className="left-exp heading-exp">Jul 2022 - Dec 2022</div>
        <div className="right-exp">
          <div className="heading-exp">Nology - Cloud Engineer trainee</div>
          Graduated as a cloud engineer trainee architecting efficient scalable
          full stack applications with persistent storage and Restful APIs.
          Developed applications using React, NodeJS, MySQL, AWS S3, and
          Jenkins. Utilized software development languages including Python,
          Javascript, HTML and SCSS to create web applications projects.
          <br />
          <ul class="skills-list">
            <li>Continuous Integration and Continuous Delivery (CI/CD)</li>
            <li>Scrum</li>
            <li>Full-Stack Development</li>
            <li>Git</li>
            <li>Jenkins</li>
            <li>GitHub</li>
            <li>Amazon Web Services (AWS)</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>Agile Methodologies</li>
            <li>CSS</li>
            <li>MySQL</li>
            <li>JavaScript</li>
            <li>HTML5</li>
          </ul>
        </div>
      </div>
      <div className="exp-section">
        <div className="left-exp heading-exp">Jul 2012 - Jun 2014 </div>
        <div className="right-exp">
          <div className="heading-exp">
            Siva Solutions - Junior software developer
          </div>
          Collaborated with a team of developers to create a web application
          that helped with marketing the company's clients. Created a desktop
          application that plays videos that are encrypted to avoid the piracy
          of the videos.
          <br />
          <ul class="skills-list">
            <li>Java Enterprise Edition</li>
            <li>Java</li>
            <li>PHP</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>MySQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Experience;
