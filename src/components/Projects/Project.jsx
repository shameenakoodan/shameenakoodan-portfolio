import Popup from "../Popup/Popup";
import "./Projects.scss";

const Projects = () => {
  const image1 = process.env.PUBLIC_URL + "/images/handyman-homepage.png";
  const handyman_logo =
    process.env.PUBLIC_URL + "/images/logo_with_caption.png";
  const handyman_heading =
    "HelpOnYourWay - A handyman services listing application";
  const handyman_description =
    "Developed using a robust tech stack that includes Spring Boot,Thymeleaf, HTML, SCSS, JavaScript, JSON, Spring Security, MySQL, and REST API, HandyMap provides an intuitive interface for users to explore and request various services conveniently.With a seamless blend of frontend and backend technologies, users can easily search for services, view detailed listings.HandyMap not only streamlines the process of service discovery but also ensures data security and integrity through its implementation of Spring Security and MySQL database integration. Elevate your experience of finding and offering services with HelpOnYourWay – where technology meets convenience.";
  const handyman_github =
    "https://github.com/shameenakoodan/HandyManApplication-PerScholas";
  const weather_heading = "Weather Application - Get historical data";
  const weather_description =
    "Powered by React for frontend, Node.js with Express for backend, MySQL for data storage, and Sequelize as an ORM, this Application provides a comprehensive and interactive experience for users to explore real-time and historical weather data. With a seamless blend of frontend and backend technologies, users can effortlessly access current weather data from OpenWeatherMap API, view historical weather trends,seamlessly navigate the user-friendly interface.This Application ensures accurate weather information and demonstrates the power of technology in delivering dynamic and real-time data. Integrating Node.js, Express, and Sequelize, the application effectively handles backend operations while React brings a responsive and engaging frontend to life.";
  const weather_github_frontend =
    "https://github.com/shameenakoodan/find-weather-react.git";
  const weather_github_backend =
    "https://github.com/shameenakoodan/find-the-weather-api.git";
  const hangman_description = "Dive into the captivating world of word-guessing with my Hangman Game project. Crafted using Vanilla JavaScript, HTML, and SCSS, this classic game is brought to life with a modern twist. What sets this game apart is its single-page interface that smoothly shifts between various stages without navigating away from the page. The dynamically generated DOM elements ensure a unified experience that mimics the sensation of exploring separate pages.Key features include : Engaging Gameplay, Multiple Categories, Responsive Design, Immersive User Interface. Play, enjoy, and experience the thrill of word-guessing across four unique categories bringing back nostalgia.";
  const hangman_heading = "Hangman Game - Wordplay Reimagined";
  const hangman_github ="https://github.com/shameenakoodan/HANGMAN.git";
  const imageUrls = [
    process.env.PUBLIC_URL + "/images/handyman/handyman-homepage.png",
    process.env.PUBLIC_URL + "/images/handyman/handymandashboard.png",
    process.env.PUBLIC_URL + "/images/handyman/handymansignup.png",
    process.env.PUBLIC_URL + "/images/handyman/login-all.png",
    process.env.PUBLIC_URL + "/images/handyman/searchresult.png",
    process.env.PUBLIC_URL + "/images/handyman/signup1.png",
    process.env.PUBLIC_URL + "/images/handyman/usersignup.png",
  ];
  const weatherUrls = [
    process.env.PUBLIC_URL + "/images/weather/index.png",
    process.env.PUBLIC_URL + "/images/weather/mobile_index.png",
    process.env.PUBLIC_URL + "/images/weather/mobile_search.png",
    process.env.PUBLIC_URL + "/images/weather/Search_result.png",
    process.env.PUBLIC_URL + "/images/weather/Withhistory.png",
  ];
  const hangmanUrls = [
    process.env.PUBLIC_URL + "/images/hangman/hangman_index.png",
    process.env.PUBLIC_URL + "/images/hangman/hangman_page2.png",
    process.env.PUBLIC_URL + "/images/hangman/hangman_page3.png",
    process.env.PUBLIC_URL + "/images/hangman/hangman_page4.png",
    process.env.PUBLIC_URL + "/images/hangman/hangman_page5.png",
    process.env.PUBLIC_URL + "/images/hangman/hangman_page6.png",
  ];
  return (
    <div className="parallax-container parallax-container2">
      <div className="card">
        <div className="card-img"></div>
        <h3>HandyMan App</h3>
        <p>
          Introducing HelpOnYourWay – a dynamic and user-friendly service
          listing application that connects users with a wide range of local
          services.
        </p>
        <div>
          <Popup
            imageUrls={imageUrls}
            heading={handyman_heading}
            description={handyman_description}
            github={handyman_github}
          />
        </div>
      </div>
      <div className="card">
        <div className="card-img"></div>
        <h3>Weather App</h3>
        <p>
          An interactive and dynamic weather application that integrates
          real-time weather data and historical trends to provide comprehensive
          weather experience
        </p>
        <div>
          <Popup
            imageUrls={weatherUrls}
            heading={weather_heading}
            description={weather_description}
            github={weather_github_frontend}
          />
        </div>
      </div>
      <div className="card">
        <div className="card-img"></div>
        <h3>HangMan Game</h3>
        <p>
          Experience the timeless thrill of word-guessing with my Hangman Game .Its single-page interface transitions between different stages without leaving the page.
        </p>
        <div>
          <Popup
            imageUrls={hangmanUrls}
            heading={hangman_heading}
            description={hangman_description}
            github={hangman_github}
          />
        </div>
      </div>
      <div className="card">
        <div className="card-img"></div>
        <h3>Projects</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          aliquam, libero sed blandit efficitur, felis turpis rutrum odio, at
          dapibus lorem augue nec arcu
        </p>
        <div></div>
      </div>
    </div>
  );
};
export default Projects;
