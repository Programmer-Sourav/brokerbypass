import React, { useState, useRef, useEffect } from 'react';
import './popup.css';
import CustomTimePicker from './CustomTimePicker';

const PopUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef(null);
  const buttonRef = useRef(null);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {

    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button ref={buttonRef} onClick={togglePopup}>Start Time</button>
      {isOpen && (
        <div ref={popupRef} className="popup">
          <CustomTimePicker/>
        </div>
      )}
    </div>
  );
};

export default PopUp;
