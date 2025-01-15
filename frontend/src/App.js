import React, { useState } from "react";
import './App.css';
import secondlogo from './images/satya.png';
import fbIcon from './images/fbtwo.png';
import whIcon from './images/whatsapp.webp';
import instaIcon from './images/instagram.webp';
import xIcon from './images/x.jpg';
import visitorIcon from './images/visitors.png';
import donorIcon from './images/donors.png';
import memberIcon from './images/members.png';
import volunteerIcon from './images/volunteers.png';
import logoIcon from './images/1.png';

// Donation Images
import womenEmpIcon from './images/women.webp';
import childLabourIcon from './images/childlabour.avif';
import environmentIcon from './images/environment.jpg';
import educationIcon from './images/education.avif';
import healthIcon from './images/health.png';
import povertyIcon from './images/poverty.webp';
import animalCareIcon from './images/animalcare.jpg';
import disasterReliefIcon from './images/disaster.jpg';

import donor1 from './images/donor1.JPG';
import donor2 from './images/donor2.JPG';
import donor3 from './images/donor3.JPG';
import donor4 from './images/donor4.JPG';
import donor5 from './images/donor5.JPG';
import donor6 from './images/donor6.JPG';


const App = () => {
  const [counts] = useState({
    visitors: 1200,
    donors: 450,
    members: 300,
    volunteers: 150,
  });

  const handleLoginClick = () => {
    window.location.href = '/signup.html'; // Redirect to signup.html
  };

  const handleHindiSiteClick = () => {
    window.location.href = '/hindi-site.html'; // Redirect to the Hindi version of the site
  };

  const handleDonationClick = (category) => {
    alert(`Redirecting to donation page for ${category}`);
    window.location.href = `/donation.html?category=${category}`;
  };

  return (
    <div className="App">
      {/* Header */}
      <header className="App-header">
        <div className="logo-heading">
          <img src={logoIcon} alt="Logo" className="heading-logo" />
          <h1>आपका नौगांव</h1>
        </div>
      </header>

      {/* Social Media Icons */}
      <div className="social-icons-container">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={fbIcon} alt="Facebook" className="social-icon" />
        </a>
        <a href="https://wa.me" target="_blank" rel="noopener noreferrer">
          <img src={whIcon} alt="WhatsApp" className="social-icon" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={xIcon} alt="X" className="social-icon" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={instaIcon} alt="Instagram" className="social-icon" />
        </a>
      </div>

      {/* Login and Hindi Site Buttons */}
      <div className="login-container">
        <button className="login-button" onClick={handleLoginClick}>Login</button>
        <button className="hindi-site-button" onClick={handleHindiSiteClick}>हिन्दी</button>
      </div>

      {/* Search Box */}
      <div className="search-box-container">
        <input type="text" className="search-box" placeholder="Search..." />
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="#History">History</a></li>
          <li><a href="events.html">Events</a></li>
          <li><a href="communities.html">Communities</a></li>
          <li><a href="gallery.html">Gallery</a></li>
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

      {/* Second Logo (Satyamev Jayate) */}
      <div className="second-logo-container">
        <img src={secondlogo} alt="Satyamev Jayate Logo" className="second-logo" />
      </div>

      {/* Statistics Section */}
      <div className="bottom-box">
        <div className="stat">
          <img src={visitorIcon} alt="Visitors" className="stat-icon" />
          <h3>Visitors</h3>
          <p>{counts.visitors}</p>
        </div>
        <div className="stat">
          <img src={donorIcon} alt="Donors" className="stat-icon" />
          <h3>Donors</h3>
          <p>{counts.donors}</p>
        </div>
        <div className="stat">
          <img src={memberIcon} alt="Members" className="stat-icon" />
          <h3>Members</h3>
          <p>{counts.members}</p>
        </div>
        <div className="stat">
          <img src={volunteerIcon} alt="Volunteers" className="stat-icon" />
          <h3>Volunteers</h3>
          <p>{counts.volunteers}</p>
        </div>
      </div>

      {/* Donation Section */}
      <div className="donation-section">
    
        <h2>MAKE THE WORLD A HAPPIER PLACE BY <span className="highlight-donating">donating</span></h2>
        <div className="donation-grid">
          {[
            { img: womenEmpIcon, label: "Women Empowerment" },
            { img: childLabourIcon, label: "Child Labour" },
            { img: environmentIcon, label: "Environment Protection" },
            { img: educationIcon, label: "Education" },
            { img: healthIcon, label: "Healthcare" },
            { img: povertyIcon, label: "Poverty Alleviation" },
            { img: animalCareIcon, label: "Animal Care" },
            { img: disasterReliefIcon, label: "Disaster Relief" },
          ].map(({ img, label }) => (
            <div
              key={label}
              className="donation-box"
              onClick={() => handleDonationClick(label)}
            >
              <img src={img} alt={label} />
              <div className="hover-text">Donate at {label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Why Trust Us Section */}
<div className="trust-section">
  <h2>WHY TRUST US?</h2>
  <div className="trust-grid">
    <div className="trust-box">
      <h3>Transparency</h3>
      <p>We maintain complete transparency in all our financial dealings and ensure that every penny is spent for the intended purpose.</p>
    </div>
    <div className="trust-box">
      <h3>Impact</h3>
      <p>Our initiatives have positively impacted thousands of lives, and we consistently provide updates to showcase the progress.</p>
    </div>
    <div className="trust-box">
      <h3>Accountability</h3>
      <p>We are accountable to our donors and the community. Your trust is our top priority, and we strive to uphold it at every step.</p>
    </div>
  </div>
</div>

{/* Our Donors Section */}
<div className="donors-section">
  <h2>OUR DONORS</h2>
  <div className="donors-grid">
    {[
      { img: donor1, name: "PINCHII", amount: "$500" },
      { img: donor2, name: "DRIVER", amount: "$300" },
      { img: donor3, name: "THREESOME", amount: "$1000" },
      { img: donor4, name: "KASHISH(consent)", amount: "$700" },
      { img: donor5, name: "SOFIA", amount: "$400" },
      { img: donor6, name: "AYUSH KUMAR GUPTA", amount: "$200" },
      { img: "donor7.jpg", name: "Oliver White", amount: "$600" },
      { img: "donor8.jpg", name: "Emma Black", amount: "$800" },
      { img: "donor9.jpg", name: "Liam Gray", amount: "$350" },
      { img: "donor10.jpg", name: "Charlotte Blue", amount: "$750" },
    ].map(({ img, name, amount }, index) => (
      <div key={index} className="donor-box">
        <img src={img} alt={name} className="donor-image" />
        <h3>{name}</h3>
        <p>Donated: <span className="donation-amount">{amount}</span></p>
      </div>
    ))}
  </div>
</div>

{/* Empty Blue Section */}

<div className="empty-blue-section">
  {/* Small section with links */}
  <div className="link-section">
    <a href="#Link1">Website Policy</a>
    <a href="#Link2">Copyright Policy</a>
    <a href="#Link3">Privacy Policy</a>
    <a href="#Link4">T&C</a>
    <a href="#Link5">AIM</a>
    <a href="#Link6">Web Information Manager</a>
  </div>

</div>

    </div>
  );
};

export default App;