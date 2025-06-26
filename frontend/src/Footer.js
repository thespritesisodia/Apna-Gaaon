import React from 'react';
import './Footer.css';
import logoIcon from './images/1.png';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <img src={logoIcon} alt="Logo" className="footer-logo" />
      <div className="footer-links">
        <a href="#Link1">Website Policy</a>
        <a href="#Link2">Copyright Policy</a>
        <a href="#Link3">Privacy Policy</a>
        <a href="#Link4">T&C</a>
        <a href="#Link5">AIM</a>
        <a href="#Link6">Web Information Manager</a>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© {new Date().getFullYear()} आपका नौगांव NGO. All rights reserved.</span>
    </div>
  </footer>
);

export default Footer; 