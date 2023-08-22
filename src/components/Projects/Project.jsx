import Popup from "../Popup/Popup";
import  "./Projects.scss";


const Projects = () => {
    const image1 = process.env.PUBLIC_URL + "/images/handyman-homepage.png";
    const handyman_logo = process.env.PUBLIC_URL +"/images/logo_with_caption.png";
    const imageUrls = [
        process.env.PUBLIC_URL + "/images/handyman/handyman-homepage.png",
        process.env.PUBLIC_URL + "/images/handyman/handymandashboard.png",
        process.env.PUBLIC_URL + "/images/handyman/handymansignup.png",
        process.env.PUBLIC_URL + "/images/handyman/login-all.png",
        process.env.PUBLIC_URL + "/images/handyman/searchresult.png",
        process.env.PUBLIC_URL + "/images/handyman/signup1.png",
        process.env.PUBLIC_URL + "/images/handyman/usersignup.png"
      ];
    return (
        <div className="parallax-container parallax-container2">
            <div className="card">
                <div className="card-img">
                    </div>
                <h3>HandyMan App</h3>
                <p>
                Introducing HelpOnYourWay – a dynamic and user-friendly service listing application that connects users with a wide range of local services.
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