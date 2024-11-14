import { useNavigate } from 'react-router-dom';
import React from 'react';
import '../../styles/BodyTypeSelection.css';
import ma1 from '../../images/maskinny.webp';
import ma2 from '../../images/maregular.webp';
import ma3 from '../../images/maextra.webp';


const MenBodyTypeSelection = () => {
 const navigate = useNavigate(); // Initialize useNavigate for navigation
   const handleGoalClick = () => {
   navigate('/FeBodyTypeChooser'); // Navigate to BodyTypeSelection page
         
        };
    const handleMaleGoalClick = () => {
        navigate('/MaBodyTypeChooser'); // Navigate to BodyTypeSelection page
       
      };

  return (
    <div className="fe-container">
      <h1>Choose your body type</h1>

      <ul className="fe-goal-list">
         
      <li className="fe-goal-item" onClick={handleMaleGoalClick}>
        <img src={ma1} alt="Regular" />
        <span>Skinny</span>
        <span className="fe-arrow">›</span>
          </li>

          <li className="fe-goal-item" onClick={handleMaleGoalClick}>
        <img src={ma2} alt="Plump" />
        <span>Regular</span>
        <span className="fe-arrow">›</span>
          </li>
      
          <li className="fe-goal-item" onClick={handleMaleGoalClick}>
        <img src={ma3} alt="Extra" />
        <span>Extra</span>
        <span className="fe-arrow">›</span>
          </li>
     </ul>
     </div>

     
  );
};

export default MenBodyTypeSelection;
