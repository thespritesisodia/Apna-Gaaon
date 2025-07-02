import React from 'react';
import { Link } from 'react-router-dom';
import './ThankYou.css';
import qrImage from './images/upi-qr.webp'; // Place your QR code image in src/images/upi-qr.png

const UPI_ID = 'apnangongo@upi';

const ThankYou = () => (
  <div className="thankyou-container">
    <div className="confetti"></div>
    <div className="thankyou-card">
      <h1>Thank You for Your Generosity!</h1>
      <p className="thankyou-message">
        Your details have been received.<br/>
        To complete your donation, please scan the QR code below or use the UPI ID.<br/>
        <span className="thankyou-highlight">Every contribution makes a difference!</span>
      </p>
      <div className="qr-section">
        <img src={qrImage} alt="UPI QR Code" className="upi-qr" />
        <div className="upi-id-box">
          <span className="upi-label">UPI ID:</span>
          <span className="upi-id">{UPI_ID}</span>
        </div>
      </div>
      <Link to="/" className="thankyou-home-btn">Return to Home</Link>
    </div>
  </div>
);

export default ThankYou; 