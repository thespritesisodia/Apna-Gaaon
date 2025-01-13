import React from "react";
import './App.css';
import secondlogo from './images/satya.png';

const App = () => {
  const handleLoginClick = () => {
    window.location.href = '/signup.html'; // Redirect to signup.html
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>अपना नौगांव</h1>
      </header>

      {/* Login Button */}
      <div className="login-container">
        <button className="login-button" onClick={handleLoginClick}>Login</button>
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
              <li><a href="shop_vendors.html">Shop Vendors</a></li>
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