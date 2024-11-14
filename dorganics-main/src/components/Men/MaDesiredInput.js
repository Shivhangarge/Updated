import React, { useState } from 'react';

import { useLocation, useNavigate } from 'react-router-dom'; 

const MaDesiredInput = () => { 
  const location = useLocation();
  const currentWeight = location.state?.currentWeight;
  const height = location.state?.height;  // Retrieve height
  const [desiredWeight, setDesiredWeight] = useState('');
  const [warning, setWarning] = useState('');

  const navigate = useNavigate();

  const handleWeightChange = (e) => {
    setDesiredWeight(e.target.value);
    setWarning('');  // Clear warning on input change
  };

  const handleNextClick = () => {
    const desiredWeightValue = parseFloat(desiredWeight);

    if (isNaN(desiredWeightValue) || desiredWeight === '') {
      setWarning('Please enter a valid weight.');
    } else if (desiredWeightValue < 23.58) {
      setWarning('Please enter a correct weight.');
    } else if (desiredWeightValue >= currentWeight) {
      setWarning('Desired weight should be smaller than your current weight.');
    } else if (desiredWeightValue >= 25 && desiredWeightValue <= 49.8) {
      setWarning('Your target weight is below the normal BMI range, which can cause serious health problems.');
    } else {
      console.log(`Desired weight entered: ${desiredWeight} kg`);
      setWarning('');
      navigate('/MaAgeInput', { state: { currentWeight, desiredWeight: desiredWeightValue, height: height } });  // Pass height along with currentWeight and desiredWeight
    }
  };

  return (
    <div className="weight-input-container">
      <h1>What is your desired weight?</h1>
      <div className="weight-input-box">
        <input
          type="text"
          placeholder="0"
          value={desiredWeight}
          onChange={handleWeightChange}
        />
        <span>kg</span>
      </div>
      {warning && <p className="WArning-message">{warning}</p>}  {/* Conditionally render warning */}
      <button className="forward-button" onClick={handleNextClick}>
        Next <span className="arrow-on">›</span>
      </button>
    </div>
  );
};

export default MaDesiredInput;
