import "./Auth.css";
import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { lightTheme, darkTheme } from "../../components/themes.js";
import { Container, Button, LabelField, InputField } from "../../components/styled-components.js";
import { ThemeContext } from "../../ThemeContext.js";
import { useAuth } from "../../hooks/useAuth.js";

function AuthComponent() {
    const { isReg, setFirstName, setEmail, setPassword, toggleForm, handleRegister, handleLogin } = useAuth();
    const { theme } = useContext(ThemeContext);
    return (
        <div className={isReg ? "RegisterComponent" : "LoginComponent"}>
            <form>
                {isReg && (
                    <>
                        <LabelField theme={theme == "darkTheme" ? darkTheme : lightTheme}>Username</LabelField>
                        <br />
                        <InputField
                            onChange={(e) => setFirstName(e.target.value)}
                            type="text"
                            name="username"
                            required
                            theme={theme == "darkTheme" ? darkTheme : lightTheme}
                        />
                        <br />
                    </>
                )}
                <LabelField theme={theme == "darkTheme" ? darkTheme : lightTheme}>Login</LabelField>
                <br />
                <InputField
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                    name="login"
                    theme={theme == "darkTheme" ? darkTheme : lightTheme}
                />
                <br />
                <div className="password-fields">
                    <LabelField theme={theme === "darkTheme" ? darkTheme : lightTheme}>Password</LabelField>
                    <a href="email-send">Forgot password?</a>
                </div>
                <InputField
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    theme={theme == "darkTheme" ? darkTheme : lightTheme}
                />
                <br />
                {isReg ? (
                    <Button
                        type="button"
                        className="btn"
                        onClick={handleRegister}
                        theme={theme == "darkTheme" ? darkTheme : lightTheme}>
                        Submit
                    </Button>
                ) : (
                    <Button
                        type="button"
                        className="btn"
                        onClick={handleLogin}
                        theme={theme == "darkTheme" ? darkTheme : lightTheme}>
                        Submit
                    </Button>
                )}
                {isReg ? (
                    <Button
                        type="submit"
                        className="submit-btn btn"
                        onClick={toggleForm}
                        theme={theme == "darkTheme" ? darkTheme : lightTheme}>
                        Back to Sign in
                    </Button>
                ) : (
                    <></>
                )}
            </form>

            {isReg ? (
                <></>
            ) : (
                <div className="create-account">
                    <a href="#">Sign in with QR code</a>
                    <LabelField theme={theme == "darkTheme" ? darkTheme : lightTheme}>
                        New to LightSideMessenger?{" "}
                        <a href="#" onClick={toggleForm}>
                            Create an account
                        </a>
                    </LabelField>
                </div>
            )}
        </div>
    );
}

AuthComponent.propTypes = {
    isRegistration: PropTypes.bool.isRequired,
};

export default AuthComponent;
