import { useNavigate } from 'react-router-dom';
import React from 'react';
import '../../styles/BodyTypeSelection.css';
import fit from '../../images/femalefit.webp';
import muscular from '../../images/femalemuscular.webp';
import shapely from '../../images/femaleshapely.webp';


const FeBodyTypeChooser = () => {
  const navigate = useNavigate(); 
  const handleSelection = (type) => {
    navigate('/FeAreaImprove'); 
  };

  return (
    <div className="fe-container">
      <h1>Choose your body You want</h1>

      <ul className="fe-goal-list">
         
      <li className="fe-goal-item" onClick={handleSelection}>
        <img src={fit} alt="fit" />
        <span>Fit</span>
        <span className="fe-arrow">›</span>
          </li>

          <li className="fe-goal-item" onClick={handleSelection}>
        <img src={muscular} alt="muscular" />
        <span>Muscular</span>
        <span className="fe-arrow">›</span>
          </li>
      
          <li className="fe-goal-item" onClick={handleSelection}>
        <img src={shapely} alt="shapely" />
        <span>shapely</span>
        <span className="fe-arrow">›</span>
          </li>
     </ul>
     </div>

     
  );
};

export default FeBodyTypeChooser;
