import React from "react";
import './App.css';
import secondlogo from './images/satya.png';
import fbIcon from './images/fbtwo.png';
import whIcon from './images/whatsapp.webp';
import instaIcon from './images/instagram.webp';
import xIcon from './images/x.jpg';

const App = () => {
  const handleLoginClick = () => {
    window.location.href = '/signup.html'; // Redirect to signup.html
  };

  const handleHindiSiteClick = () => {
    window.location.href = '/hindi-site.html'; // Redirect to the Hindi version of the site
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>अपना नौगांव</h1>
      </header>


      {/* Social Media Icons */}
      <div className="social-icons-container">
  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
  <img src={fbIcon} alt="Facebook" className="social-icon" />
  </a>
  <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
  <img src={whIcon} alt="Whasatpp" className="social-icon" />
  </a>
  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
  <img src={xIcon} alt="X" className="social-icon" />
  </a>
  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
  <img src={instaIcon} alt="Instagram" className="social-icon" />
  </a>
</div>

      {/* Login Button */}
      <div className="login-container">
        <button className="login-button" onClick={handleLoginClick}>Login</button>
      </div>

       {/* Hindi Website Button */}
       <div className="hindi-site-container">
        <button className="hindi-site-button" onClick={handleHindiSiteClick}>हिन्दी</button>
      </div>

      {/* Search Box */}
      <div className="search-box-container">
        <input
          type="text"
          className="search-box"
          placeholder="Search..."
        />
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="#Home">Home</a></li>
          
          <li><a href="#History">History</a></li>
          <li><a href="events.html">Events</a></li>
          <li><a href="communities.html">Communities</a></li>
          <li><a href="gallery.html">Gallery</a></li>

          {/* Dropdown for Aapka Naugaon */}
          <li className="dropdown">
            <a href="naugaon.html" className="dropdown-toggle">Aapka Naugaon</a>
            <ul className="dropdown-menu">
              <li><a href="vendors.html">Shop Vendors</a></li>
              <li><a href="medical.html">Medical Stores</a></li>
              <li><a href="clinics.html">Clinics</a></li>
              <li><a href="temples.html">Temples</a></li>
              <li><a href="hospitals.html">Hospitals</a></li>
              <li><a href="schools.html">Schools</a></li>
              <li><a href="colleges.html">Colleges</a></li>
            </ul>
          </li>

          <li><a href="#Team">Team</a></li>
          <li><a href="#Help Centre">Help Centre</a></li>
          <li><a href="#Register A Complaint">Complaint</a></li>
          <li><a href="about.html">About Us</a></li>
        </ul>
      </nav>

      {/* Second Logo */}
      <img
        src={secondlogo}
        alt="India"
        className="Second-Logo"
      />
    </div>
  );
};

export default App;