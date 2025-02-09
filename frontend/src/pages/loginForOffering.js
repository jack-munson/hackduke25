import React, { useState } from 'react';
import './LoginForOffering.css';  // Styling specific to offering homes

function LoginForOffering() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Offering Home Login: ', email, password);
  };

    return (
        <div className="login-page">
        <h2 className="login-title">Login to Offer a Home</h2>
        <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            </div>

            <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </div>

            <button type="submit" className="login-button">
            Login to Offer
            </button>
        </form>
        </div>
    );
}

export default LoginForOffering;

