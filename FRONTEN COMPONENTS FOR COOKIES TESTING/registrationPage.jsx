
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegistrationPage = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleRegistration = async (e) => {
        e.preventDefault();
        const userData = { userName: username, userEmail: email, userPassword: password };
        try {
            const response = await axios.post("http://localhost:7007/auth/add-newuser",
                { ...userData },
            );
            console.log('Registration Response:', response.data);
            if (response.status === 201) {
                navigate('/login');
            } else {
                setError('Registration failed. Please try again.');
            }
        } catch (err) {
            console.error('Registration error:', err);
            setError('An error occurred during registration. Please try again.');
        }
    };

    return (
        <div>
            <h1>Registration Page</h1>
            <form onSubmit={handleRegistration}>
                <div>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Register</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default RegistrationPage;