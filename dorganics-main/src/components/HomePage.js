
import React from 'react';
import '../styles/HomePage.css'; // Import CSS for HomePage styling
import Footer from './footer';  // Import the Footer component
//import homeImage from '../images/avocados.webp'; // Adjust based on your images
import homePage from '../images/avac.webp'; // Adjust based on your images
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFemale, faMale } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';






function HomePage() {
  const screenSize = 768; // Example: 768px for tablet/mobile size
  const navigate = useNavigate(); // Hook for navigation

  const handleNavigateToWeightLoss = () => {
    navigate('/weightloss');  // Navigate to WeightLossPlan
  };
  return (
    <div className="page-container">

        <div className="home-section">
        <div className="image-background">
            {/*{window.innerWidth <= screenSize ? (
              <img src={homeImage} alt="img-home" className="home-img" />*/}
             
              <img src={homePage} alt="img-home" className="home-img" />
            
          <div className="text-content">
             <h2 className="headline">
              Start losing weight 
              <br/>within days</h2>
             <p className="sub-text">Select the D'organics diet type:</p>

            <div className="button-group">
    
              <button className="btn btn-women" onClick ={()=> navigate('/WeightLossPlan')}> 
              <FontAwesomeIcon icon={faFemale} style={{ marginRight: '40px' }} />Diet for women</button>
              <button className="btn btn-men" onClick ={()=> navigate('/MenWeightLoss')}>
              <FontAwesomeIcon icon={faMale} style={{ marginRight: '40px' }} />Diet for men</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
