import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { lightTheme, darkTheme } from "./components/themes.js";
import { Body } from "./components/styled-components.js";
import { ThemeContext } from "./ThemeContext.js";

import ResetPasswordComponent from "./pages/ResetPassword.jsx";
import OneMoreStepComponent from "./pages/OneMoreStep.jsx";
import AuthComponent from "./pages/Auth.jsx";
import MessengerContainerComponent from "./pages/Chat/MessengerContainer.jsx";
import ProfileComponent from "./pages/Profile.jsx";

function App() {
    const { theme } = useContext(ThemeContext);

    return (
        <Body className="app-container" theme={theme == "darkTheme" ? darkTheme : lightTheme}>
            <Routes>
                <Route path="/" element={<AuthComponent isRegistration={false} />} />
                <Route path="/messenger" element={<MessengerContainerComponent />} />
                <Route path="/profile" element={<ProfileComponent />} />
                <Route path="/resetting-password" element={<ResetPasswordComponent isEmailPage={false} />} />
                <Route path="/email-send" element={<ResetPasswordComponent isEmailPage={true} />} />
                <Route path="/one-more-step" element={<OneMoreStepComponent />} />
            </Routes>
        </Body>
    );
}

export default App;
