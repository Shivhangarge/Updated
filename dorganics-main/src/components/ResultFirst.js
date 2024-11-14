

/*import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Result1 from '../../src/images/graph.webp'; // Import your graph image
import '../../src/styles/ResultFirst.css';


const ResultFirst = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Safely access the weights from the state
  const { currentWeight, desiredWeight } = location.state || {};

  // Debugging logs to check the values
  console.log('Current Weight:', currentWeight);
  console.log('Desired Weight:', desiredWeight);


  const handleSubmit = () => {
    navigate('/FeSummary'); // Adjust this path as needed
  };

  return (
    <div className="ResultFirst-container">
      <h2>With No Carbs diet you will reach your desired weight of { desiredWeight } lb</h2>
      <div className="graph-container">
        <img src={Result1} alt="graph" className="graph-image" />
        <div className="weight-label current-weight">  { currentWeight } lb</div>
        <div className="weight-label desired-weight">  { desiredWeight } lb</div>
      </div>
      <button className="ResultFirst-button" onClick={handleSubmit}>
        Next<span>›</span>
      </button>
    </div>
  );
};

export default ResultFirst;*/

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Result1 from '../../src/images/graph.webp'; // Import your graph image
import '../../src/styles/ResultFirst.css';

const ResultFirst = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Safely access the weights and height from the state
  const { currentWeight, desiredWeight, height } = location.state || {};

  // Debugging logs to check the values
  console.log('Current Weight:', currentWeight);
  console.log('Desired Weight:', desiredWeight);
  console.log('Height:', height); // Ensure height is defined

  const handleSubmit = () => {
    navigate('/DetailsForm',  { state: { currentWeight, desiredWeight, height } }  ); // Adjust this path as needed
  };

  return (
    <div className="ResultFirst-container">
      <h2>
        With D'Organics diet you will reach your desired weight of {desiredWeight}kg
      </h2>
     
      <div className="graph-container">
        <img src={Result1} alt="graph" className="graph-image" />
        <div className="weight-label current-weight">{currentWeight} kg</div>
        <div className="weight-label desired-weight">{desiredWeight} kg</div>
      </div>
      <button className="ResultFirst-button" onClick={handleSubmit}>
        Next<span>›</span>
      </button>
    </div>
  );
};

export default ResultFirst;

