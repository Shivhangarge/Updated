import '../src/styles/footer.css';
import iconImage1 from '../src/images/app.webp';
import iconImage2 from '../src/images/playstore.webp'


<footer>
  <div class="footer-container">   <div class="footer-links">
      <a href="#">Contact Us</a>
      <a href="#">Data Protection Policy</a>
      <a href="#">General Conditions</a>
    </div>
    <div class="footer-disclaimer">
      <p>Disclaimer: Results may vary from person to person.</p>
      <p>&copy; 2024 NoCarbsChallenge. All Rights Reserved.</p>
    </div>
    <div class="footer-apps">
      <img src = {iconImage1}alt='app'/>
      <img src={iconImage2} alt="playstore" />
    </div>
  </div>
</footer>
