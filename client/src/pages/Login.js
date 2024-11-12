// src/pages/Login.js

import React, { useState } from 'react';
import './Login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if the user exists in localStorage
    const storedUser = localStorage.getItem(email);
    if (!storedUser) {
      alert("Account does not exist. Please sign up first.");
      return;
    }

    const { password: storedPassword } = JSON.parse(storedUser);

    // Check if the password matches
    if (password === storedPassword) {
      onLogin(); // Log in the user
      alert("Logged in successfully!");
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            required 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password" 
            required 
            placeholder="Enter your password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        
        <div className="button-container">
          <button type="submit" className="button">Login</button>
        </div>
        
        <a href="/signup" className="link">
          Don't have an account? Sign up here.
        </a>
      </form>
    </div>
  );
};

export default Login;
