import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Result1 from '../../src/images/graph.webp';
import '../../src/styles/ResultSe.css';
import axios from 'axios';

const ResultSe = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Retrieve data from location.state
    const {
        name = '',
        contact = '',
        email = '',
        currentWeight = '',
        height = '',
        desiredWeight = ''
    } = location.state || {};

    const [isTermsAccepted, setIsTermsAccepted] = useState(false);
    const [loading, setLoading] = useState(false);

    const [plans, setPlans] = useState([
        { 
            id: 'plan2', 
            duration: 'Short-Term Program', 
            priceOriginal: '₹399', 
            priceDiscounted: '₹299', 
            billing: 'Billed for short-term', 
            active: false 
        },
        { 
            id: 'plan6', 
            duration: 'One time correction plan', 
            priceOriginal: '₹899', 
            priceDiscounted: '₹699', 
            billing: 'Billed for one time', 
            save: 'SAVE -75%', 
            active: true 
        },
        { 
            id: 'plan4', 
            duration: 'Monthly Nutrition Plan', 
            priceOriginal: '₹8,000', 
            priceDiscounted: '₹6,000', 
            billing: 'Billed every month/Week', 
            active: false 
        },
        { 
            id: 'plan8', 
            duration: 'Three Month Nutrition Plan', 
            priceOriginal: '₹20,000', 
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

    const handlePayment = async () => {
        console.log('Button clicked!');

        // Validate input fields
        if (!name || !contact || !email) {
            alert('Missing user information. Please fill in all required fields.');
            return;
        }

        setLoading(true);
        try {
            const selectedPlan = plans.find(plan => plan.active);
            if (!selectedPlan) {
                throw new Error('Please select a plan');
            }

            const paymentData = {
                transactionId: `TX_${Date.now()}`,
                MUID: email.split('@')[0] || 'user',
                name,
                amount: parseInt(selectedPlan.priceDiscounted.replace(/[₹,]/g, '')),
                number: contact
            };

            console.log('Payment payload:', paymentData);

            const response = await axios.post(
                'https://3n31e1je30.execute-api.ap-south-1.amazonaws.com/prod/order',
                paymentData
            );

            console.log('Full API response:', response);

            if (response.data.success && response.data.data?.instrumentResponse?.redirectInfo?.url) {
                window.location.href = response.data.data.instrumentResponse.redirectInfo.url;
            } else {
                throw new Error('Payment URL not received from server');
            }
        } catch (error) {
            console.error('Payment error:', error);
            alert('Payment failed: ' + (error.message || 'Unknown error'));
        } finally {
            setLoading(false);
        }
    };

    const selectPlan = (selectedId) => {
        setPlans(plans.map(plan => ({
            ...plan,
            active: plan.id === selectedId
        })));
    };

    return (
        <div className="ResultSe-container">
            <h2>With D'Organics Weight loss plan, reduce to {desiredWeight}kg and make a lifelong impact!</h2>
            
            <div className="Graph-container">
                <img src={Result1} alt="graph" className="Graph-image" />
                <div className="weight-label current-weight">Your weight: {currentWeight}kg</div>
                <div className="weight-label desired-weight">Desired weight: {desiredWeight}kg</div>
            </div>
            
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
                                    onChange={() => selectPlan(plan.id)}
                                    readOnly 
                                />
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

                    <button 
                        className="get-plan-button" 
                        onClick={handlePayment}
                        disabled={loading}
                        style={{ cursor: loading ? 'not-allowed' : 'pointer' }}
                    >
                        {loading ? 'Processing...' : 'Get my plan'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResultSe;




