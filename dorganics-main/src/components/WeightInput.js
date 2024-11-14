import React, { useState } from 'react';

import { useNavigate , useLocation} from 'react-router-dom';  


const WeightInput = () => {
  const [weight, setWeight] = useState('');
  const [warning, setWarning] = useState('');
  const location = useLocation();
  const height = location.state?.height;  // State to store warning message
  const navigate = useNavigate();

  const handleWeightChange = (e) => {
    setWeight(e.target.value);
    setWarning('');  // Clear warning on input change
  };

  const handleNextClick = () => {
    const weightValue = parseFloat(weight);

    if (isNaN(weightValue) || weight === '') {
      setWarning('Please enter a valid weight.');  // Warning for invalid input
    } else if (weightValue < 24.9 || weightValue > 300.2) {
      setWarning('Please enter a correct weight.');  // Warning for out-of-range
    } else {
      console.log(`Weight entered: ${weight} kg`);
      setWarning('');  // Clear the warning if input is valid
      navigate('/DesiredInput', { state: { currentWeight: weightValue, height: height } } );
      
    }
  };

  return (
    <div className="weight-input-container">
      <h1>What is your current weight?</h1>
      <div className="weight-input-box">
        <input
          type="text"
          placeholder="0"
          value={weight}
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

export default WeightInput;
