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

      <div className="search-box-container">
        <input
          type="text"
          className="search-box"
          placeholder="Search..."
        />
      </div>

      <nav className="navbar">
        <ul>
          <li><a href="#Home">Home</a></li>
          <li><a href="signup.html">LogIn</a></li>
          <li><a href="#History">History</a></li>
          <li><a href="events.html">Events</a></li>
          <li><a href="communities.html">Communities</a></li> {/* Link to communities.html */}
          <li><a href="#Gallery">Gallery</a></li>
          <li><a href="naugaon.html">Aapka Naugaon</a></li>
          <li><a href="#Team">Team</a></li>
          <li><a href="#Help Centre">Help Centre</a></li>
          <li><a href="#Register A Complaint">Complaint</a></li>
          <li><a href="about.html">About Us</a></li> {/* Link to about.html */}
        </ul>
      </nav>

      <img
        src={secondlogo}
        alt="India"
        className="Second-Logo"
      />

      
    </div>
  );
};

export default App;