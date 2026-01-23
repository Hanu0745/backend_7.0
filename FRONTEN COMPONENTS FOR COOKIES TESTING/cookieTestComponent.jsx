
import React from 'react';
import axios from 'axios';

const CookieTestComponent = () => {

    const checkCookies = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}auth/get-profile`, { withCredentials: true });
            console.log('Cookie Check Response:', response.data);
        } catch (error) {
            console.error('Error checking cookies:', error);
        }
    };

    const logOut = async () => {
        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}auth/logout`, {}, { withCredentials: true });
            console.log('Logout Response:', response.data);
        } catch (error) {
            console.error('Error during logout:', error);
        }
    };

    return (
        <div>
            <h1>Cookie Test Component</h1>
            <p>This is a placeholder for the cookie test component.</p>
            <button onClick={checkCookies}>Check Cookies</button>
            <button onClick={logOut}>Log Out</button>
        </div>
    );
};

export default CookieTestComponent;