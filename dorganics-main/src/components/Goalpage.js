/*import React from 'react';
import '../styles/GoalPage.css';
import { useNavigate } from 'react-router-dom';

//import { FaArrowLeft } from 'react-icons/fa';


const GoalPage = () => {

  const navigate = useNavigate(); // Initialize useNavigate for navigation

  // Function to handle navigation to the BodyTypeSelection page
  const handleGoalClick = () => {
    navigate('/BodyTypeSelection'); // Navigate to BodyTypeSelection page
   
  };

  
  return (
    <div className="goal-page-container">
 
      
      <div className="content">
        <h2>What is your goal?</h2>
        <ul className="goal-list">
          <li className="goal-item" onClick={handleGoalClick}>
            Lose weight
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

export default GoalPage;*/


import React, { useState } from 'react';
import '../styles/GoalPage.css';
import { useNavigate } from 'react-router-dom'; 

const GoalPage = () => {
  const [selected, setSelected] = useState('');
  const navigate = useNavigate();
  const options = [
    { id: 1, label: 'Lose weight' },
    { id: 2, label: 'Get fit' },
    { id: 3, label: 'Tone muscles' },
    
  ];

  const handleSelect = (option) => {
    setSelected(option);
    navigate('/BodyTypeSelection');
  };

  return (
    <div className="goal-page-container">
      <h2 className="content">What is your goal?</h2>
      
      <div className="goal-list">
        {options.map((option) => (
          <button
            key={option.id}
            className={`goal-item ${selected === option.label ? 'selected' : ''}`}
            onClick={() => handleSelect(option.label)}
          >
            {option.label}
            <span className="arrow">›</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default GoalPage;


