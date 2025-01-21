import React from 'react';
import './OtpInput.css'

const OTPInput = ({ value, onChange }) => {
  const handleChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <label>Enter OTP:</label>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder="Enter OTP"
        maxLength="8"
      />
    </div>
  );
};

export default OTPInput;
