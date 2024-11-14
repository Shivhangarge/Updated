/*import React, { useState } from 'react';
//import '../../src/styles/MeatsPage.css';
import { useNavigate, useLocation } from 'react-router-dom';
import Fish from '../../images/fish.webp';
import Poultry from '../../images/poultry.webp';
import Pork from '../../images/pork.webp';
import Beef from '../../images/beef.webp';
import Lamb from '../../images/lamb.webp';
import Veal from '../../images/veal.webp';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';

const MaMeatsPage = () => {
  const location = useLocation();
  const { currentWeight, desiredWeight, height } = location.state || {
    currentWeight: null,
    desiredWeight: null,
    height: null,
  };

  console.log('Current Weight:', currentWeight);
  console.log('Desired Weight:', desiredWeight);
  console.log('Height:', height); // This will now show { feet: 5, inches: 12 }
  
  const heightDisplay = `${height.feet} feet ${height.inches} inches`;

  const [formData, setFormData] = useState({
    Meats: false,
    Vegetarian: false,
    Poultry: false,
    Beef: false,
    Fish: false,
    Lamb: false,
    Veal: false,
  });
  const [errorMessage, setErrorMessage] = useState(false);

  const navigate = useNavigate();

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;

    if (name === 'Meats') {
      setFormData({
        Meats: checked,
        Vegetarian: false,
        Poultry: false,
        Beef: false,
        Fish: false,
        Lamb: false,
        Veal: false,
      });
    } else if (name === 'Vegetarian') {
      setFormData({
        Meats: false,
        Vegetarian: checked,
        Poultry: false,
        Beef: false,
        Fish: false,
        Lamb: false,
        Veal: false,
      });
    } else {
      setFormData((prevData) => ({
        ...prevData,
        Meats: false,
        Vegetarian: false,
        [name]: checked,
      }));
    }

    // Hide error message if any option is selected
    if (errorMessage) setErrorMessage(false);
  };

  const handleSubmit = () => {
    // Check if at least one option is selected
    const isAnySelected = Object.values(formData).some((value) => value);

    if (!isAnySelected) {
      setErrorMessage(true);  // Show error if nothing is selected
    } else {
      // Proceed to next page if a selection is made
      navigate('/MaFoodPage', { state: { currentWeight, desiredWeight, height } });
    }
  };

  return (
    <div className="Meats-container">
      <h2>Select meats you don't like</h2>
      <h5>Select all you don't want to be included in your plan.</h5>

      {/* Checkboxes for different options }
      <div className="Meats-checkbox-container">
        <label htmlFor="Meats">I eat all meats</label>
        <input
          type="checkbox"
          id="Meats"
          name="Meats"
          checked={formData.Meats}
          onChange={handleCheckboxChange}
        />
        <span className="Meats-custom-checkbox"></span>
      </div>

      <div className="Sub-checkbox-container">
        <label htmlFor="Poultry" className={formData.Poultry ? 'strikethrough' : ''}>
          <img src={Poultry} alt="" style={{ width: '40px', height: '40px', marginRight: '25px', verticalAlign: 'middle' }} />
          Poultry
        </label>
        <input
          type="checkbox"
          id="Poultry"
          name="Poultry"
          checked={formData.Poultry}
          onChange={handleCheckboxChange}
        />
        <span className="Fish-custom-checkbox">{formData.Poultry ? 'X' : ''}</span>
      </div>

      <div className="Sub-checkbox-container">
        <label htmlFor="Pork" className={formData.Pork ? 'strikethrough' : ''}>
          <img src={Pork} alt="" style={{ width: '40px', height: '40px', marginRight: '25px', verticalAlign: 'middle' }} />
          Pork
        </label>
        <input
          type="checkbox"
          id="Pork"
          name="Pork"
          checked={formData.Pork}
          onChange={handleCheckboxChange}
        />
        <span className="Fish-custom-checkbox">{formData.Pork ? 'X' : ''}</span>
      </div>

      <div className="Sub-checkbox-container">
        <label htmlFor="Beef" className={formData.Beef ? 'strikethrough' : ''}>
          <img src={Beef} alt="" style={{ width: '40px', height: '40px', marginRight: '25px', verticalAlign: 'middle' }} />
          Beef
        </label>
        <input
          type="checkbox"
          id="Beef"
          name="Beef"
          checked={formData.Beef}
          onChange={handleCheckboxChange}
        />
        <span className="Fish-custom-checkbox">{formData.Beef ? 'X' : ''}</span>
      </div>

      <div className="Sub-checkbox-container">
        <label htmlFor="Fish" className={formData.Fish ? 'strikethrough' : ''}>
          <img src={Fish} alt="" style={{ width: '40px', height: '40px', marginRight: '25px', verticalAlign: 'middle' }} />
          Fish
        </label>
        <input
          type="checkbox"
          id="Fish"
          name="Fish"
          checked={formData.Fish}
          onChange={handleCheckboxChange}
        />
        <span className="Fish-custom-checkbox">{formData.Fish ? 'X' : ''}</span>
      </div>

      <div className="Sub-checkbox-container">
        <label htmlFor="Lamb" className={formData.Lamb ? 'strikethrough' : ''}>
          <img src={Lamb} alt="" style={{ width: '40px', height: '40px', marginRight: '25px', verticalAlign: 'middle' }} />
          Lamb
        </label>
        <input
          type="checkbox"
          id="Lamb"
          name="Lamb"
          checked={formData.Lamb}
          onChange={handleCheckboxChange}
        />
        <span className="Fish-custom-checkbox">{formData.Lamb ? 'X' : ''}</span>
      </div>

      <div className="Sub-checkbox-container">
        <label htmlFor="Veal" className={formData.Veal ? 'strikethrough' : ''}>
          <img src={Veal} alt="" style={{ width: '40px', height: '40px', marginRight: '25px', verticalAlign: 'middle' }} />
          Veal
        </label>
        <input
          type="checkbox"
          id="Veal"
          name="Veal"
          checked={formData.Veal}
          onChange={handleCheckboxChange}
        />
        <span className="Fish-custom-checkbox">{formData.Veal ? 'X' : ''}</span>
      </div>

      <div className="Meats-checkbox-container">
        <label htmlFor="Vegetarian">I am vegetarian</label>
        <input
          type="checkbox"
          id="Vegetarian"
          name="Vegetarian"
          checked={formData.Vegetarian}
          onChange={handleCheckboxChange}
        />
        <span className="Meats-custom-checkbox"></span>
      </div>

      {/* Error message when no option is selected }
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

export default MaMeatsPage;*/

