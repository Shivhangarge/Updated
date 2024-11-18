
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';
import logoImage from '../images/logo.webp';
import backImage from '../images/backward-arrow.webp';

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [borderWidth, setBorderWidth] = useState(location.pathname === '/' ? 0 : 50);
  const [isBack, setIsBack] = useState(false);

  useEffect(() => {
    if (location.pathname === '/') {
      setBorderWidth(0);
    } else if (isBack) {
      setBorderWidth(prevWidth => Math.max(0, prevWidth - 50));
    } else {
      setBorderWidth(prevWidth => prevWidth + 50);
    }
    // Reset isBack after the effect runs, so it only affects the immediate previous navigation
    setIsBack(false);
  }, [location.pathname]);

  const handleBackClick = () => {
    setIsBack(true); // Set isBack to true when back icon is clicked
    navigate(-1);
  };

  const navbarClass = location.pathname === '/dorganicschallenge' ? 'navbar no-border' : 'navbar border';

  return (
    <nav className={navbarClass} style={{ '--border-width': `${borderWidth}px` }}>
      <div className="navbar-container">
        {location.pathname !== '/dorganicschallenge' && (
          <div className="back-icon" onClick={handleBackClick}>
            <img src={backImage} alt="back option" className="back-logo" />
          </div>
        )}
        <img src={logoImage} alt="D'organics Logo" className="navbar-logo" />
      </div>
    </nav>
  );
}

export default Navbar;

