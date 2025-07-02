import React, { useState } from 'react';
import './Donate.css';
import { useParams } from 'react-router-dom';

const whyDonateReasons = [
  "Your contribution brings real change to villagers' lives.",
  'Support education, healthcare, and basic needs for the underprivileged.',
  'Help us provide food, shelter, and hope to those in need.',
  'Every donation, big or small, makes a difference.',
  'Join our mission to build a compassionate, self-sustaining community.'
];

const suggestedAmounts = [50, 100, 200, 500, 1000];

const Donate = () => {
  const { category } = useParams();
  const [form, setForm] = useState({
    name: '',
    birthdate: '',
    email: '',
    whatsapp: '',
    amount: '',
    privacy: false,
  });
  const [selectedAmount, setSelectedAmount] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleAmountClick = (amt) => {
    setForm((prev) => ({ ...prev, amount: amt }));
    setSelectedAmount(amt);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle donation logic
    alert('Thank you for your donation!');
  };

  return (
    <div className="donate-container">
      <div className="donate-left">
        <h2>Why Donate?</h2>
        <ul className="why-donate-list">
          {whyDonateReasons.map((reason, i) => (
            <li key={i}>{reason}</li>
          ))}
        </ul>
      </div>
      <div className="donate-right">
        <h2>Donor Details</h2>
        {category && <div className="selected-category">Donating for: <span>{category}</span></div>}
        <form className="donate-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="name" required value={form.name} onChange={handleChange} placeholder="Enter your full name" />
          </div>
          <div className="form-group">
            <label htmlFor="birthdate">Birth Date</label>
            <input type="date" id="birthdate" name="birthdate" required value={form.birthdate} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required value={form.email} onChange={handleChange} placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label htmlFor="whatsapp">WhatsApp Number</label>
            <input type="text" id="whatsapp" name="whatsapp" required value={form.whatsapp} onChange={handleChange} placeholder="Enter your WhatsApp number" />
          </div>
          <div className="form-group">
            <label htmlFor="amount">Donation Amount</label>
            <input type="number" id="amount" name="amount" required value={form.amount} onChange={handleChange} placeholder="Enter donation amount" />
          </div>
          <div className="amount-options">
            {suggestedAmounts.map((amt) => (
              <button
                type="button"
                className={`amount-option${selectedAmount === amt ? ' selected' : ''}`}
                key={amt}
                onClick={() => handleAmountClick(amt)}
              >
                {amt}
              </button>
            ))}
          </div>
          <div className="form-group privacy-group">
            <label>
              <input type="checkbox" name="privacy" checked={form.privacy} onChange={handleChange} required />
              I agree to the <a href="/privacy-policy.html" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            </label>
          </div>
          <button type="submit" className="donate-button">Donate</button>
        </form>
      </div>
    </div>
  );
};

export default Donate; 