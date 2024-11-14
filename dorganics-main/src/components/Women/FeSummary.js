


/*import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { send } from 'emailjs-com';
import '../../styles/FeSummary.css';
import scale from '../../images/scale.webp';
import scale2 from '../../images/scale-overweight.webp';
import scale3 from '../../images/scale-normal.webp';
import bodyImage from '../../images/feobese.webp';
import bodyImage2 from '../../images/feoverweight.webp';
import bodyImage3 from '../../images/femalenormal.webp';
import Hand from '../../images/lifestyle-icon.webp';
import ExImage from '../../images/exercise-icon.webp';
import FrImage from '../../images/frequency-icon.webp';

const FeSummary = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [bmiData, setBmiData] = useState(null);
  const [plans, setPlans] = useState([
    {
      id: 'plan2',
      duration: 'Short-Term Program',
      priceOriginal: '₹299',
      priceDiscounted: '₹284',
      billing: 'Billed for short-term',
      active: false
    },
    {
      id: 'plan6',
      duration: 'One time correction plan',
      priceOriginal: '₹699',
      priceDiscounted: '₹175',
      billing: 'Billed for one time',
      save: 'SAVE -75%',
      active: true
    },
    {
      id: 'plan4',
      duration: 'Monthly Nutrition Plan',
      priceOriginal: '₹6,000',
      priceDiscounted: '₹6,000',
      billing: 'Billed every month/Week',
      active: false
    },
    {
      id: 'plan8',
      duration: 'Three Month Nutrition Plan',
      priceOriginal: '₹15,000',
      priceDiscounted: '₹15,000',
      billing: 'Billed every 3 months/Week',
      active: false
    },
    {
      id: 'plan10',
      duration: 'Six-Month Nutrition Plan',
      priceOriginal: '₹20,000',
      priceDiscounted: '₹20,000',
      billing: 'Billed every 6 months/Week',
      active: false
    }
  ]);

  // Extracting details from location.state
  const { name, contact, email, currentWeight, height, desiredWeight } = location.state || {};

  const convertToMeters = (feet, inches) => {
    const totalInches = (feet * 12) + inches;
    return totalInches * 0.0254;
  };

  useEffect(() => {
    if (!height || !currentWeight) return;

    let heightInMeters;
    if (height.cm) heightInMeters = height.cm / 100;
    else if (height.feet && height.inches !== undefined) heightInMeters = convertToMeters(height.feet, height.inches);

    const weightInKg = currentWeight;
    const bmi = weightInKg / (heightInMeters * heightInMeters);

    let bmiCategory, bodyImg, risksMessage;
    if (bmi < 18.5) {
      bmiCategory = 'Underweight';
      bodyImg = null;
      risksMessage = <h5><span>Healthy BMI: </span>It's important to reach a healthy weight to avoid health risks.</h5>;
    } else if (bmi < 24.9) {
      bmiCategory = 'Normal';
      bodyImg = bodyImage3;
      risksMessage = <h5><span>Healthy BMI: </span>Good starting BMI to tone up and get your dream body.</h5>;
    } else if (bmi < 29.9) {
      bmiCategory = 'Overweight';
      bodyImg = bodyImage2;
      risksMessage = <h5><span>Risks of unhealthy BMI: </span>High blood pressure, increased risk of heart attack, stroke, type 2 diabetes, chronic back and joint pain.</h5>;
    } else {
      bmiCategory = 'Obese';
      bodyImg = bodyImage;
      risksMessage = <h5><span>Risks of unhealthy BMI: </span>High blood pressure, increased risk of heart attack, stroke, type 2 diabetes, chronic back and joint pain.</h5>;
    }

    setBmiData({
      bmiCategory,
      bmi: bmi.toFixed(1),
      risksMessage,
      bodyImg,
    });
  }, [email, name, contact, currentWeight, desiredWeight, height]);

  const selectPlan = (selectedId) => {
    setPlans(plans.map(plan => ({
      ...plan,
      active: plan.id === selectedId
    })));
  };


  


  if (!bmiData) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="FeSummary-wrapper">
      <h2>Your personal summary</h2>
      
      <div className="Card">
        <div className="bmi-header">
          <h3>Body Mass Index (BMI)</h3>
          <p>{bmiData.bmiCategory}</p>
          <p>BMI: {bmiData.bmi}</p> 
        </div>

        <div className="image-container">
          <img src={bmiData.bmiCategory === 'Normal' ? scale3 : bmiData.bmiCategory === 'Overweight' ? scale2 : scale} alt="scale" className="scale-image" />
        </div>

        <div className="bmi-header1">
          {bmiData.risksMessage}
        </div>

        <div className="person-details-wrapper">
          <div className="details-text">
            <div className="detail-item">
              <img src={Hand} alt="lifestyle" className="icon" />
              <p>Lifestyle: <span>Change seeker</span></p>
            </div>
            <div className="detail-item">
              <img src={ExImage} alt="exercise" className="icon" />
              <p>Exercise: <span>Hard exercise</span></p>
            </div>
            <div className="detail-item">
              <img src={FrImage} alt="frequency" className="icon" />
              <p>Workout frequency: <span>High</span></p>
            </div>
            {/* Displaying Name, Contact, and Email }
            <div className="detail-item">
              <p>Name: <span>{name}</span></p>
            </div>
            <div className="detail-item">
              <p>Contact: <span>{contact}</span></p>
            </div>
            <div className="detail-item">
              <p>Email: <span>{email}</span></p>
            </div>
            
          </div>

          <div className="person-image">
            {bmiData.bodyImg && <img src={bmiData.bodyImg} alt="body" />}
          </div>
        </div>
      </div>
      
      <button className="FeSummary-button" onClick={() => navigate('/ResultSe', { state: { currentWeight, desiredWeight, height } })}>
        Next<span>›</span>
      </button>
    
      <div className="wrapper-container">
        <div className="last-container">
          <div className="header">Consultation Packages!</div>
          {plans.map(plan => (
            <div
              key={plan.id}
              className={`plan-option ${plan.active ? 'active' : ''}`}
              onClick={() => selectPlan(plan.id)}
            >
              {plan.save && <div className="save-tag">{plan.save}</div>}
              <div className="radio-container">
                <input
                  type="radio"
                  name="plan"
                  checked={plan.active}
                  readOnly
                />
                <div>
                  <div className='heading'>{plan.duration}</div>
                  <div className="billing">{plan.billing}</div>
                </div>
              </div>
              <div>
                <div className="discount">{plan.priceOriginal}</div>
                <div className="price">{plan.priceDiscounted}</div>
              </div>
            </div>
          ))}

          <div className="terms">
            <input type="checkbox" id="agree" />
            <label htmlFor="agree">
              I agree to the <a href="/TermsAndConditions">T&Cs</a> and <a href="/PrivacyPolicy">Privacy policy</a>
            </label>
          </div>

          <button className="get-plan-button">Get my plan</button>
        </div>
      </div>
    </div>
  );
};

export default FeSummary;*/




