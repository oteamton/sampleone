import axios from "axios";
import React, {useState} from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './styles/Register.css';
import { Link } from 'react-router-dom';

const Register: React.FC = () => {
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');
        const [email, setEmail] = useState('');
        const [result, setResult] = useState('');
        const [flashMessage, setFlashMessage] = useState('');
        const [darkMode, setDarkMode] = useState(false);

        const handleColorModeToggle = () => {
            setDarkMode(!darkMode);
        }
    const handleRegister = async () => {
        // Call API
        try{ 
            setResult(''); // Clear result before making API call

            const response = await axios.post('http://localhost:5000/register',{
                username,
                password,
                email,
            });
            console.log(response.data);
            // Display result success
            setResult('Registration successful');
            setFlashMessage('');
        } catch (error) {
            // Handle any error
            console.error("Error during registration:", error);
            // Display result error
            setResult("Registration failed");
        }
    };

    return (
        <div className={`register-container ${darkMode ? 'dark' : ''}`}>
            <Link to="/">
            <button>Back</button>
            </Link>
            <h2>Register</h2>
            <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button onClick={handleRegister}>Register</button>
            {result && <p>{result}</p>}

            <Link to="/">Back to Home</Link>
            <button onClick={handleColorModeToggle}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>

            <ToastContainer />
        </div>
    );
};

export default Register;