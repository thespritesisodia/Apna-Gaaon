import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    setLoading(true);
    // Simulate sign up API call
    setTimeout(() => {
      setLoading(false);
      navigate('/login'); // Redirect to login on success
    }, 1200);
  };

  return (
    <div className="login-container-main">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {error && <div className="login-error">{error}</div>}
        <div className="login-form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="login-form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="login-form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="login-form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            required
          />
        </div>
        <button type="submit" className="login-btn" disabled={loading}>
          {loading ? 'Signing up...' : 'Sign Up'}
        </button>
        <div className="login-links">
          <span className="login-link" onClick={() => navigate('/login')}>Already have an account? Log In</span>
        </div>
      </form>
    </div>
  );
};

export default SignUp; 