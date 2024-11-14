// PaymentSuccess.js
import React from 'react';
import '../../src/styles/PaymentSuccess.css';

const PaymentSuccess = () => {
  return (
    <div className="payment-success-container">
      <div className="confetti"></div>
      <div className="success-icon">&#10004;</div>
      <h2>Payment succeeded!</h2>
      <p>Your transaction was completed successfully. Thank you for your purchase!</p>
      <button className="dashboard-button">Go to Your Dashboard</button>
    </div>
  );
};

export default PaymentSuccess;
