import Popup from "../Popup/Popup";

const Projects = () => {
    const image1 = process.env.PUBLIC_URL + "/images/handyman-homepage.png";
    const handyman_logo = process.env.PUBLIC_URL +"/images/logo_with_caption.png";
    const imageUrls = [
        process.env.PUBLIC_URL + "/images/handyman-homepage.png",
        process.env.PUBLIC_URL + "/images/html.jpg",
        process.env.PUBLIC_URL + "/images/Java.jpg"
      ];
    return (
        <div className="parallax-container parallax-container2">
            <div className="card">
                <div className="card-img">
                    </div>
                <h3>HandyMan App</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                    aliquam, libero sed blandit efficitur, felis turpis rutrum odio, at
                    dapibus lorem augue nec arcu
                </p>
                <div>
                    <Popup imageUrls={imageUrls}/>
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
                <div>
                </div>
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
                <div>
                </div>
            </div>
        </div>
    )
}
export default Projects;