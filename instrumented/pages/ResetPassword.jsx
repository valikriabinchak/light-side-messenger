import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";

import "./ResetPassword.css";
import { lightTheme, darkTheme } from "../components/themes";
import { Container, Button, LabelField, InputField } from "../components/styled-components";
import { ThemeContext } from ".././ThemeContext.js";

function ResetPasswordComponent({ isEmailPage }) {
    const { id } = useParams();

    const { theme } = useContext(ThemeContext);
    const [email, setEmailValue] = useState("");

    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const sendResetEmail = async () => {
        try {
            const response = await fetch("http://localhost:3002/user/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                }),
            });
            navigate("/one-more-step"); // replace this to if condition
            if (response.ok) {
                const data = await response.json();
            }
        } catch (error) {
            navigate("/one-more-step");
            console.log("Error during registration.");
        }
    };

    const updatePassword = async () => {
        try {
            const response = await fetch("http://localhost:3002/user/reset-password/" + id, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    newPassword,
                }),
            });
            navigate("/"); // replace this to if condition
            if (response.ok) {
                const data = await response.json();
            }
        } catch (error) {
            navigate("/");
            console.log("Error during registration.");
        }
    };

    return (
        <div className={isEmailPage ? "EmailSubmittingComponent" : "ResettingPasswordComponent"}>
            {isEmailPage ? <p className="title">Reset your password</p> : <p className="title">Resetting password</p>}

            <Container className="main-fields" theme={theme == darkTheme ? darkTheme : lightTheme}>
                <form>
                    {isEmailPage ? (
                        <>
                            <LabelField theme={theme == darkTheme ? darkTheme : lightTheme}>
                                Enter your user account's verified email address and we will send you a password reset
                                link.
                            </LabelField>
                            <br />
                            <InputField
                                onChange={(e) => setEmailValue(e.target.value)}
                                type="text"
                                name="username"
                                theme={theme == darkTheme ? darkTheme : lightTheme}
                            />
                            <br />

                            <Button
                                type="button"
                                className="btn"
                                onClick={() => sendResetEmail()}
                                theme={theme == darkTheme ? darkTheme : lightTheme}>
                                Send password reset email
                            </Button>
                            <br />
                            <Button
                                type="button"
                                className="btn"
                                onClick={() => navigate("/")}
                                theme={theme == darkTheme ? darkTheme : lightTheme}>
                                Back to Sign in
                            </Button>
                            <br />
                        </>
                    ) : (
                        <>
                            <LabelField theme={theme == darkTheme ? darkTheme : lightTheme}>New Password</LabelField>
                            <br />
                            <InputField
                                onChange={(e) => setNewPassword(e.target.value)}
                                type="password"
                                name="new-password"
                                theme={theme == darkTheme ? darkTheme : lightTheme}
                            />
                            <br />

                            <LabelField theme={theme == darkTheme ? darkTheme : lightTheme}>
                                Repeat new password
                            </LabelField>
                            <br />
                            <InputField
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                type="password"
                                name="password-confirm"
                                theme={theme == darkTheme ? darkTheme : lightTheme}
                            />
                            <br />

                            <Button
                                type="button"
                                className="btn"
                                onClick={() => (newPassword === confirmPassword ? updatePassword() : undefined)}
                                theme={theme == darkTheme ? darkTheme : lightTheme}>
                                Reset
                            </Button>
                            <br />
                        </>
                    )}
                </form>
            </Container>
        </div>
    );
}

export default ResetPasswordComponent;
