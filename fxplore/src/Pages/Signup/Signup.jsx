import React, { useState } from 'react';
import './Signup.css';

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="form-container">
      <form className="form-box">
        <h2>Signup</h2>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <div className="password-field">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            required
          />
          <button
            type="button"
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        </div>
        <label className="checkbox">
          <input type="checkbox" required />
          <span>I agree to the terms & conditions</span>
        </label>
        <button type="submit">Signup</button>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
