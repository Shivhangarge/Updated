import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Onions from '../../images/onions.webp';
import Mushrooms from '../../images/mushrooms.webp';
import Eggs from '../../images/eggs.webp';
import Nuts from '../../images/nuts.webp';
import Cheese from '../../images/cheese.webp';
import Milk from '../../images/milk.webp';
import Avocados from '../../images/avocados.webp';
//import Seafood from '../../images/seafood.webp';
import Olives from '../../images/olives.webp';
import Capers from '../../images/capers.webp';
import Coconuts from '../../images/coconuts.webp';
import GoatCheese from '../../images/goatcheese.webp';

const MaFoodPage = () => {
  const location = useLocation();
  const { currentWeight, desiredWeight, height } = location.state || {
    currentWeight: null,
    desiredWeight: null,
    height: null,
  };

  const heightDisplay = `${height?.feet} feet ${height?.inches} inches`;

  const [formData, setFormData] = useState({
    Eats: false,
    Onions: false,
    Mushrooms: false,
    Eggs: false,
    Nuts: false,
    Cheese: false,
    Milk: false,
    Avocados: false,
  
    Olives: false,
    Capers: false,
    Coconuts: false,
    GoatCheese: false,
  });
  const [errorMessage, setErrorMessage] = useState(false);

  const navigate = useNavigate();

  const handleCheckboxChange = (name) => {
    setFormData((prevData) => {
      const newState = { ...prevData };

      if (name === 'Eats') {
        newState.Eats = !prevData.Eats;
        // Set all other options to false if "Eats" is checked/unchecked
        Object.keys(newState).forEach((key) => {
          if (key !== 'Eats') newState[key] = false;
        });
      } else {
        newState.Eats = false; // Reset "Eats" if another item is checked
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
      navigate('/MaOccasion', { state: { currentWeight, desiredWeight, height } });
    }
  };

  return (
    <div className="Food-container">
      <h2>Select foods you don't like</h2>
      <h5>Select all you don't want to be included in your plan.</h5>

      {/* Main Options */}
      <div className="Meats-checkbox-container" onClick={() => handleCheckboxChange('Eats')}>
        <label htmlFor="Eats">I eat all of them</label>
        <input
          type="checkbox"
          id="Eats"
          name="Eats"
          checked={formData.Eats}
          onChange={() => handleCheckboxChange('Eats')}
        />
        <span className="Meats-custom-checkbox">{formData.Eats ? '✓' : ''}</span>
      </div>

      {/* Sub-Options */}
      {['Onions', 'Mushrooms', 'Eggs', 'Nuts', 'Cheese', 'Milk', 'Avocados',  'Olives', 'Capers', 'Coconuts', 'GoatCheese'].map((item) => (
        <div
          key={item}
          className="Sub-checkbox-container"
          onClick={() => handleCheckboxChange(item)}
        >
          <label htmlFor={item} className={formData[item] ? 'strikethrough' : ''}>
            <img 
              src={{
                Onions,
                Mushrooms,
                Eggs,
                Nuts,
                Cheese,
                Milk,
                Avocados,
                Olives,
                Capers,
                Coconuts,
                GoatCheese,
              }[item]} 
              alt={item} 
              style={{ width: '40px', height: '40px', marginRight: '25px', verticalAlign: 'middle' }} 
            />
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

      {/* Error message */}
      {errorMessage && (
        <div className="option-select">
          Please select at least one option
        </div>
      )}

      <button className="Eats-button" onClick={handleSubmit}>
        Next<span>›</span>
      </button>
    </div>
  );
};

export default MaFoodPage;

