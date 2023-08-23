import "./About.scss";
const About = () => {
    return (
        <div>
            <div className="about-me">
            <div className="about-me-image">
                    <img src={process.env.PUBLIC_URL + "/images/Shameena_no background.png"}></img>
                </div>
                <div className="description custom-font">
                    <h3><center>Hello there !!!</center></h3>
                    <p>
                        I'm Shameena Koodan, a full stack software developer with a love for crafting
                        elegant and efficient solutions. My journey in the world of coding
                        began with a fascination for problem-solving, and since then, I've
                        been on a mission to create seamless user experiences and scalable
                        applicastions. From front-end design to back-end development, I
                        thrive in the dynamic world of web development. Let's collaborate
                        and bring your ideas to life!
                    </p>
                </div>
                


            </div>
        </div>
    )
}
export default About;