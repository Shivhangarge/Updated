import React from 'react';
//import '../styles/GoalPage.css';
import { useNavigate } from 'react-router-dom';


//import { FaArrowLeft } from 'react-icons/fa';


const MenGoalPage = () => {

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Function to handle navigation to the BodyTypeSelection page
  const handleGoalClick = () => {
    navigate('/MenBodyTypeSelection'); // Navigate to BodyTypeSelection page
   
  };

  
  return (
    <div className="goal-page-container">
      {/*<header className="navbar">
        <div className="back-button">
          <FaArrowLeft className="back-icon" />
        </div>
        <h1 className="logo">NoCarbs Challenge</h1>
      </header>*/}
      
      <div className="content">
        <h2>What is your goal?</h2>
        <ul className="goal-list">
          <li className="goal-item" onClick={handleGoalClick}>
            <span>Lose weight</span>
            <span className="arrow">›</span>
          </li>
          <li className="goal-item" onClick={handleGoalClick}>
            <span>Get fit</span>
            <span className="arrow">›</span>
          </li>
          <li className="goal-item" onClick={handleGoalClick}>
            <span>Tone muscles</span>
            <span className="arrow">›</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenGoalPage;


