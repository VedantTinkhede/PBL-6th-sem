import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'; // Optional: If you want to style the page separately

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // To navigate after successful registration

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords don't match.");
      return;
    }

    setLoading(true);
    setError('');

    // Store registration data in localStorage (as a simple example)
    const registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    registeredUsers.push({
      email: formData.email,
      password: formData.password,
      name: formData.name,
    });

    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

    setLoading(false);
    navigate('/login'); // Redirect to login page after successful registration
  };

  return (
    <div className="register-container">
      <h1>Create an Account</h1>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
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
        <div className="form-group">
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        <button type="submit" className="cta-button" disabled={loading}>
          {loading ? 'Creating Account...' : 'Register'}
        </button>
      </form>
      
      <p className="login-link">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Register;
