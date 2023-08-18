import { Carousel } from "react-responsive-carousel";
import Popup from "reactjs-popup";

const Projects = () => {
    const image1 = process.env.PUBLIC_URL + "/images/handyman-homepage.png";
    return (
        <div className="parallax-container parallax-container2">
            <div className="card">
                <div className="card-img"></div>
                <h3>HandyMan App</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                    aliquam, libero sed blandit efficitur, felis turpis rutrum odio, at
                    dapibus lorem augue nec arcu
                </p>
                <div>
                    <Popup trigger={<a> Learn more </a>} modal nested>
                        {(close) => (
                            <div className="modal">
                                <div className="content">
                                    HandyMan Application
                                    <div>
                                        <Carousel>
                                            <div>
                                                <img src={image1} alt="Slide 1" />
                                                <p className="legend">Slide 1</p>
                                            </div>
                                            <div>
                                                <img src={image1} alt="Slide 2" />
                                                <p className="legend">Slide 2</p>
                                            </div>
                                            <div>
                                                <img src={image1} alt="Slide 3" />
                                                <p className="legend">Slide 3</p>
                                            </div>
                                        </Carousel>
                                    </div>
                                </div>
                                <div className="close-div">
                                    <button className="close" onClick={() => close()}></button>
                                </div>
                            </div>
                        )}
                    </Popup>
                </div>
            </div>
            <div className="card">
                <div className="card-img"></div>
                <h3>Weather App</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                    aliquam, libero sed blandit efficitur, felis turpis rutrum odio, at
                    dapibus lorem augue nec arcu
                </p>
                <a href="#">Learn more</a>
            </div>
            <div className="card">
                <div className="card-img"></div>
                <h3>HangMan Game</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                    aliquam, libero sed blandit efficitur, felis turpis rutrum odio, at
                    dapibus lorem augue nec arcu
                </p>
                <div>
                    <Popup trigger={<a> Learn more </a>} modal nested>
                        {(close) => (
                            <div className="modal">
                                <div className="content">Welcome to GFG!!!</div>
                                <div className="close-div">
                                    <button className="close" onClick={() => close()}></button>
                                </div>
                            </div>
                        )}
                    </Popup>
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
                <a href="/">Learn more</a>
            </div>
        </div>
    )
}
export default Projects;