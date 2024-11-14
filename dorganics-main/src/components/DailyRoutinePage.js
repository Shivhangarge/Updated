import React, { useState } from 'react';
import '../../src/styles/DailyRoutinePage.css';
import { useNavigate } from 'react-router-dom'; 

const DailyRoutinePage = () => {
  const [selected, setSelected] = useState('');
  const navigate = useNavigate();
  const options = [
    { id: 1, label: 'Desk job' },
    { id: 2, label: 'Moving a lot' },
    { id: 3, label: 'Always working out' },
    { id: 4, label: 'Spending time at home' },
  ];

  const handleSelect = (option) => {
    setSelected(option);
    navigate('/BodyConfidenceLog');
  };

  return (
    <div className="routine-container">
      <h1 className="routine-heading">What does your day-to-day look like?</h1>
      <p className="routine-subheading">Select which fits your routine the best</p>
      <div className="routine-options">
        {options.map((option) => (
          <button
            key={option.id}
            className={`routine-button ${selected === option.label ? 'selected' : ''}`}
            onClick={() => handleSelect(option.label)}
          >
            {option.label}
            <span className="Sarrow">›</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default DailyRoutinePage;
