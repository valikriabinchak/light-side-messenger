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
import { ThemeContext } from 'styled-components'

// export const ThemeContext = React.createContext({
//   theme: true,
//   userToken: '',
//   toggleTheme: () => {}
// });

function App() {
  const [isDark, setTheme] = useState(true);

  function toggleTheme(){
    setTheme(prevtheme => !prevtheme);
  };

  // socket.connect();

  return (
      <Body className="app-container" theme={isDark ? lightTheme : darkTheme}>
        <Routes>
            <Route path="/" element={<AuthComponent isRegistration={false} isDarkTheme={isDark}/>} />
            <Route path="/messenger" element={<MessengerComponent />} />
            <Route path="/profile" element={<ProfileComponent isDarkTheme={isDark}/>} />
        </Routes>
      </Body>
    </ThemeProvider>
  );
}


{/* <ThemeContext.Provider value={{ theme, toggleTheme }}>
      
</ThemeContext.Provider> */}

export default App;
