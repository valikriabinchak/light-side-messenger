import './Auth.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes

function AuthComponent({ isRegistration }) {
  const [isReg, setIsReg] = useState(isRegistration);

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
            <label>Username</label><br/>
            <input type="text" name="username" required /><br/>
          </>
        )}
        <label>Login</label><br/>
        <input type="text" name="login" /><br/>
        <label>Password</label><br/>
        <input type="password" name="password" /><br/>
        <button type="submit" className="btn" onClick={() => navigate('profile')}>Submit</button><br/>
      </form>
      <a href="#" onClick={toggleForm}>
        {isReg ? 'Go to login' : 'Go to registration'}
      </a>
    </div>
  );
  
}


AuthComponent.propTypes = {
  isRegistration: PropTypes.bool.isRequired,
};

export default AuthComponent;
