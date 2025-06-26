import React from 'react';
import './Header.css';
import logoIcon from './images/1.png';
import fbIcon from './images/fbtwo.png';
import whIcon from './images/whatsapp.webp';
import instaIcon from './images/instagram.webp';
import xIcon from './images/x.jpg';
import satyaLogo from './images/satya.png';

const Header = () => (
  <header className="header-container">
    <div className="header-left">
      <img src={logoIcon} alt="Logo" className="header-logo" />
      <h1 className="header-title">आपका नौगांव</h1>
    </div>
    <div className="header-center">
      <img src={satyaLogo} alt="Satyamev Jayate Logo" className="satya-logo" />
    </div>
    <div className="header-social">
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
        <img src={fbIcon} alt="Facebook" className="header-social-icon" />
      </a>
      <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
        <img src={whIcon} alt="WhatsApp" className="header-social-icon" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <img src={xIcon} alt="X" className="header-social-icon" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <img src={instaIcon} alt="Instagram" className="header-social-icon" />
      </a>
    </div>
  </header>
);

export default Header; 