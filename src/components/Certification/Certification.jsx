import "./Certification.scss";
const Certification =()=>{
    const perscholas = process.env.PUBLIC_URL + "/images/certifications/perscholas.png";
    const nology = process.env.PUBLIC_URL + "/images/certifications/nology.jpg";

    return (
        <div>
            <img src={perscholas} className="certficate-image"/>
            <img src={nology} className="certficate-image"/>
        </div>
    )
}
export default Certification;