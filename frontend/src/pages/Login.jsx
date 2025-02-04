import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setLoading(true);
    setError('');

    // Retrieve registered users from localStorage
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    // Check if the entered credentials match any stored data
    const user = registeredUsers.find(
      (user) => user.email === formData.email && user.password === formData.password
    );

    setLoading(false);

    if (user) {
      // Successful login, redirect user
      alert('Login Successful!');
      navigate('/home'); // Redirect to home page (or dashboard)
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <h1>Login to Your Account</h1>
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        {error && <div className="error-message">{error}</div>}

        <div className="remember-me">
          <label>
            <input type="checkbox" /> Remember Me
          </label>
        </div>

        <button type="submit" className="cta-button" disabled={loading}>
          {loading ? 'Logging In...' : 'Login'}
        </button>
      </form>

      <p className="register-link">
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
}

export default Login;
