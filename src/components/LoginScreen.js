import React, { useState } from 'react';
import EmailPasswordLogin from './EmailPasswordLogin';
import MobileOtpLogin from './MobileOtpLogin';
import './LoginScreen.css';

const LoginScreen = () => {
  const [isOtpLogin, setIsOtpLogin] = useState(false);

  return (
    <div style={{ padding: '30px', textAlign: 'center' }}>
      <h1>AUTHENTICATION PAGE</h1>
      <div>
        <button onClick={() => setIsOtpLogin(false)}>Email/Password Login</button>
        <button onClick={() => setIsOtpLogin(true)}>Mobile/OTP Login</button>
      </div>

      {isOtpLogin ? <MobileOtpLogin /> : <EmailPasswordLogin />}
    </div>
  );
};

export default LoginScreen;
