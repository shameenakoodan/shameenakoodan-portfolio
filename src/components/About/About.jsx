const About = () => {
    return (
        <div>
            <div className="about-me">
                <div className="description">
                    <h3>Shameena Koodan</h3>
                    <div>Full Stack Java Developer</div>
                    <p>
                        I'm a full stack software developer with a love for crafting
                        elegant and efficient solutions. My journey in the world of coding
                        began with a fascination for problem-solving, and since then, I've
                        been on a mission to create seamless user experiences and scalable
                        applicastions. From front-end design to back-end development, I
                        thrive in the dynamic world of web development. Let's collaborate
                        and bring your ideas to life!
                    </p>
                </div>
                <div className="about-me-image">
                    <img src={process.env.PUBLIC_URL + "/images/Shameena_no background.png"}></img>
                </div>


            </div>
        </div>
    )
}
export default About;