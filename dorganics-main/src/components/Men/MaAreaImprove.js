


import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import mamodel from '../../images/malemodel.webp';
import '../../styles/MaAreaImprove.css';
import armsImage from '../../images/arms.webp';
import thighImage from '../../images/thighs.webp';
import glutesImage from '../../images/glutes.webp';
import absImage from '../../images/abs.webp';
import chestImage from '../../images/chest.webp';

const MaAreaImprove = () => {
  const [showImages, setShowImages] = useState([]); // Use an array to keep track of displayed images
  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleBodyPartClick = (area) => {
    setShowImages((prev) => 
      prev.includes(area) ? prev.filter((img) => img !== area) : [...prev, area]
    ); // Toggle image visibility
  };

  // Function to handle "Next" button click and navigate to DailyRoutinePage
  const handleNextClick = () => {
    navigate('/MaDailyRoutinePage'); // Navigate to the DailyRoutinePage route
  };

  return (
    <div className="area-container">
      <h1>Any areas you’d like to improve?</h1>
      <p>If you're happy with your appearance, then press Next</p>

      <div className="body-image-container">
        <img src={mamodel} alt="Mamodel" />

        {/* Display images based on the showImages array */}
        {showImages.includes('arms') && <img src={armsImage} alt="Arms Improvement" className="Arms" />}
        {showImages.includes('chest') && <img src={chestImage} alt="Chest Improvement" className="Chest" />}
        {showImages.includes('abs') && <img src={absImage} alt="Abs Improvement" className="Abs" />}
        {showImages.includes('glutes') && <img src={glutesImage} alt="Glutes Improvement" className="Glute" />}
        {showImages.includes('thighs') && <img src={thighImage} alt="Thighs Improvement" className="Thigh" />}
        
        <div 
          className="body-part-button Chest-button" 
          onClick={() => handleBodyPartClick('chest')}
        >
          <div className="circle">+</div> Chest
        </div>
        <div 
          className="body-part-button Glutes-button" 
          onClick={() => handleBodyPartClick('glutes')}
        >
          <div className="circle">+</div> Glutes
        </div>
        <div 
          className="body-part-button Arms-button" 
          onClick={() => handleBodyPartClick('arms')}
        >
          <div className="circle">+</div> Arms
        </div>
        <div 
          className="body-part-button Abs-button" 
          onClick={() => handleBodyPartClick('abs')}
        >
          <div className="circle">+</div> Abs
        </div>
        <div 
          className="body-part-button Thighs-button" 
          onClick={() => handleBodyPartClick('thighs')}
        >
          <div className="circle">+</div> Thighs
        </div>
      </div>

      <button className="net-button" onClick={handleNextClick}>
        Next <span className="arrow-icon">›</span>
      </button>
    </div>
  );
};

export default MaAreaImprove;
