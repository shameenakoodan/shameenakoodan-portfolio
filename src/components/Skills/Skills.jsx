import "./Skills.scss";
const Skills = () => {
  const css = process.env.PUBLIC_URL + "/icons/css3.png";
  const aws = process.env.PUBLIC_URL+ "/icons/aws.png";
  const docker = process.env.PUBLIC_URL+ "/icons/docker.png";
  const github = process.env.PUBLIC_URL+ "/icons/github.png";
  const html5 = process.env.PUBLIC_URL+ "/icons/html5.png";
  const intellij = process.env.PUBLIC_URL+ "/icons/intellij.png";
  const java = process.env.PUBLIC_URL+ "/icons/java.png";
  const javascript = process.env.PUBLIC_URL+ "/icons/javascript.png";
  const jenkins = process.env.PUBLIC_URL+ "/icons/jenkins.png";
  const mysql = process.env.PUBLIC_URL+ "/icons/mysql.png";
  const mysqlworkbench = process.env.PUBLIC_URL+ "/icons/mysqlworkbench.png";
  const nodejs = process.env.PUBLIC_URL+ "/icons/nodejs.png";
  const postman = process.env.PUBLIC_URL+ "/icons/postman.png";
  const react = process.env.PUBLIC_URL+ "/icons/React.png";
  const springsecurity = process.env.PUBLIC_URL+ "/icons/spring-security.png";
  const thymeleaf = process.env.PUBLIC_URL+ "/icons/thymeleaf.png";
  const visualstudio = process.env.PUBLIC_URL+ "/icons/visualstudio.png";
  const sass = process.env.PUBLIC_URL+ "/icons/sass.png";

  return (
    <>
      <div className="skill-card">
        <img src={html5} className="skill-card-img" alt="HTML5"></img>
      </div>
      <div className="skill-card">
        <img src={css} className="skill-card-img" alt="CSS3"></img>
      </div>
      <div className="skill-card">
        <img src={java} className="skill-card-img" alt="Java"></img>
      </div>
      <div className="skill-card">
        <img src={aws} className="skill-card-img" alt="AWS"></img>
      </div>
      <div className="skill-card">
        <img src={docker} className="skill-card-img" alt="Docker"></img>
      </div>
      <div className="skill-card">
        <img src={github} className="skill-card-img" alt=""Github></img>
      </div>
      <div className="skill-card">
        <img src={intellij} className="skill-card-img" alt="Intellij"></img>
      </div>
      <div className="skill-card">
        <img src={javascript} className="skill-card-img" alt="Javascript"></img>
      </div>
      <div className="skill-card">
        <img src={jenkins} className="skill-card-img" alt="Jenkins"></img>
      </div>
      <div className="skill-card">
        <img src={mysql} className="skill-card-img" alt="MySQL"></img>
      </div>
      <div className="skill-card">
        <img src={mysqlworkbench} className="skill-card-img" alt="MySQL Workbench"></img>
      </div>
      <div className="skill-card">
        <img src={nodejs} className="skill-card-img" alt="NodeJS"></img>
      </div>
      <div className="skill-card">
        <img src={postman} className="skill-card-img" alt="Postman"></img>
      </div>
      <div className="skill-card">
        <img src={react} className="skill-card-img" alt="React"></img>
      </div>
      <div className="skill-card">
        <img src={springsecurity} className="skill-card-img" alt="Spring Security"></img>
      </div>
      <div className="skill-card">
        <img src={thymeleaf} className="skill-card-img" alt="Thymeleaf"></img>
      </div>
      <div className="skill-card">
        <img src={visualstudio} className="skill-card-img" alt="Visual Studio"></img>
      </div>
      <div className="skill-card">
        <img src={sass} className="skill-card-img" alt="SASS"></img>
      </div>
    </>
  );
};
export default Skills;
