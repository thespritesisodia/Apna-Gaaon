import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li><Link to="/">Home</Link></li>
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
      <li><Link to="/about">About Us</Link></li>
    </ul>
  </nav>
);

export default Navbar; 