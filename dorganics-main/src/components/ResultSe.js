/*import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Result1 from '../../src/images/graph.webp'; // Import your graph image
import '../../src/styles/ResultSe.css';

const ResultSe = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Safely access the weights and height from the state
  const { currentWeight, desiredWeight, height } = location.state || {};

  // Debugging logs to check the values
  console.log('Current Weight:', currentWeight);
  console.log('Desired Weight:', desiredWeight);
  console.log('Height:', height); // Ensure height is defined

  const handleSubmit = () => {
    navigate(  { state: { currentWeight, desiredWeight, height } }  ); // Adjust this path as needed
  };

  return (
    <div className="ResultSe-container">
      <h2>
        With D'Organics Weight loss plan {desiredWeight}kg to  make a lifelong impact! 
      </h2>
     
      <div className="Graph-container">
        <img src={Result1} alt="graph" className="Graph-image" />
        <div className="weight-label current-weight">Your weight</div>
        <div className="weight-label desired-weight">Keeping it off</div>
      </div>
      <button className="ResultSe-button" onClick={handleSubmit}>
        Next<span>›</span>
      </button>
    </div>
  );
};

export default ResultSe;*/



import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Result1 from '../../src/images/graph.webp'; // Import your graph image
import '../../src/styles/ResultSe.css';

const ResultSe = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { name, contact, email, currentWeight, height, desiredWeight } = location.state || {}; 

    const [plans, setPlans] = useState([
        { id: 'plan2', duration: 'Short-Term Program', priceOriginal: '₹299', priceDiscounted: '₹284', billing: 'Billed for short-term', active: false },
        { id: 'plan6', duration: 'One time correction plan', priceOriginal: '₹699', priceDiscounted: '₹175', billing: 'Billed for one time', save: 'SAVE -75%', active: true },
        { id: 'plan4', duration: 'Monthly Nutrition Plan', priceOriginal: '₹6,000', priceDiscounted: '₹6,000', billing: 'Billed every month/Week', active: false },
        { id: 'plan8', duration: 'Three Month Nutrition Plan', priceOriginal: '₹15,000', priceDiscounted: '₹15,000', billing: 'Billed every 3 months/Week', active: false },
        { id: 'plan10', duration: 'Six-Month Nutrition Plan', priceOriginal: '₹20,000', priceDiscounted: '₹20,000', billing: 'Billed every 6 months/Week', active: false }
    ]);

    const handleSubmit = () => {
      navigate('/NextPage', { state: { currentWeight, desiredWeight, height, name, contact, email } });
  };
    const selectPlan = (selectedId) => {
        setPlans(plans.map(plan => ({
            ...plan,
            active: plan.id === selectedId
        })));
    };

    return (
        <div className="ResultSe-container">
            <h2>With D'Organics Weight loss plan {location.state?.desiredWeight}kg to make a lifelong impact!</h2>

            {/*<p><strong>Email:</strong> {email}</p>
            <p><strong>Contact:</strong> {contact}</p>
            <p><strong>Name:</strong> {name}</p>*/}
            
            <div className="Graph-container">
                <img src={Result1} alt="graph" className="Graph-image" />
                <div className="weight-label current-weight">Your weight</div>
                <div className="weight-label desired-weight">Keeping it off</div>
            </div>
            
            

            <div className="wrapper-container">
            {/* Subscription Section */}
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
                            <input type="radio" name="plan" checked={plan.active} readOnly />
                            <div>
                                <div className="heading">{plan.duration}</div>
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

export default ResultSe;



