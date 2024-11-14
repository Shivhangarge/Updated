/*import React from 'react';
import '../styles/WaterQuiz.css';
import { useNavigate, useLocation } from 'react-router-dom';

//import { FaArrowLeft } from 'react-icons/fa';


const WaterQuiz = () => {

  const navigate = useNavigate(); // Initialize useNavigate for navigation
  const location = useLocation();
  const { currentWeight, desiredWeight } = location.state || {
    currentWeight: null,
    desiredWeight: null,
    height: null,
  };

  console.log('Current Weight:', currentWeight);
  console.log('Desired Weight:', desiredWeight);
  console.log('Height:', height);

  // Function to handle navigation to the BodyTypeSelection page
  const handleGoalClick = () => {
    navigate('/MeatsPage', { state: {  currentWeight, desiredWeight: desiredWeight, height } }); // Navigate to BodyTypeSelection page
   
  };

  
  return (
    <div className="Water-page-container">
      {/*<header className="navbar">
        <div className="back-button">
          <FaArrowLeft className="back-icon" />
        </div>
        <h1 className="logo">NoCarbs Challenge</h1>
      </header>}
      
      <div className="Water-content">
        <h2>How much water do you drink daily?</h2>
        <p> We mean clean water, excluding coffee, tea and other drinks</p>
        <ul className="Water-list">
          <li className="Water-item" onClick={handleGoalClick}>
            <span>Only coffee or tea</span>
            <span className="s-arrow">›</span>
          </li>
          <li className="Water-item" onClick={handleGoalClick}>
            <span>Less than 0.5 L</span>
            <span>Less than 2 glasses</span>
            <span className="s-arrow">›</span>
          </li>
          <li className="Water-item" onClick={handleGoalClick}>
            <span>0.5 L - 1.5 L</span>
            <span>2 - 6 glasses</span>
            <span className="s-arrow">›</span>
          </li>

          <li className="Water-item" onClick={handleGoalClick}>
            <span>1.5 L - 2.5 L</span>
            <span>7-10 glasses </span>
            <span className="s-arrow">›</span>
          </li>
          
            <li className="Water-item" onClick={handleGoalClick}>
            <span>Don't count</span>
            <span className="s-arrow">›</span>
          </li>

          
        </ul>
      </div>
    </div>
  );
};

export default WaterQuiz;*/

import React from 'react';
import '../styles/WaterQuiz.css';
import { useNavigate, useLocation } from 'react-router-dom';

//import { FaArrowLeft } from 'react-icons/fa';

const WaterQuiz = () => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  const location = useLocation();
  const { currentWeight, desiredWeight, height } = location.state || { // Height ko destructure kiya gaya hai
    currentWeight: null,
    desiredWeight: null,
    height: null,
  };

  console.log('Current Weight:', currentWeight);
  console.log('Desired Weight:', desiredWeight);
  console.log('Height:', height); // Height ko console mein dikhaiye

  // Function to handle navigation to the MeatsPage
  const handleGoalClick = () => {
    navigate('/MeatsPage', { state: { currentWeight, desiredWeight, height } }); // Navigate to MeatsPage with height
  };

  return (
    <div className="Water-page-container">
      {/*<header className="navbar">
        <div className="back-button">
          <FaArrowLeft className="back-icon" />
        </div>
        <h1 className="logo">NoCarbs Challenge</h1>
      </header>*/}
      
      <div className="Water-content">
        <h2>How much water do you drink daily?</h2>
        <p>We mean clean water, excluding coffee, tea and other drinks</p>
        <ul className="Water-list">
          <li className="Water-item" onClick={handleGoalClick}>
            <span>Only coffee or tea</span>
            <span className="s-arrow">›</span>
          </li>
          <li className="Water-item" onClick={handleGoalClick}>
            <span>Less than 0.5 L</span>
            <span>Less than 2 glasses</span>
            <span className="s-arrow">›</span>
          </li>
          <li className="Water-item" onClick={handleGoalClick}>
            <span>0.5 L - 1.5 L</span>
            <span>2 - 6 glasses</span>
            <span className="s-arrow">›</span>
          </li>
          <li className="Water-item" onClick={handleGoalClick}>
            <span>1.5 L - 2.5 L</span>
            <span>7-10 glasses</span>
            <span className="s-arrow">›</span>
          </li>
          <li className="Water-item" onClick={handleGoalClick}>
            <span>Don't count</span>
            <span className="s-arrow">›</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WaterQuiz;

