import React, { useState } from 'react';
import axios from 'axios';
import './styles/Login.css';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState('');
  const [flashMessage, setFlashMessage] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Set to true when user logs in

  const handleColorModeToggle = () => {
    setDarkMode(!darkMode);
}
const handleLogin = async () => {
  try {
    setResult('');

    const response = await axios.post('http://localhost:5000/login', {
      username,
      password,
    });
    const result = response.data.result;

    console.log(response.data); // Handle authentication logic
    // Or update a state variable to render to JSX code
    setResult(result);
    setFlashMessage('');

    // Update login state
    setIsLoggedIn(true);
  } catch (error) {
      console.error('Error during login:', error);
      setResult('');
    }
  };

  return (
    <div className={`login-container ${darkMode ? 'dark' : ''}`}>
      <Link to="/">
        <button>Back</button>
      </Link>
      <button onClick={handleColorModeToggle}>Dark Mode</button>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {isLoggedIn ? (
        <Link to="/">
          <button>Logout</button>
        </Link>
      ) : (<button onClick={handleLogin}>Login</button>)}
      {result && <p>{result}</p>}
    </div>
  );
};

export default Login;
