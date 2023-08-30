import axios, { AxiosError } from "axios";
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
            setFlashMessage('');

            const response = await axios.post('http://localhost:5000/register',{
                username,
                password,
                email,
            });
            
            // Display result
            const result = response.data.message;
            console.log(response.data);
            setResult(result);

            
            
        } catch (error) {
            console.error("Error during registration:", error);
            setResult('');

            if (axios.isAxiosError(error)) {
                const axiosError = error as AxiosError;
                if (axiosError.response) {
                    const { status, data } = axiosError.response;
                    console.log('Status Code:', status);
                    console.log('Response Data:', data);

                    switch (status) {
                        case 400: setResult('All fields are required');
                            break;
                        case 409:
                            // Handle the casse of username/email already exists
                            const { error: conflictError } = data as {error: string};
                            setResult(conflictError);
                            break;
                        default: setResult(status + ' ' + JSON.stringify(data));
                            break;
                    }
                }  
            }
            
        }
    };

    return (
        <div className={`register-container ${darkMode ? 'dark' : ''}`}>
            <Link to="/">
            <button>Back</button>
            </Link>
            <button onClick={handleColorModeToggle}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
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

            <ToastContainer />
        </div>
    );
};

export default Register;