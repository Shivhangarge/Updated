

/*import React, { useState } from 'react';
import '../../src/styles/FoodPage.css';
import { useNavigate, useLocation } from 'react-router-dom';
import Onions from '../../src/images/onions.webp';
import Mushrooms from '../../src/images/mushrooms.webp';
import Eggs from '../../src/images/eggs.webp';
import Nuts from '../../src/images/nuts.webp';
import Cheese from '../../src/images/cheese.webp';
import Milk from '../../src/images/milk.webp';
import Avocados from '../../src/images/avocados.webp';
import Seafood from '../../src/images/seafood.webp';
import Olives from '../../src/images/olives.webp';
import Capers from '../../src/images/capers.webp';
import Coconuts from '../../src/images/coconuts.webp';
import GoatCheese from '../../src/images/goat-cheese.webp';

const FoodPage = () => {
  const location = useLocation();
  const { currentWeight, desiredWeight, height } = location.state || {
    currentWeight: null,
    desiredWeight: null,
    height: null,
  };

  const [formData, setFormData] = useState({
    Eat: false,
    Onions: false,
    Mushrooms: false,
    Eggs: false,
    Nuts: false,
    Cheese: false,
    Milk: false,
    Avocados: false,
    Seafood: false,
    Olives: false,
    Capers: false,
    Coconuts: false,
    GoatCheese: false,
  });

  const [errorMessage, setErrorMessage] = useState(false);
  const navigate = useNavigate();

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    if (name === 'Eat') {
      setFormData({
        Eat: checked,
        Onions: false,
        Mushrooms: false,
        Eggs: false,
        Nuts: false,
        Cheese: false,
        Milk: false,
        Avocados: false,
        Seafood: false,
        Olives: false,
        Capers: false,
        Coconuts: false,
        GoatCheese: false,
      });
    } else {
      if (checked) {
        setFormData((prevData) => ({
          ...prevData,
          Eat: false,
          [name]: checked,
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: checked,
        }));
      }
    }
  };

  const handleSubmit = () => {
    const selectedHabits = Object.keys(formData).filter((key) => formData[key]);
  
    if (selectedHabits.length >= 1 && selectedHabits.length <= 5) {
      setErrorMessage(false);
      navigate('/Occasion', { state: { currentWeight, desiredWeight, height } });
    } else {
      setErrorMessage(true);
    }
  };

  return (
    <div className="Food-container">
      <h2>Select ingredients you DON'T like</h2>
      <h5>Select all you don't want to be included in your plan.</h5>

      <div className="Food-checkbox-container">
        <label htmlFor="Eat">I eat them all</label>
        <input
          type="checkbox"
          id="Eat"
          name="Eat"
          checked={formData.Eat}
          onChange={handleCheckboxChange}
        />
        <span className="Food-custom-checkbox">{formData.Eat ? '' : ''}</span>
      </div>

      {/* Sub-options }
      {[{ name: 'Onions', image: Onions },
        { name: 'Mushrooms', image: Mushrooms },
        { name: 'Eggs', image: Eggs },
        { name: 'Nuts', image: Nuts },
        { name: 'Cheese', image: Cheese },
        { name: 'Milk', image: Milk },
        { name: 'Avocados', image: Avocados },
        { name: 'Seafood', image: Seafood },
        { name: 'Olives', image: Olives },
        { name: 'Capers', image: Capers },
        { name: 'Coconuts', image: Coconuts },
        { name: 'GoatCheese', image: GoatCheese },
      ].map(({ name, image }) => (
        <div className="Sub-checkbox-container" key={name}>
          <label htmlFor={name} className={formData[name] ? 'strikethrough' : ''}>
            <img
              src={image}
              alt={name}
              style={{ width: '40px', height: '40px', marginRight: '25px', verticalAlign: 'middle' }}
            />
            {name}
          </label>
          <input
            type="checkbox"
            id={name}
            name={name}
            checked={formData[name]}
            onChange={handleCheckboxChange}
          />
          <span className="Fish-custom-checkbox">{formData[name] ? 'X' : ''}</span>
        </div>
      ))}

      {/* Error message }
      {errorMessage && (
        <div className="option-select">
         Please select at least 1 and at most 5 products that you would like to be included in the plan
        </div>
      )}

      <button className="Eat-button" onClick={handleSubmit}>
        Next<span>›</span>
      </button>
    </div>
  );
};

export default FoodPage;*/



import React, { useState } from 'react';
import '../../src/styles/FoodPage.css';
import { useNavigate, useLocation } from 'react-router-dom';
import Onions from '../../src/images/onions.webp';
import Mushrooms from '../../src/images/mushrooms.webp';
import Eggs from '../../src/images/eggs.webp';
import Nuts from '../../src/images/nuts.webp';
import Cheese from '../../src/images/cheese.webp';
import Milk from '../../src/images/milk.webp';
import Avocados from '../../src/images/avocados.webp';
//import Seafood from '../../src/images/seafood.webp';
import Olives from '../../src/images/olives.webp';
import Capers from '../../src/images/capers.webp';
import Coconuts from '../../src/images/coconuts.webp';
import GoatCheese from '../../src/images/goatcheese.webp'; // Ensure this path is correct

const FoodPage = () => {
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
    //Seafood: false,
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
      navigate('/Occasion', { state: { currentWeight, desiredWeight, height } });
    }
  };

  return (
    <div className="Food-container">
      <h2>Select ingredients you DON'T like</h2>
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
      {['Onions', 'Mushrooms', 'Eggs', 'Nuts', 'Cheese', 'Milk', 'Avocados',  'Olives', 'Capers', 'Coconuts', 'GoatCheese']
.map((item) => (
        <div
          key={item}
          className="Sub-checkbox-container"
          onClick={() => handleCheckboxChange(item)}
        >
          <label htmlFor={item} className={formData[item] ? 'strikethrough' : ''}>
            <img src={require(`../../src/images/${item.toLowerCase()}.webp`)} alt={item} style={{ width: '40px', height: '40px', marginRight: '25px', verticalAlign: 'middle' }} />
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

export default FoodPage;
