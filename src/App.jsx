import React from 'react';
import './App.css';
import AuthComponent from './pages/Auth.jsx';
import MessengerComponent from './pages/Messenger.jsx';
import { socket } from './services/socket'
import { Routes, Route } from 'react-router-dom';
import ProfileComponent from './pages/Profile.jsx';

import { lightTheme, darkTheme } from './components/themes.js';
import { Body } from './components/styled-components.js';

function App() {
  socket.connect();

  let isDark = false;

  return (
      <Body className="app-container" theme={isDark ? lightTheme : darkTheme}>
        <Routes>
            <Route path="/" element={<AuthComponent isRegistration={false} isDarkTheme={isDark}/>} />
            <Route path="/messenger" element={<MessengerComponent />} />
            <Route path="/profile" element={<ProfileComponent isDarkTheme={isDark}/>} />
        </Routes>
      </Body>
  );
}

export default App;
