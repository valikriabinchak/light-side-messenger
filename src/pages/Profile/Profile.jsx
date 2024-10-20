import "./Profile.css";
import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import PropTypes from "prop-types";

import { lightTheme, darkTheme } from "../../components/themes.js";
import { Container, Button, LabelField, InputField } from "../../components/styled-components.js";
import { useTheme } from "styled-components";
import { ThemeContext } from "../../ThemeContext.js";

function ProfileComponent() {
    const [firstName, setFirstName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [lastName, setLastName] = useState("");
    const [ages, setAges] = useState(18);
    const [nativeLanguage, setNativeLanguage] = useState(18);
    const { theme, toggleTheme } = useContext(ThemeContext);

    const navigate = useNavigate();

    function toggleLocalStorageTheme() {
        localStorage.setItem("theme", theme === "lightTheme" ? "darkTheme" : "lightTheme");

        toggleTheme();
    }

    function handleProfileUpdate() {
        const token = localStorage.getItem("token");

        fetch("http://localhost:3002/user/profile", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                firstName,
                lastName,
                emailAddress,
                ages,
                nativeLanguage,
            }),
        })
            .then((response) => response.json())
            .then((data) => console.log("Profile updated:", data))
            .catch((error) => console.error("Error:", error));
    }

    return (
        <Container className="grid-container" theme={theme == "darkTheme" ? darkTheme : lightTheme}>
            <Container className="item photo" theme={theme == "darkTheme" ? darkTheme : lightTheme}>
                <img src="../../assets/icons/user.png" alt="User profile photo" />
                <Button theme={theme == darkTheme ? darkTheme : lightTheme}>Change photo</Button>
            </Container>
            <Container className="item main-data" theme={theme == "darkTheme" ? darkTheme : lightTheme}>
                <LabelField theme={theme == "darkTheme" ? darkTheme : lightTheme}>First name</LabelField>
                <InputField
                    type="text"
                    theme={theme == "darkTheme" ? darkTheme : lightTheme}
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <LabelField theme={theme == "darkTheme" ? darkTheme : lightTheme}>Last name</LabelField>
                <InputField
                    type="text"
                    theme={theme == "darkTheme" ? darkTheme : lightTheme}
                    onChange={(e) => setLastName(e.target.value)}
                />

                <LabelField theme={theme == "darkTheme" ? darkTheme : lightTheme}>Email address</LabelField>
                <InputField
                    type="text"
                    theme={theme == "darkTheme" ? darkTheme : lightTheme}
                    onChange={(e) => setEmailAddress(e.target.value)}
                />

                <Container className="ages-theme-content" theme={theme == "darkTheme" ? darkTheme : lightTheme}>
                    <Container className="age-field" theme={theme == "darkTheme" ? darkTheme : lightTheme}>
                        <LabelField theme={theme == "darkTheme" ? darkTheme : lightTheme}>Ages</LabelField>
                        <InputField
                            type="number"
                            theme={theme == "darkTheme" ? darkTheme : lightTheme}
                            onChange={(e) => setAges(e.target.value)}
                        />
                    </Container>

                    <Container className="theme-switch" theme={theme == "darkTheme" ? darkTheme : lightTheme}>
                        <LabelField theme={theme == "darkTheme" ? darkTheme : lightTheme}>Theme</LabelField>
                        <LabelField className="switch" theme={theme == "darkTheme" ? darkTheme : lightTheme}>
                            <InputField
                                type="checkbox"
                                theme={theme == "darkTheme" ? darkTheme : lightTheme}
                                onChange={() => toggleLocalStorageTheme()}
                            />
                            <span className="slider round"></span>
                        </LabelField>
                    </Container>
                </Container>

                <LabelField theme={theme == "darkTheme" ? darkTheme : lightTheme}>
                    Native language (translation code)
                </LabelField>
                <InputField
                    type="text"
                    theme={theme == "darkTheme" ? darkTheme : lightTheme}
                    onChange={(e) => setNativeLanguage(e.target.value)}
                />
            </Container>

            <Container className="item action-btns" theme={theme == "darkTheme" ? darkTheme : lightTheme}>
                <Button onClick={() => navigate("/email-send")} theme={theme == "darkTheme" ? darkTheme : lightTheme}>
                    Reset passoword
                </Button>
                <Button theme={theme == "darkTheme" ? darkTheme : lightTheme}>Edit</Button>
                <Button onClick={() => navigate("/messenger")} theme={theme == "darkTheme" ? darkTheme : lightTheme}>
                    Save
                </Button>
                <Button
                    onClick={() => navigate(-1)}
                    className="cancel-btn"
                    theme={theme == "darkTheme" ? darkTheme : lightTheme}>
                    Cancel
                </Button>
            </Container>
        </Container>
    );
}

export default ProfileComponent;
