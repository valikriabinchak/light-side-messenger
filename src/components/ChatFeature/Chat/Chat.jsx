import React, { useRef, useEffect, useState, useContext } from "react";
import "./Chat.css";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";

import { lightTheme, darkTheme } from "../../themes.js";
import { Container, Button, LabelField, InputField, Body } from "../../styled-components.js";
import PersonInfo from "../PersonInfo/PersonInfo.jsx";
import { ThemeContext } from "../../../ThemeContext.js";
import Picker from "emoji-picker-react";
import { useChatMessenger } from "../../../hooks/useChatMessenger.js";

function Chat({ person }) {
    const {
        messages,
        newMessage,
        setNewMessage,
        showPicker,
        setShowPicker,
        onEmojiClick,
        sendMessage,
        currentUserEmail,
        currentUserImagePath,
        emitRegisterEmail,
        setMessages,
    } = useChatMessenger(person);
    const [currentUser, setCurrentUser] = useState(person);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        if (person?.email) {
            getMessages(person.email);
            setCurrentUser(person);
            emitRegisterEmail();
        }
    }, [person]);

    const [selectedText, setSelectedText] = useState("");
    const [translatedText, setTranslatedText] = useState("");
    const [detectedLanguage, setDetectedLanguage] = useState("");
    const [position, setPosition] = useState({ x: 0, y: 0 });

    // Detect text selection and position of the selection
    const handleMouseUp = () => {
        const text = window.getSelection().toString().trim();
        if (text) {
            const { x, y } = window.getSelection().getRangeAt(0).getBoundingClientRect();
            setSelectedText(text);
            setPosition({ x: x + window.scrollX, y: y + window.scrollY - 20 });

            // Delay request to avoid sending it too often
            fetchTranslation(text);
        }
    };

    // Fetch translation from Google Translate API
    const fetchTranslation = async (text) => {
        try {
            const response = await fetch(
                "https://translation.googleapis.com/language/translate/v2?key=AIzaSyASQjZMFY5P9Ebc1mEZSmKzFxXpM_lXX5s",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ q: text, target: "uk", format: "text" }),
                },
            );
            const data = await response.json();
            setTranslatedText(data.data.translations[0].translatedText);
            setDetectedLanguage(data.data.translations[0].detectedSourceLanguage);
        } catch (error) {
            console.error("Translation error:", error);
        }
    };

    // Clear selection when clicking outside
    const clearSelection = () => {
        setSelectedText("");
        setTranslatedText("");
        setDetectedLanguage("");
    };

    useEffect(() => {
        document.addEventListener("mouseup", handleMouseUp);
        document.addEventListener("mousedown", clearSelection);
        return () => {
            document.removeEventListener("mouseup", handleMouseUp);
            document.removeEventListener("mousedown", clearSelection);
        };
    }, []);

    const getMessages = async (friendEmail) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`http://localhost:3002/messages?friendEmail=${friendEmail}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });

            if (response.ok) {
                const data = await response.json();
                setMessages(data);
            } else {
                const error = await response.json();
                alert(`Error: ${error.message}`);
            }
        } catch (err) {
            console.error("Error fetching messages:", err);
            alert("Failed to fetch messages. Please try again later.");
        }
    };

    const navigate = useNavigate();
    return (
        <div className="chat-container">
            <div className="chat-header">
                <PersonInfo
                    isHeader={true}
                    person={currentUser}
                    onClick={() => {}}
                    isFriendRequest={false}></PersonInfo>
                <button className="profile-btn" onClick={() => navigate("/profile")}></button>
                <button className="exit-btn" onClick={() => navigate("/")}></button>
            </div>

            <Body className="message-area" theme={theme == "darkTheme" ? darkTheme : lightTheme}>
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={`message-item ${message.sender === currentUserEmail ? "left" : "right"}`}>
                        <div className="message-content">
                            <p>{message.content}</p>
                        </div>

                        <img
                            className="profile-photo"
                            src={
                                (message.sender === currentUserEmail ? currentUserImagePath : person.imagePath) ||
                                "./../../../assets/icons/user.png"
                            }
                            alt="profile"
                        />
                    </div>
                ))}
                {selectedText && (
                    <div
                        style={{
                            position: "absolute",
                            top: position.y,
                            left: position.x,
                            backgroundColor: "white",
                            border: "1px solid black",
                            borderRadius: "5px",
                            padding: "5px",
                            zIndex: 1000,
                        }}>
                        <p>
                            {translatedText} ({detectedLanguage})
                        </p>
                    </div>
                )}
            </Body>
            {showPicker && <Picker className="emojiSelector" onEmojiClick={onEmojiClick} />}
            <Body className="input-area" theme={theme == "darkTheme" ? darkTheme : lightTheme}>
                <Button className="emoji-btn" onClick={() => setShowPicker((prev) => !prev)}>
                    😊
                </Button>

                <InputField
                    className="message-field"
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                    type="text"
                    theme={theme == "darkTheme" ? darkTheme : lightTheme}
                />
                <Button
                    className="send-btn"
                    theme={theme == "darkTheme" ? darkTheme : lightTheme}
                    onClick={sendMessage}>
                    Send
                </Button>
                <Button className="send-other-btn" theme={theme == "darkTheme" ? darkTheme : lightTheme}>
                    +
                </Button>
            </Body>
        </div>
    );
}

export default Chat;
