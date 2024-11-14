import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';   



const MaHeightInput = () => {
  const [unit, setUnit] = useState('ft'); // Manage unit state
  const [feet, setFeet] = useState(''); // Feet value state
  const [inches, setInches] = useState(''); // Inches value state
  const [cm, setCm] = useState(''); // Centimeters value state
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  const handleUnitChange = (selectedUnit) => {
    setUnit(selectedUnit);
    if (selectedUnit === 'ft') {
      setCm(''); // Clear cm when switching to feet
    } else {
      setFeet(''); // Clear feet when switching to cm
      setInches(''); // Clear inches when switching to cm
    }
  };
    const handleFeetChange = (e) => setFeet(e.target.value);
    const handleInchesChange = (e) => setInches(e.target.value);
    const handleCmChange = (e) => setCm(e.target.value);
  
    const handleNextClick = () => {
      if (unit === 'ft') {
        // Validate feet and inches
        const feetValue = parseFloat(feet);
        const inchesValue = parseFloat(inches);
    
  
        if (
          isNaN(feetValue) || feetValue < 2 || feetValue > 8 ||
          isNaN(inchesValue) || inchesValue < 0 || inchesValue > 12
         
        ) {
          setErrorMessage('Please enter a correct height.');
        } else {
          setErrorMessage('');
          // Navigate to the next page
          navigate('/MaWeightInput', { state: { height: { feet: feetValue, inches: inchesValue } } });
        }
      } else if (unit === 'cm') {
        // Validate cm
        const cmValue = parseFloat(cm);
        if (isNaN(cmValue) || cmValue <= 89 || cmValue >245) {
          setErrorMessage('Please enter a correct height.');
        } else {
          setErrorMessage('');
          // Navigate to the next page
          navigate('/MaWeightInput', { state: { height: { cm: cmValue } } } );
        }
      }
    };

  return (
    <div className="height-input-container">
      <h1>What is your height?</h1>
      <div className="unit-buttons-box">
      <div className="unit-buttons-container">
        <button 
          className={`unit-button ${unit === 'ft' ? 'active' : ''}`}
          onClick={() => handleUnitChange('ft')}
        >
          FT
        </button>
        <button 
          className={`unit-button ${unit === 'cm' ? 'active' : ''}`}
          onClick={() => handleUnitChange('cm')}
        >
          CM
        </button>
      </div>
      </div>
      <div className="input-container">
      
        {unit === 'ft' ? (
          <>
            <div className="height-input">
              <input 
                type="text" 
                placeholder="0" 
                value={feet} 
                onChange={handleFeetChange}
              />
              <span>ft</span>
            </div>
            <div className="height-input">
              <input 
                type="text" 
                placeholder="0" 
                value={inches} 
                onChange={handleInchesChange}
              />
              <span>in</span>
            </div>
          </>
        ) : (
          <div className="height-input">
            <input 
              type="text" 
              placeholder="0" 
              value={cm} 
              onChange={handleCmChange}
            />
            <span>cm</span>
          </div>
        )}



      </div>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <button className="neXt-button" onClick={handleNextClick}>Next <span className="arrow-iCon">›</span>
      </button>
    </div>
  );
};

export default MaHeightInput;