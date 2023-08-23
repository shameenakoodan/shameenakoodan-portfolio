import "./Experience.scss";
const Experience = () => {
  const nology = process.env.PUBLIC_URL+ "/logo/nology.svg";

  return (
    <div className="custom-font work-experience">
      <h2>Experience</h2>
      <img src={nology} alt="Nology" />
      <span>Cloud Engineer trainee</span>
      <div>

      </div>
     
    </div>
  );
};
export default Experience;
