import React, { useState, useEffect  } from 'react';
import './App.css';
import AuthComponent from './pages/Auth.jsx';
import MessengerContainerComponent from './pages/Chat/MessengerContainer.jsx';
import { socket } from './services/socket'
import { Routes, Route } from 'react-router-dom';
import ProfileComponent from './pages/Profile.jsx';

import { lightTheme, darkTheme } from './components/themes.js';
import { Body } from './components/styled-components.js';
import ResetPasswordComponent from './pages/ResetPassword.jsx';
import OneMoreStepComponent from './pages/OneMoreStep.jsx';
import { ThemeProvider } from 'styled-components';
import { ThemeContext } from 'styled-components';

// export const ThemeContext = React.createContext({
//   theme: true,
//   userToken: '',
//   toggleTheme: () => {}
// });

function App() {
  const [isDark, setIsDark] = useState(true);

  // socket.connect();

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <Body className="app-container" theme={isDark ? darkTheme : lightTheme}>
        <Routes>
            <Route path="/" element={<AuthComponent isRegistration={false} />} />
            <Route path="/messenger" element={<MessengerContainerComponent />} />
            <Route path="/profile" element={<ProfileComponent />} />
            <Route path="/resetting-password" element={<ResetPasswordComponent isEmailPage={false}/>} />
            <Route path="/email-send" element={<ResetPasswordComponent isEmailPage={true}/>} />
            <Route path="/one-more-step" element={<OneMoreStepComponent />} />
        </Routes>
      </Body>
    </ThemeProvider>
  );
}

export default App;
