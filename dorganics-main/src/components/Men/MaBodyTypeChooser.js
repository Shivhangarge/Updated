import { useNavigate } from 'react-router-dom';
import React from 'react';
import '../../styles/BodyTypeSelection.css';
import cut from '../../images/malecut.webp';
import bulk from '../../images/malebulk.webp';
import extrabulk from '../../images/maleextrabulk.webp';


const MaBodyTypeChooser = () => {
  const navigate = useNavigate(); 
  const handleSelection = (type) => {
    navigate('/MaAreaImprove'); 
  };

  
    

  return (
    <div className="fe-container">
      <h1>Choose your body You want</h1>

      <ul className="fe-goal-list">
         
      <li className="fe-goal-item" onClick={handleSelection}>
        <img src={cut} alt="cut" />
        <span>Cut</span>
        <span className="fe-arrow">›</span>
          </li>

          <li className="fe-goal-item" onClick={handleSelection}>
        <img src={bulk} alt="bulk" />
        <span>Bulk</span>
        <span className="fe-arrow">›</span>
          </li>
      
          <li className="fe-goal-item" onClick={handleSelection}>
        <img src={extrabulk} alt="extrabulk" />
        <span>Extra Bulk</span>
        <span className="fe-arrow">›</span>
          </li>
     </ul>
     </div>

     
  );
};

export default MaBodyTypeChooser;
