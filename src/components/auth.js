import './auth.css';
import React, { useState } from 'react';

function AuthComponent({ isRegistration }) {
  const [isReg, setIsReg] = useState(isRegistration);

  const toggleForm = () => setIsReg(!isReg);

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
        <input type="text" name="login" required /><br/>
        <label>Password</label><br/>
        <input type="password" name="password" required /><br/>
        <button type="submit">Submit</button><br/>
      </form>
      <a href="#" onClick={toggleForm}>
        {isReg ? 'Go to login' : 'Go to registration'}
      </a>
    </div>
  );
}

export default AuthComponent;
