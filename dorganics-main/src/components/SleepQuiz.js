/*import React from 'react';
import '../styles/SleepQuiz.css';
import { useNavigate, useLocation } from 'react-router-dom';

//import { FaArrowLeft } from 'react-icons/fa';


const SleepQuiz = () => {
  const location = useLocation();
  const { currentWeight, desiredWeight } = location.state || {
    currentWeight: null,
    desiredWeight: null,
  };

  console.log('Current Weight:', currentWeight);
  console.log('Desired Weight:', desiredWeight);


  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Function to handle navigation to the BodyTypeSelection page
  const handleGoalClick = () => {
    navigate('/WaterQuiz', { state: {  currentWeight, desiredWeight: desiredWeight } }); // Navigate to BodyTypeSelection page
   
  };

  
  return (
    <div className="Sleep-page-container">
      {/*<header className="navbar">
        <div className="back-button">
          <FaArrowLeft className="back-icon" />
        </div>
        <h1 className="logo">NoCarbs Challenge</h1>
      </header>*}
      
      <div className="Sleep-content">
        <h2>How much do you usually sleep?</h2>
        <ul className="Sleep-list">
          <li className="Sleep-item" onClick={handleGoalClick}>
            <span>Less than 5 hours</span>
            <span className="arrow">›</span>
          </li>
          <li className="Sleep-item" onClick={handleGoalClick}>
            <span>5-6 hours</span>
            <span className="arrow">›</span>
          </li>
          <li className="Sleep-item" onClick={handleGoalClick}>
            <span>7-8 hours</span>
            <span className="arrow">›</span>
          </li>

          <li className="Sleep-item" onClick={handleGoalClick}>
            <span>More than 8 hours</span>
            <span className="arrow">›</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SleepQuiz;*/


import React from 'react';
import '../styles/SleepQuiz.css';
import { useNavigate, useLocation } from 'react-router-dom';

//import { FaArrowLeft } from 'react-icons/fa';

const SleepQuiz = () => {
  const location = useLocation();
  const { currentWeight, desiredWeight, height } = location.state || { // Height ko destructure kiya gaya hai
    currentWeight: null,
    desiredWeight: null,
    height: null,
  };

  console.log('Current Weight:', currentWeight);
  console.log('Desired Weight:', desiredWeight);
  console.log('Height:', height); // Height ko console mein dikhaiye

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Function to handle navigation to the WaterQuiz page
  const handleGoalClick = () => {
    navigate('/WaterQuiz', { state: { currentWeight, desiredWeight, height } }); // Navigate to WaterQuiz page
  };

  return (
    <div className="Sleep-page-container">
      {/*<header className="navbar">
        <div className="back-button">
          <FaArrowLeft className="back-icon" />
        </div>
        <h1 className="logo">NoCarbs Challenge</h1>
      </header>*/}
      
      <div className="Sleep-content">
        <h2>How much do you usually sleep?</h2>
        <ul className="Sleep-list">
          <li className="Sleep-item" onClick={handleGoalClick}>
            <span>Less than 5 hours</span>
            <span className="arrow">›</span>
          </li>
          <li className="Sleep-item" onClick={handleGoalClick}>
            <span>5-6 hours</span>
            <span className="arrow">›</span>
          </li>
          <li className="Sleep-item" onClick={handleGoalClick}>
            <span>7-8 hours</span>
            <span className="arrow">›</span>
          </li>
          <li className="Sleep-item" onClick={handleGoalClick}>
            <span>More than 8 hours</span>
            <span className="arrow">›</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SleepQuiz;

