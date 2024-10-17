import './OneMoreStep.css';
import { useNavigate } from 'react-router-dom';
import React, { useContext } from 'react';

import { lightTheme, darkTheme } from '../components/themes';
import { Container, Button, LabelField } from '../components/styled-components';
import { ThemeContext } from '.././ThemeContext.js'; 

function OneMoreStepComponent() {
  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate();

  return (
    <div className="OneMoreStepComponent">
      <p className='title'>One more step ...</p>
      
      <Container className='main-fields' theme={theme == darkTheme ? darkTheme : lightTheme }>
        <form>                
            <LabelField 
                theme={theme == darkTheme ? darkTheme : lightTheme }>Enter your user account's verified email address and we will send you a password reset link.</LabelField><br/>
            <Button 
                type="button" 
                className="btn" 
                onClick={() => navigate('/')} 
                theme={theme == darkTheme ? darkTheme : lightTheme }>Back to Sign in</Button><br/>
        </form>
      </Container>
    </div>
  );
  
}

export default OneMoreStepComponent;
