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

const socket = io("http://localhost:3002");

function Chat({ person }) {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [currentUser, setCurrentUser] = useState(person);
    const [showPicker, setShowPicker] = useState(false);

    const currentUserEmail = localStorage.getItem("email");

    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        if (person?.email) {
            getMessages(person.email);
            setCurrentUser(person);
            socket.emit("registerEmail", localStorage.getItem("email"));
        }
    }, [person]);

    // Set up the socket listener when the chat component mounts
    useEffect(() => {
        const messageListener = (message) => {
            console.log("New message received:", message);
            setMessages((prev) => [...prev, message]);
        };

        if (currentUserEmail) {
            // Subscribe to the unique channel for the current user
            socket.on(`newMessage:${currentUserEmail}`, messageListener);
        }

        return () => {
            if (currentUserEmail) {
                socket.off(`newMessage:${currentUserEmail}`, messageListener); // Clean up
            }
        };
    }, [currentUserEmail]);

    const onEmojiClick = (emojiObject) => {
        setNewMessage((prevMessage) => prevMessage + emojiObject.emoji);
        setShowPicker(false); // Close picker after selecting an emoji
    };

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
                console.log("Fetched messages:", data);
                // Update the state with the fetched messages
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

    const sendMessage = () => {
        if (newMessage.trim() && person?.email) {
            const messageData = {
                sender: currentUserEmail,
                receiver: person.email,
                content: newMessage,
                timestamp: new Date(),
            };

            // Emit the message to the backend
            socket.emit("sendMessage", messageData);

            // Optimistically update the UI
            setMessages((prev) => [...prev, messageData]);
            setNewMessage("");
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
