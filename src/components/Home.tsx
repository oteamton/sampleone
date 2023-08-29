import React from 'react';
import { Link } from 'react-router-dom'
import './styles/Home.css'
const Home: React.FC = () => {
  return (
    <div className="hero-section">
      <h2>Welcome to the Home Page!</h2>
      <div className="cta-buttons">
        <Link to="/register">
          <button className="cta-button">Sign Up</button>
        </Link>
        <Link to="/login">
          <button className="cta-button">Log In</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
