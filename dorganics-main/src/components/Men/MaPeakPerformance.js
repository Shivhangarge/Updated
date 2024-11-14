
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../../styles/PeakPerformance.css';
import boy20 from '../../images/info_male_20.webp';
import boy30 from '../../images/info_male_30.webp';
import boy40 from '../../images/info_male_40.webp';
import boy50 from '../../images/info_male_50.webp';
import boy60 from '../../images/info_male_60.webp';
import boy70 from '../../images/info_male_70.webp';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';


const MaPeakPerformance = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentAge, currentWeight, desiredWeight, height } = location.state || {
    currentAge: null,
    currentWeight: null,
    desiredWeight: null,
    height: null
  };

  console.log('Current Age:', currentAge);
  console.log('Current Weight:', currentWeight);
  console.log('Desired Weight:', desiredWeight);

  const handleNextClick = () => {
    navigate('/MaCheckboxone', { state: { currentWeight, desiredWeight, height } });  
    
  };

  return (
    <div className="PeakPerformance-container">
       {currentAge >= 18 && currentAge <= 29 && (
      <div className="card">
      <div className="Image-container">
        <img src={boy20} alt="girl20Image" className="card-image" />
      </div>
        <h2 className="card-title">Forge Your Foundation</h2>
        <p className="card-description">
        Men in Your 20s, take action: Committing to a regimen that achieves and maintains a weight range of {desiredWeight} kg from {currentWeight} kg will solidify your strength and muscular foundation, essential for your active life ahead..   
        </p>
        </div>
       )}
        {/* Card for Women in 30s*/ }
        {currentAge >= 30 && currentAge <= 39 && (
      <div className="card">
        <div className="Image-container">
          <img src={boy30} alt="girl30Image" className="card-image" />
        </div>
        <h2 className="card-title">Maintain Peak Performance</h2>
        <p className="card-description">
        Men in Your 30s, prioritize: Adapting your fitness and diet to maintain a weight range of {desiredWeight} kg from {currentWeight} kg helps build enduring strength and stamina, crucial as professional and personal demands intensify..
        </p>
      </div>
        )}

      {/* Card for Women in 40s */}
      {currentAge >= 40 && currentAge <= 49 && (
      <div className="card">
        <div className="Image-container">
          <img src={boy40} alt="girl40Image" className="card-image" />
        </div>
        <h2 className="card-title">Maintain Peak Performance</h2>
        <p className="card-description">
        Men in Your 40s, focus on: Adjusting your workout and nutritional goals to maintain a weight range of {desiredWeight} kg from {currentWeight} kg can sustain your muscle mass and energy, ensuring you continue to thrive in all aspects of life..
        </p>
      </div>
      )}
      {/* Card for Women in 50s */}
      {currentAge >= 50 && currentAge <= 59 && (
      <div className="card">
        <div className="Image-container">
          <img src={boy50} alt="girl50Image" className="card-image" />
        </div>
        <h2 className="card-title">Maintain Peak Performance</h2>
        <p className="card-description">
        For Men in Their 50s, achieving and maintaining a weight between {desiredWeight} kg to {currentWeight} kg is achievable and essential. Doing so safeguards your health, strength, and vitality for the long run..
        </p>
      </div>
      )}
      {/* Card for Women in 60s*/ }
      {currentAge >= 60 && currentAge <= 69 && (
      <div className="card">
        <div className="Image-container">
          <img src={boy60} alt="girl60Image" className="card-image" />
        </div>
        <h2 className="card-title">Sustain Your Independence</h2>
        <p className="card-description">
        For Men in Their 60s, achieving and maintaining a weight range of {desiredWeight} kg to {currentWeight} kg is key. Focus on your well-being to enjoy lasting strength and independence while keeping health issues at bay.
        </p>
      </div>
      )}
      {/* Card for Women in 70s */}
      {currentAge >= 70 && (
      <div className="card">
        <div className="Image-container">
          <img src={boy70} alt="girl70Image" className="card-image" />
        </div>
        <h2 className="card-title">Sustain Your Independence</h2>
        <p className="card-description">
        For Men Navigating Their 70s, achieving and maintaining a weight range of {desiredWeight} kg to {currentWeight} kg is key. Focus on your well-being to enjoy lasting strength and independence while keeping health issues at bay.
        </p>
      </div>
      )}
        <button className="Peak-button" onClick={handleNextClick}>Next 
        <span >›</span>
        </button>
        </div>
    
  );
};

export default MaPeakPerformance;