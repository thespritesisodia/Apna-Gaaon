import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';

const LoginSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validateEmail = (email) => {
    // Simple email regex
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    setLoading(true);
    // Simulate login API call
    setTimeout(() => {
      setLoading(false);
      if (email === 'test@example.com' && password === 'password123') {
        navigate('/'); // Redirect to home on success
      } else {
        setError('Invalid email or password.');
      }
    }, 1200);
  };

  return (
    <div className="login-container-main">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Log In</h2>
        {error && <div className="login-error">{error}</div>}
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
        <button type="submit" className="login-btn" disabled={loading}>
          {loading ? 'Logging in...' : 'Log In'}
        </button>
        <div className="login-links">
          <span className="login-link" onClick={() => navigate('/forgot-password')}>Forgot Password?</span>
          <span className="login-link" onClick={() => navigate('/signup')}>Sign Up</span>
        </div>
      </form>
    </div>
  );
};

export default LoginSignup;
