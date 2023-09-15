import Popup from "../Popup/Popup";
import VPopup from "../VPopUp/VPopUp";
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
  const hangman_description =
    "Dive into the captivating world of word-guessing with my Hangman Game project. Crafted using Vanilla JavaScript, HTML, and SCSS, this classic game is brought to life with a modern twist. What sets this game apart is its single-page interface that smoothly shifts between various stages without navigating away from the page. The dynamically generated DOM elements ensure a unified experience that mimics the sensation of exploring separate pages.Key features include : Engaging Gameplay, Multiple Categories, Responsive Design, Immersive User Interface. Play, enjoy, and experience the thrill of word-guessing across four unique categories bringing back nostalgia.";
  const hangman_heading = "Hangman Game - Wordplay Reimagined";
  const hangman_github = "https://github.com/shameenakoodan/HANGMAN.git";
  const todo_heading = "Todo - Streamline Your Life, One Task at a Time!";
  const todo_description = "Powered by React for frontend, Spring Boot with MySQL for backend, and featuring seamless task management, Todo application offers a comprehensive and user-friendly task management experience. This app empowers users to effortlessly organize their to-do lists, add new tasks, edit details, mark tasks as completed, and remove completed or unnecessary items. With a perfect fusion of frontend and backend technologies, Todo ensures a streamlined and responsive interface for users to prioritize tasks and stay in control of their daily commitments. Witness the efficiency of Spring Boot, MySQL, and React as they come together to simplify task management and boost productivity, making Todo the ultimate solution for keeping your life organized and tasks on track";
  const todo_github = "https://github.com/shameenakoodan/todo-frontend";
  const todo_video =  process.env.PUBLIC_URL + "/videos/Todo.mov";
  const handyman_video = process.env.PUBLIC_URL + "/videos/HandyMan.mov";
  const handy_man_screenshot = process.env.PUBLIC_URL+"/images/handyman/handyman-homepage_50.png";
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
        <div className="card-img">
          <img src={handy_man_screenshot} alt="" srcset="" width={230} height={230}/>
        </div>
        <h3>HandyMan App</h3>
        <p>
          Introducing HelpOnYourWay – a dynamic and user-friendly service
          listing application that connects users with a wide range of local
          services.
        </p>
        <div>
          <VPopup
            imageUrls={imageUrls}
            heading={handyman_heading}
            description={handyman_description}
            github={handyman_github}
            video = {handyman_video}
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
          Experience the timeless thrill of word-guessing with my Hangman Game
          .Its single-page interface transitions between different stages
          without leaving the page.
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
        <h3>Todo Application</h3>
        <p>
        Introducing an interactive and dynamic Todo app that revolutionizes task management. This feature-rich app combines task creation, deletion, and organization  
        </p>
        <div>
          <VPopup
            heading={todo_heading}
            description={todo_description}
            github={todo_github}
            video = {todo_video}
          />
        </div>
      </div>
    </div>
  );
};
export default Projects;
