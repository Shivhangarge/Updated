import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles/MenWeightLoss.css';
import '../../styles/footer.css';
import  agemale1 from '../../images/agemale1.webp';
import agemale2 from '../../images/agemale2.webp';
import agemale3 from '../../images/agemale3.webp';
import agemale4 from '../../images/agemale4.webp';




const MenWeightLoss = () => {
  const navigate = useNavigate();
  const handleButtonClick = (ageGroup) => {
    navigate('/MenGoalPage', { state: {ageGroup}});
  
  
  };

  return (
    <div className="men-weight-loss-plan">
     <div className="weight-plan-heading">Weight Loss Plan</div>

      <p className="sub-heading">According to your <strong>age</strong> and <strong>BMI</strong></p>
      <p className="quiz-text"><strong>1-MINUTE</strong> QUIZ</p>

      
      <div className="age-groups">
        <div className="age-group">
        <div className="age-group-img-container">
        <img src={agemale1} alt="18-29" className="age-group-img" />
        </div>
          <button onClick={() => handleButtonClick('18-29')} className="age-button">18-29</button>
        </div>
        <div className="age-group">
        <div className="age-group-img-container">
          <img src={agemale2} alt="30-39" className="age-group-img" />
          </div>
         { <button onClick={() => handleButtonClick('30-39')} className="age-button">30-39</button>}
        </div>
        <div className="age-group">
        <div className="age-group-img-container">
          <img src={agemale3} alt="40-49" className="age-group-img" />
          </div>
          <button onClick={() => handleButtonClick('40-49')} className="age-button">40-49</button>
        </div>
        <div className="age-group">
        <div className="age-group-img-container">
          <img src={agemale4} alt="50+" className="age-group-img" />
          </div>
          <button onClick={() => handleButtonClick('50+')} className="age-button">50+</button>
        </div>
      </div>
    </div>
  );
};

export default MenWeightLoss;
