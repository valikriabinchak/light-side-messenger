import "./Profile.css";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useContext, useState } from "react";

import { lightTheme, darkTheme } from "../../components/themes.js";
import { Body, Container, Button, LabelField, InputField } from "../../components/styled-components.js";
import { ThemeContext } from "../../ThemeContext.js";
import defaultUserIcon from "./../../../assets/icons/user.png";

function ProfileComponent() {
    const [isEditMode, changeMode] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [newImagePath, setNewImagePath] = useState("");

    // Function to handle dialog open/close
    const toggleDialog = () => setIsDialogOpen((prev) => !prev);

    const { theme, toggleTheme } = useContext(ThemeContext);

    const navigate = useNavigate();

    function toggleLocalStorageTheme() {
        if (isEditMode) {
            localStorage.setItem("theme", theme === "lightTheme" ? "darkTheme" : "lightTheme");

            toggleTheme();
        }
    }

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        ages: "",
        nativeLanguage: "",
        imagePath: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    useEffect(() => {
        getProfileData();
        // if (process && process.env) {
        //     console.log("ENV: ", process.env);
        //     console.log("MODE: ", setMode);
        // }
    }, []);

    async function getProfileData() {
        try {
            const token = localStorage.getItem("token");

            const response = await fetch("http://localhost:3002/user/profile", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();

                setFormData(data);
            } else {
                const error = await response.json();
                alert(`Error: ${error.message}`);
            }
        } catch (err) {
            console.error("Profile failed:", err);
            alert("Can not get profile data");
        }
    }

    async function saveData() {
        try {
            const token = localStorage.getItem("token");

            const response = await fetch("http://localhost:3002/user/profile", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                changeMode(false);
            } else {
                const error = await response.json();
                alert(`Error: ${error.message}`);
            }
        } catch (err) {
            console.error("Profile failed:", err);
            alert("Can not get profile data");
        }
    }

    return (
        <Container className="grid-container" theme={theme === "darkTheme" ? darkTheme : lightTheme}>
            <Container className="item photo" theme={theme === "darkTheme" ? darkTheme : lightTheme}>
                <img src={formData.imagePath || defaultUserIcon} alt="User profile photo" />
                {isEditMode ? (
                    <Button theme={theme === darkTheme ? darkTheme : lightTheme} onClick={toggleDialog}>
                        Change photo
                    </Button>
                ) : (
                    <></>
                )}
            </Container>

            <Container className="item main-data" theme={theme === "darkTheme" ? darkTheme : lightTheme}>
                <LabelField theme={theme === "darkTheme" ? darkTheme : lightTheme}>First name</LabelField>
                <InputField
                    readOnly={!isEditMode}
                    theme={theme === "darkTheme" ? darkTheme : lightTheme}
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                />

                <LabelField theme={theme === "darkTheme" ? darkTheme : lightTheme}>Last name</LabelField>
                <InputField
                    readOnly={!isEditMode}
                    theme={theme === "darkTheme" ? darkTheme : lightTheme}
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                />

                <LabelField theme={theme === "darkTheme" ? darkTheme : lightTheme}>Email address</LabelField>
                <InputField
                    readOnly={!isEditMode}
                    theme={theme === "darkTheme" ? darkTheme : lightTheme}
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />

                <Container theme={theme === "darkTheme" ? darkTheme : lightTheme} className="ages-theme-content">
                    <Container theme={theme === "darkTheme" ? darkTheme : lightTheme} className="age-field">
                        <LabelField theme={theme === "darkTheme" ? darkTheme : lightTheme}>Ages</LabelField>
                        <InputField
                            readOnly={!isEditMode}
                            theme={theme === "darkTheme" ? darkTheme : lightTheme}
                            type="number"
                            name="ages"
                            value={formData.ages}
                            onChange={handleInputChange}
                        />
                    </Container>

                    <Container theme={theme === "darkTheme" ? darkTheme : lightTheme} className="theme-switch">
                        <LabelField theme={theme === "darkTheme" ? darkTheme : lightTheme}>Theme</LabelField>
                        <LabelField theme={theme === "darkTheme" ? darkTheme : lightTheme} className="switch">
                            <InputField
                                theme={theme === "darkTheme" ? darkTheme : lightTheme}
                                type="checkbox"
                                className="toggle-theme-btn"
                                onChange={toggleLocalStorageTheme}
                                checked={theme === "darkTheme"}
                            />
                            <span className="slider round"></span>
                        </LabelField>
                    </Container>
                </Container>

                <LabelField theme={theme === "darkTheme" ? darkTheme : lightTheme}>
                    Native language (translation code)
                </LabelField>
                <InputField
                    readOnly={!isEditMode}
                    theme={theme === "darkTheme" ? darkTheme : lightTheme}
                    type="text"
                    name="nativeLanguage"
                    value={formData.nativeLanguage}
                    onChange={handleInputChange}
                />
            </Container>

            <Container theme={theme === "darkTheme" ? darkTheme : lightTheme} className="item action-btns">
                <Button theme={theme === "darkTheme" ? darkTheme : lightTheme} onClick={() => navigate("/email-send")}>
                    Reset password
                </Button>
                {isEditMode ? (
                    <div>
                        <Button theme={theme === "darkTheme" ? darkTheme : lightTheme} onClick={() => saveData()}>
                            Save
                        </Button>
                        <Button
                            theme={theme === "darkTheme" ? darkTheme : lightTheme}
                            onClick={() => changeMode(false)}
                            className="cancel-btn">
                            Cancel
                        </Button>
                    </div>
                ) : (
                    <div>
                        <Button theme={theme === "darkTheme" ? darkTheme : lightTheme} onClick={() => changeMode(true)}>
                            Edit
                        </Button>
                        <Button
                            theme={theme === "darkTheme" ? darkTheme : lightTheme}
                            onClick={() => navigate(-1)}
                            className="cancel-btn">
                            Back
                        </Button>
                    </div>
                )}
            </Container>

            {isDialogOpen && (
                <Body theme={theme === "darkTheme" ? darkTheme : lightTheme} className="dialog">
                    <h3>Update Profile Photo</h3>
                    <InputField
                        theme={theme === "darkTheme" ? darkTheme : lightTheme}
                        type="text"
                        name="imagePath"
                        onChange={handleInputChange}
                    />
                    <Button theme={theme === "darkTheme" ? darkTheme : lightTheme} onClick={toggleDialog}>
                        Close
                    </Button>
                </Body>
            )}
        </Container>
    );
}

export default ProfileComponent;
