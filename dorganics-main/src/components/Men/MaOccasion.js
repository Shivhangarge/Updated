import React, { useState } from 'react';
//import '../../src/styles/Occasion.css';
import { useNavigate, useLocation } from 'react-router-dom';
import Vacation from '../../images/airplane.webp';
import Wedding from '../../images/glasses.webp';
import Sporting from '../../images/chalice.webp';
import Beach from '../../images/palm-tree.webp';
import Reunion from '../../images/petard.webp';
import Family from '../../images/cake.webp';
import Other from '../../images/celebration.webp';
import No from '../../images/red-cross.webp';

const MaOccasion = () => {
  const location = useLocation();
  const { currentWeight, desiredWeight, height } = location.state || {
    currentWeight: null,
    desiredWeight: null,
    height: null,
  };

  console.log('Current Weight:', currentWeight);
  console.log('Desired Weight:', desiredWeight);
  console.log('Height:', height);

  const [selected, setSelected] = useState('');
  const navigate = useNavigate();
  const options = [
    { id: 1, label: 'Vacation', image: Vacation },
    { id: 2, label: 'Wedding', image: Wedding },
    { id: 3, label: 'Sporting event', image: Sporting },
    { id: 4, label: 'Beach trip', image: Beach },
    { id: 5, label: 'Reunion', image: Reunion },
    { id: 6, label: 'Family occasion', image: Family },
    { id: 7, label: 'Other', image: Other },
    { id: 8, label: 'No', image: No },
  ];

  const handleSelect = (option) => {
    setSelected(option);
    navigate('/MaEvent', { state: { currentWeight, desiredWeight, height } });
  };

  return (
    <div className="Occasion-Container">
      <h1 className="Occasion-Heading">Is there a special occasion you want to lose weight for?</h1>
      <p className="Occasion-Subheading">You’re more likely to reach your goal if you have something important to aim for.</p>
      <div className="Occasion-Options">
        {options.map((option) => (
          <button
            key={option.id}
            className={`Occasion-Button ${selected === option.label ? 'selected' : ''}`}
            onClick={() => handleSelect(option.label)}
          >
            <img
              src={option.image}
              alt={option.label}
              style={{ width: '50px', height: '50px', marginRight: '-140px', verticalAlign: 'middle' }}
            />
            {option.label}
            <span className="Symbol">›</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MaOccasion;