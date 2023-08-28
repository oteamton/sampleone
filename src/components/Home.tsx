import React from 'react';
import {
    Link
} from 'react-router-dom'
const Home: React.FC = () => {
  return (
    <div>
      <h2>Welcome to the Home Page!</h2>
      <Link to="/register">
        <button>Go to Register</button>
      </Link>
      <Link to="/login">
        <button>Go to Login</button>
      </Link>
    </div>
  );
};

export default Home;