import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Fish from '../../images/fish.webp';
import Poultry from '../../images/poultry.webp';
import Pork from '../../images/pork.webp';
import Beef from '../../images/beef.webp';
import Lamb from '../../images/lamb.webp';
import Veal from '../../images/veal.webp';

const MaMeatsPage = () => {
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

      if (errorMessage) setErrorMessage(false);
      return newState;
    });
  };

  const handleSubmit = () => {
    const isAnySelected = Object.values(formData).some((value) => value);

    if (!isAnySelected) {
      setErrorMessage(true);
    } else {
      navigate('/MaFoodPage', { state: { currentWeight, desiredWeight, height } });
    }
  };

  const images = { Poultry, Pork, Beef, Fish, Lamb, Veal };

  return (
    <div className="Meats-container">
      <h2>Select meats you don't like</h2>
      <h5>Select all you don't want to be included in your plan.</h5>

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

      {Object.keys(images).map((item) => (
        <div
          key={item}
          className="Sub-checkbox-container"
          onClick={() => handleCheckboxChange(item)}
        >
          <label htmlFor={item} className={formData[item] ? 'strikethrough' : ''}>
            <img
              src={images[item]}
              alt=""
              style={{
                width: '40px',
                height: '40px',
                marginRight: '25px',
                verticalAlign: 'middle',
              }}
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

      {errorMessage && <div className="option-select">Please select an answer</div>}

      <button className="Meats-button" onClick={handleSubmit}>
        Next<span>›</span>
      </button>
    </div>
  );
};

export default MaMeatsPage;


