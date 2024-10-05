import './Auth.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import { lightTheme, darkTheme } from '../components/themes';
import { Container, Button, LabelField, InputField } from '../components/styled-components';

function AuthComponent({ isRegistration, isDarkTheme }) {
  const [isReg, setIsReg] = useState(isRegistration);
  const [isDark, setIsDark] = useState(isDarkTheme);

  const toggleForm = () => setIsReg(!isReg);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={isReg ? "RegisterComponent" : "LoginComponent"}>
      <form onSubmit={handleSubmit}>
        {isReg && (
          <>
            <LabelField theme={isDark ? lightTheme : darkTheme}>Username</LabelField><br/>
            <InputField type="text" name="username" required theme={isDark ? lightTheme : darkTheme}/><br/>
          </>
        )}
        <LabelField theme={isDark ? lightTheme : darkTheme}>Login</LabelField><br/>
        <InputField type="text" name="login" theme={isDark ? lightTheme : darkTheme}/><br/>
        <LabelField theme={isDark ? lightTheme : darkTheme}>Password</LabelField><br/>
        <InputField type="password" name="password" theme={isDark ? lightTheme : darkTheme}/><br/>
        <Button type="submit" className="btn" onClick={() => navigate('profile')} theme={isDark ? lightTheme : darkTheme}>Submit</Button><br/>
        {isReg 
          ? <Button Button type="submit" className="btn" onClick={toggleForm} theme={isDark ? lightTheme : darkTheme}>Back to Sign in</Button>
          : <></> 
        }
      </form>
      
      { isReg 
      ? <></> 
      : <div className="create-account">
          <a href="#">Sign in with QR code</a>
          <LabelField theme={isDark ? lightTheme : darkTheme}>New to LightSideMessenger? <a href="#" onClick={toggleForm}>Create an account</a></LabelField>
        </div>
      }
    </div>
  );
  
}


AuthComponent.propTypes = {
  isRegistration: PropTypes.bool.isRequired,
};

export default AuthComponent;
