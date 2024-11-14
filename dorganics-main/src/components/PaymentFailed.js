import React from 'react';
import '../../src/styles/ResultSe.css';

const PaymentFailed = () => {
  return (
    <div className="payment-failed-container">
      <div className="failed-icon">❗</div>
      <h2> Payment Failed</h2>
      <p> Oh no! Something went wrong.
        <span>We aren't able to process your payment.</span> </p>
        <button className="cancel-button">Please try again</button>
    </div>
  );
};

export default PaymentFailed;