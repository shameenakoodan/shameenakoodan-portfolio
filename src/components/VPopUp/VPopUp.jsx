import React, { useState } from "react";
import "./VPopUp.scss"; // Create this file in the same directory for styling

const VPopup = ({ imageUrls, heading, description, github,video }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);
 //   const todo_video =  process.env.PUBLIC_URL + "/videos/Todo.mov";
  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  return (
    <div className="popup-container">
      <button onClick={openPopup}>Learn More</button>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <span className="close-button" onClick={closePopup}>
              &times;
            </span>
            <video controls autoplay width="600">
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="description">
        <h2 class="curved-underline">
          {heading}
        </h2>
        <br />
        {description}
        <a href = {github} target = '_blank' rel = 'noopener noreferrer'> Github </a > 
      </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default VPopup;