import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { send } from 'emailjs-com';
import '../../styles/FeSummary.css';
import scale from '../../images/scale.webp';
import scale2 from '../../images/scale-overweight.webp';
import scale3 from '../../images/scale-normal.webp';
import bodyImage from '../../images/feobese.webp';
import bodyImage2 from '../../images/feoverweight.webp';
import bodyImage3 from '../../images/femalenormal.webp';
import Hand from '../../images/lifestyle-icon.webp';
import ExImage from '../../images/exercise-icon.webp';
import FrImage from '../../images/frequency-icon.webp';


const FeSummary = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [bmiData, setBmiData] = useState(null);
  const { name, contact, email, currentWeight, height, desiredWeight } = location.state || {};

  // Helper function to convert height from feet and inches to meters
  const convertToMeters = (feet, inches) => {
    const totalInches = (feet * 12) + inches; // Convert feet to inches and add remaining inches
    const heightInMeters = totalInches * 0.0254; // Convert inches to meters
    return heightInMeters;
  };

  useEffect(() => {
    if (!height || !currentWeight) {
      return; // If required data is not present, exit early
    }

    let heightInMeters;

    // Check if height is in cm or feet & inches
    if (height.cm) {
      heightInMeters = height.cm / 100; // Convert cm to meters directly
    } else if (height.feet && height.inches !== undefined) {
      heightInMeters = convertToMeters(height.feet, height.inches);
    }

    const weightInKg = currentWeight;

    // Calculate BMI
    const bmi = weightInKg / (heightInMeters * heightInMeters);
    let bmiCategory;
    let bodyImg;
    let risksMessage;

    // Determine BMI category and messages
    if (bmi < 18.5) {
      bmiCategory = 'Underweight';
      bodyImg = null;
      risksMessage = <h5><span>Healthy BMI: </span>It's important to reach a healthy weight to avoid health risks.</h5>;
    } else if (bmi < 24.9) {
      bmiCategory = 'Normal';
      bodyImg = bodyImage3;
      risksMessage = <h5><span>Healthy BMI: </span>Good starting BMI to tone up and get your dream body.</h5>;
    } else if (bmi < 29.9) {
      bmiCategory = 'Overweight';
      bodyImg = bodyImage2;
      risksMessage = <h5><span>Risks of unhealthy BMI: </span>High blood pressure, increased risk of heart attack, stroke, type 2 diabetes, chronic back and joint pain.</h5>;
    } else {
      bmiCategory = 'Obese';
      bodyImg = bodyImage;
      risksMessage = <h5><span>Risks of unhealthy BMI: </span>High blood pressure, increased risk of heart attack, stroke, type 2 diabetes, chronic back and joint pain.</h5>;
    }

    setBmiData({
      bmiCategory,
      bmi: bmi.toFixed(1),
      risksMessage,
      bodyImg,
    });

    const templateParams = {
      user_email: email,
      user_name: name,
      contact,
      current_weight: currentWeight,
      desired_weight: desiredWeight,
      height: height.cm ? `${height.cm} cm` : `${height.feet} ft ${height.inches} in`,
      bmi: bmi.toFixed(1),
      bmi_category: bmiCategory,
    };

    const handleEmailSend = async () => {
      try {
        await send('service_qxfs2ci', 'template_uxwot6g', templateParams, 'Uh6r7Lar2GwxiYyiA');
        console.log('Email sent successfully!');
      } catch (error) {
        console.error('Failed to send email:', error);
      }
    };

    handleEmailSend();
  }, [email, name, contact, currentWeight, desiredWeight, height]);
    
  if (!bmiData) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="FeSummary-wrapper">
      <h2>Your personal summary</h2>
      
      <div className="Card">
        <div className="bmi-header">
          <h3>Body Mass Index (BMI)</h3>
          <p>{bmiData.bmiCategory}</p>
          <p>BMI: {bmiData.bmi}</p> 
        </div>

        <div className="image-container">
          <img src={bmiData.bmiCategory === 'Normal' ? scale3 : bmiData.bmiCategory === 'Overweight' ? scale2 : scale} alt="scale" className="scale-image" />
        </div>

        <div className="bmi-header1">
          {bmiData.risksMessage}
        </div>

        <div className="person-details-wrapper">
          <div className="details-text">
            <div className="detail-item">
              <img src={Hand} alt="lifestyle" className="icon" />
              <p>Lifestyle: <span>Change seeker</span></p>
            </div>
            <div className="detail-item">
              <img src={ExImage} alt="exercise" className="icon" />
              <p>Exercise: <span>Hard exercise</span></p>
            </div>
            <div className="detail-item">
              <img src={FrImage} alt="frequency" className="icon" />
              <p>Workout frequency: <span>High</span></p>
            </div>
          </div>

          <div className="person-image">
            {bmiData.bodyImg && <img src={bmiData.bodyImg} alt="body" />}
          </div>
        </div>
      </div>

      <button className="FeSummary-button" onClick={() => navigate('/ResultSe', { state: { currentWeight, desiredWeight, height, email, name, contact} })}>
        Next<span>›</span>
      </button>
    </div>
  );
};

export default FeSummary;