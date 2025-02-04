
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Optional: If you want to style the page separately

function Home() {  // change the link to = to the page appearing after the login is successful at line 12
  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to the Rent Platform</h1>
        <p>Your one-stop platform to rent personal items with ease!</p>
        <Link to="/register" className="cta-button">Start Renting Now</Link>   
      </header>

      <section className="features-section">
        <h2>Why Choose Us?</h2>
        <div className="features">
          <div className="feature">
            <h3>Variety of Items</h3>
            <p>From electronics to furniture, find everything you need.</p>
          </div>
          <div className="feature">
            <h3>Secure Transactions</h3>
            <p>We ensure safe payments and secure rentals for peace of mind.</p>
          </div>
          <div className="feature">
            <h3>Convenient Delivery</h3>
            <p>Get items delivered right to your door at your preferred time.</p>
          </div>
        </div>
      </section>

      <footer>
        <p>&copy; 2025 Rent Platform - All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default Home;
