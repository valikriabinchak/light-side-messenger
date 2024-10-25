// Chat.js
import React, { useEffect, useState, useContext } from "react";
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

    const getMessages = async (friendEmail) => {
        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`http://localhost:3002/user/messages?friendEmail=${friendEmail}`, {
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
                            src="https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
                            alt="profile"
                        />
                    </div>
                ))}
            </Body>
            {showPicker && <Picker className="emojiSelector" onEmojiClick={onEmojiClick} />}
            <Body className="input-area" theme={theme == "darkTheme" ? darkTheme : lightTheme}>
                <Button className="emoji-btn" onClick={() => setShowPicker((prev) => !prev)}>
                    😊
                </Button>

                <InputField
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                    type="text"
                    theme={theme == "darkTheme" ? darkTheme : lightTheme}
                />
                <Button theme={theme == "darkTheme" ? darkTheme : lightTheme} onClick={sendMessage}>
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
