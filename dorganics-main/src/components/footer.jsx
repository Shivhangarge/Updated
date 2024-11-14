import { useNavigate } from 'react-router-dom';
import React from 'react'
import '../styles/footer.css';
import appStoreImg from '../images/app.webp';
import playstoreImg from '../images/playstore.webp';


function Footer() {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleContactClick = () => {
    navigate('/Contactus'); // Navigate to ContactUs page
  };

    return (
      <footer>
      
        <div className="footer-container">
         <div className="footer-links">
         <p className='links-text' onClick={() => navigate('/contactus')}>Contact Us</p> {/* Use navigate */}
         <p className='links-text' onClick={() => navigate('/PrivacyPolicy')}>Data Protection Policy</p> {/* Use navigate */}
         <p className='links-text' onClick={() => navigate('/TermsAndConditions')}>General Conditions</p> {/* Use navigate */}
            {/*<a href="#">Data Protection Policy</a>
            <a href="#">General Conditions</a>*/}
         </div>
         </div>
          
         <div className="footer-disclaimer-apps">
        <div className="footer-disclaimer">
          <p>Disclaimer: Results may vary from person to person.</p>
          <p>&copy; 2024 D'Organics. All Rights Reserved.</p>
        </div>

        <div className="footer-apps">
        <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer" className="store-button"> 
          <img src={appStoreImg} alt="app" />
         </a>     
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="store-button">
          <img src={playstoreImg} alt="playstore" />
          </a>
        </div>
      </div>
       
          
      </footer>
  
    );
  }
  
  export default Footer;