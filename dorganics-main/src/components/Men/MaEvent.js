import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'; 
import '../../styles/Event.css'; // Ensure the path is correct
import { FaLock } from 'react-icons/fa';

const MaEvent = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { currentWeight, desiredWeight, height } = location.state || {
    currentAge: null,
    currentWeight: null,
    desiredWeight: null,
    height: null,
  };

  console.log('Current Weight:', currentWeight);
  console.log('Desired Weight:', desiredWeight);
  console.log('Height:', height); // Ensure height is defined

  const [selectedDate, setSelectedDate] = useState('');
  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = () => {
    console.log('Selected date:', selectedDate);
    navigate('/MaResultFirst', { state: { currentWeight, desiredWeight, height } }); // Pass height here
  };

  return (
    <div className="Event-container">
      <h2>When is your event?</h2>
      <h5>Once we know this, we’ll be able to put together a personalized plan to help you get in shape. Your data will not be shared with any third parties.</h5>
      <div>
        <label htmlFor="event-date" className="Event-label">Select date</label>
        <input 
          type="date" 
          id="event-date" 
          value={selectedDate} 
          onChange={(e) => setSelectedDate(e.target.value)} 
          className="Event-date-picker"
          min={today} 
        />
      </div>
      <div className="privacy-info">
        <FaLock className="lock-icon" />
        <span>Your data will be processed in accordance with our 
          <span className="privacy-link" onClick={() => navigate('/PrivacyPolicy')}> Privacy Policy</span>
        </span>
      </div>

      <div>
        <button className="Event-button" onClick={handleSubmit}>
          Next
        </button>
      </div>
      <div>
        <button className="Skip-button" onClick={handleSubmit}>
          Skip
        </button>
      </div>
    </div>
  );
};

export default MaEvent;
