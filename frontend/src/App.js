import React, { useState } from "react";
import './App.css';
import Donate from './Donate';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';
import About from './About';
import ThankYou from './ThankYou';
import Events from './Events';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

import visitorIcon from './images/visitors.png';
import donorIcon from './images/donors.png';
import memberIcon from './images/members.png';
import volunteerIcon from './images/volunteers.png';

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

  return (
    <Router>
      <div className="App">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/donate/:category" element={<Donate />} />
          <Route path="/thank-you" element={<ThankYou />} />
          <Route path="/events" element={<Events />} />
          <Route path="/" element={
            <>
              {/* Newsbox */}
              <div className="newsbox-container">
                <h2>AAPKA AKHBAAR</h2>
                <button className="newsbox-button" onClick={() => window.location.href = '/news.html'}>
                  Click Here for Latest News
                </button>
              </div>
              <div className="governmentschemes-container">
                <h2>AAPKI SARKAAR</h2>
                <button className="governmentschemes-button" onClick={() => window.location.href = '/governmentschemes.html'}>
                  Click Here for Latest Government Schemes
                </button>
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
              <DonationSection />
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
                  ].map(({ img, name, amount }, index) => (
                    <div key={index} className="donor-box">
                      <img src={img} alt={name} className="donor-image" />
                      <h3>{name}</h3>
                      <p>Donated: <span className="donation-amount">{amount}</span></p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          } />
          <Route path="*" element={
            <>
              {/* Newsbox */}
              <div className="newsbox-container">
                <h2>AAPKA AKHBAAR</h2>
                <button className="newsbox-button" onClick={() => window.location.href = '/news.html'}>
                  Click Here for Latest News
                </button>
              </div>
              <div className="governmentschemes-container">
                <h2>AAPKI SARKAAR</h2>
                <button className="governmentschemes-button" onClick={() => window.location.href = '/governmentschemes.html'}>
                  Click Here for Latest Government Schemes
                </button>
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
              <DonationSection />
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
                  ].map(({ img, name, amount }, index) => (
                    <div key={index} className="donor-box">
                      <img src={img} alt={name} className="donor-image" />
                      <h3>{name}</h3>
                      <p>Donated: <span className="donation-amount">{amount}</span></p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

const DonationSection = () => {
  const navigate = useNavigate();
  const donationOptions = [
    { img: womenEmpIcon, label: "Women Empowerment" },
    { img: childLabourIcon, label: "Child Labour" },
    { img: environmentIcon, label: "Environment Protection" },
    { img: educationIcon, label: "Education" },
    { img: healthIcon, label: "Healthcare" },
    { img: povertyIcon, label: "Poverty Alleviation" },
    { img: animalCareIcon, label: "Animal Care" },
    { img: disasterReliefIcon, label: "Disaster Relief" },
  ];
  return (
    <div className="donation-section">
      <h2>MAKE THE WORLD A HAPPIER PLACE BY <span className="highlight-donating">donating</span></h2>
      <div className="donation-grid">
        {donationOptions.map(({ img, label }) => (
          <div
            key={label}
            className="donation-box"
            onClick={() => navigate(`/donate/${encodeURIComponent(label)}`)}
          >
            <img src={img} alt={label} />
            <div className="hover-text">Donate at {label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
