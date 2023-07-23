import "./App.css";

import Navigation from "./components/Navigation/Navigation";
const App = () => {


  return (
    <div className="App">
    
      <section className="parallax-container">
      <div className="card-hero">
          <div className="card-img"></div>
          <h3>Shameena Koodan</h3>
          <div>Full Stack Java Developer</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            aliquam, libero sed blandit efficitur, felis turpis rutrum odio, at
            dapibus lorem augue nec arcu
          </p>
        </div>
        <div className="content">
          <div>
            <h1></h1>
          </div>
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
