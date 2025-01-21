import React, { useState } from 'react';
import './LoginScreen.css';

const EmailPasswordLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [strength, setStrength] = useState('');

  const validatePassword = (password) => {
    // Regular expression to match valid characters
    const validCharsRegex = /^[a-zA-Z!@#$%^&*(),.?":{}|<>]*$/;
    // Password strength check
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    const isValidLength = password.length === 8;

    if (!validCharsRegex.test(password)) {
      setError('Password contains invalid characters. Only [a-z], [A-Z], and special characters are allowed.');
      setStrength('');
      return false;
    }

    if (!isValidLength) {
      setError('Password must be exactly 8 characters long.');
      setStrength('');
      return false;
    }

    // Calculate password strength
    if (hasUppercase && hasLowercase && hasSpecialChar) {
      setStrength('Strong');
    } else if (hasUppercase || hasLowercase || hasSpecialChar) {
      setStrength('Medium');
    } else {
      setStrength('Weak');
    }

    setError(''); // Clear error if password is valid
    return true;
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const handleLogin = () => {
    if (!validatePassword(password)) {
      return;
    }
    alert('Login Successful'); // Replace with actual login logic
  };

  return (
    <div className="login-form">
      <label>Email:</label>
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password:</label>
      <input
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={handlePasswordChange}
      />
      {error && <p className="error-message">{error}</p>}
      {strength && <p className={`strength-${strength.toLowerCase()}`}>Password Strength: {strength}</p>}
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default EmailPasswordLogin;
