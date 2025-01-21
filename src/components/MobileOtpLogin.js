import React, { useState } from 'react';
import './MobileOtpLogin.css';

const MobileOtpLogin = () => {
  const [mobile, setMobile] = useState('');
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');

  const handleSendOtp = () => {
    if (!/^\d{10}$/.test(mobile)) {
      setError('Enter a valid 10-digit mobile number.');
      return;
    }
    setError('');
    setIsOtpSent(true);
    alert('OTP sent to your mobile number.');
  };

  const handleVerifyOtp = () => {
    if (otp === '123456') {
      alert('Login successful');
    } else {
      setError('Invalid OTP.');
    }
  };

  return (
    <div className="mobile-login-container">
      {!isOtpSent ? (
        <>
          <div className="otp-container">
            <label htmlFor="mobile">Mobile Number:</label>
            <input
              type="text"
              id="mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter 10-digit number"
            />
            <button onClick={handleSendOtp}>Send OTP</button>
          </div>
          {error && <p className="error-message">{error}</p>}
        </>
      ) : (
        <>
          <div>
            <label htmlFor="otp">Enter OTP:</label>
            <input
              type="text"
              id="otp"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              placeholder="Enter OTP"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button onClick={handleVerifyOtp}>Verify OTP</button>
        </>
      )}
    </div>
  );
};

export default MobileOtpLogin;
