import "./Auth.css";
import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { lightTheme, darkTheme } from "../../components/themes.js";
import { Container, Button, LabelField, InputField } from "../../components/styled-components.js";
import { ThemeContext } from "../../ThemeContext.js";

function AuthComponent({ isRegistration }) {
    const [isReg, setIsReg] = useState(isRegistration);
    const [firstName, setFirstName] = useState("");
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");

    const { theme } = useContext(ThemeContext);

    const toggleForm = () => setIsReg(!isReg);

    const navigate = useNavigate();

    const handleRegister = async () => {
        try {
            const response = await fetch("http://localhost:3002/user/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    firstName,
                    email,
                    password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                toggleForm();
            } else {
                const error = await response.json();
                alert(`Error: ${error.message}`);
            }
        } catch (err) {
            console.error("Registration failed:", err);
            alert("Registration failed. Try again later.");
        }
    };

    const handleLogin = async () => {
        try {
            const response = await fetch("http://localhost:3002/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                localStorage.setItem("token", data.token);
                localStorage.setItem("email", email);
                navigate("messenger");
            } else {
                const error = await response.json();
                alert(`Error: ${error.message}`);
            }
        } catch (err) {
            console.error("Login failed:", err);
            alert("Login failed. Try again later.");
        }
    };
    console.log("THEME: ", theme);
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
                    onChange={(e) => setemail(e.target.value)}
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
