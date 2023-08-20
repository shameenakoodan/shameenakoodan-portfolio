import React, { useState } from 'react';
import './Popup.scss'; // Create this file in the same directory for styling
import Carousel from '../../Carousel/Carousel';

const Popup = ({ imageUrls }) => {
  const [isPopupOpen, setPopupOpen] = useState(false);

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
            <Carousel slides={imageUrls} />
          
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
