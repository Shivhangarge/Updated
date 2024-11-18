
import React, { useState } from 'react';
import '../../src/styles/MeatsPage.css';
import { useNavigate, useLocation } from 'react-router-dom';
import Fish from '../../src/images/fish.webp';
import Poultry from '../../src/images/poultry.webp';
import Pork from '../../src/images/pork.webp';
import Beef from '../../src/images/beef.webp';
import Lamb from '../../src/images/lamb.webp';
import Veal from '../../src/images/veal.webp';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';

const MeatsPage = () => {
  const location = useLocation();
  const { currentWeight, desiredWeight, height } = location.state || {
    currentWeight: null,
    desiredWeight: null,
    height: null,
  };

  const heightDisplay = `${height?.feet} feet ${height?.inches} inches`;

  const [formData, setFormData] = useState({
    Meats: false,
    Vegetarian: false,
    Poultry: false,
    Pork: false,
    Beef: false,
    Fish: false,
    Lamb: false,
    Veal: false,
  });
  const [errorMessage, setErrorMessage] = useState(false);

  const navigate = useNavigate();

  const handleCheckboxChange = (name) => {
    setFormData((prevData) => {
      const newState = { ...prevData };

      if (name === 'Meats') {
        newState.Meats = !prevData.Meats;
        newState.Vegetarian = false;
        newState.Poultry = false;
        newState.Pork = false;
        newState.Beef = false;
        newState.Fish = false;
        newState.Lamb = false;
        newState.Veal = false;
      } else if (name === 'Vegetarian') {
        newState.Meats = false;
        newState.Vegetarian = !prevData.Vegetarian;
        newState.Poultry = false;
        newState.Pork = false;
        newState.Beef = false;
        newState.Fish = false;
        newState.Lamb = false;
        newState.Veal = false;
      } else {
        newState.Meats = false;
        newState.Vegetarian = false;
        newState[name] = !prevData[name];
      }

      // Hide error message if any option is selected
      if (errorMessage) setErrorMessage(false);

      return newState;
    });
  };

  const handleSubmit = () => {
    // Check if at least one option is selected
    const isAnySelected = Object.values(formData).some((value) => value);

    if (!isAnySelected) {
      setErrorMessage(true); // Show error if nothing is selected
    } else {
      navigate('/FoodPage', { state: { currentWeight, desiredWeight, height } });
    }
  };

  return (
    <div className="Meats-container">
      <h2>Select meats you DON'T like</h2>
      <h5>Select all you don't want to be included in your plan.</h5>

      {/* Main Options */}
      <div className="Meats-checkbox-container" onClick={() => handleCheckboxChange('Meats')}>
        <label htmlFor="Meats">I eat all meats</label>
        <input
          type="checkbox"
          id="Meats"
          name="Meats"
          checked={formData.Meats}
          onChange={() => handleCheckboxChange('Meats')}
        />
        <span className="Meats-custom-checkbox">{formData.Meats ? '✓' : ''}</span>
      </div>

      {/* Sub-Options */}
      {['Poultry', 'Pork', 'Beef', 'Fish', 'Lamb', 'Veal'].map((item) => (
        <div
          key={item}
          className="Sub-checkbox-container"
          onClick={() => handleCheckboxChange(item)}
        >
          <label htmlFor={item} className={formData[item] ? 'strikethrough' : ''}>
            <img src={require(`../../src/images/${item.toLowerCase()}.webp`)} alt="" style={{ width: '40px', height: '40px', marginRight: '25px', verticalAlign: 'middle' }} />
            {item}
          </label>
          <input
            type="checkbox"
            id={item}
            name={item}
            checked={formData[item]}
            onChange={() => handleCheckboxChange(item)}
          />
          <span className="Fish-custom-checkbox">{formData[item] ? 'X' : ''}</span>
        </div>
      ))}

      {/* Vegetarian Option */}
      <div className="Meats-checkbox-container" onClick={() => handleCheckboxChange('Vegetarian')}>
        <label htmlFor="Vegetarian">I am vegetarian</label>
        <input
          type="checkbox"
          id="Vegetarian"
          name="Vegetarian"
          checked={formData.Vegetarian}
          onChange={() => handleCheckboxChange('Vegetarian')}
        />
        <span className="Meats-custom-checkbox">{formData.Vegetarian ? '✓' : ''}</span>
      </div>

      {/* Error message */}
      {errorMessage && (
        <div className="option-select">
          Please select an answer
        </div>
      )}

      <button className="Meats-button" onClick={handleSubmit}>
        Next<span>›</span>
      </button>
    </div>
  );
};

export default MeatsPage;
