import "./PersonInfo.css";
import { lightTheme, darkTheme } from "../../themes.js";
import { Container, Button, LabelField, InputField } from "../../styled-components.js";
import { ThemeContext } from "../../../ThemeContext.js";
import React, { useContext } from "react";

function PersonInfo({ person, isRequest, onClick }) {
    const { theme } = useContext(ThemeContext);

    const acceptFriend = async (friendEmail) => {
        try {
            const token = localStorage.getItem("token");

            const response = await fetch("http://localhost:3002/user/friends/accept", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ friendEmail }),
            });

            if (response.ok) {
                const data = await response.json();
                // Handle successful response (e.g., update state, show a message)
                console.log("Friend request accepted:", data);
            } else {
                const error = await response.json();
                alert(`Error: ${error.message}`);
            }
        } catch (err) {
            console.error("Error accepting friend request:", err);
            alert("Error accepting friend request. Try again later.");
        }
    };

    const rejectFriend = async (friendEmail) => {
        try {
            const token = localStorage.getItem("token");

            const response = await fetch("http://localhost:3002/user/friends/reject", {
                method: "DELETE", // Use DELETE method to remove the friend request
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ friendEmail }), // Send the friend's email to identify the request
            });

            if (response.ok) {
                const data = await response.json();
                // Handle successful response (e.g., update state, show a message)
                console.log("Friend request rejected:", data);
            } else {
                const error = await response.json();
                alert(`Error: ${error.message}`);
            }
        } catch (err) {
            console.error("Error rejecting friend request:", err);
            alert("Error rejecting friend request. Try again later.");
        }
    };

    return (
        <div className="contact" onClick={() => onClick(person)}>
            <img
                src="https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
                alt={`${person.email} profile`}
                className="profile-photo"
            />
            <div className="contact-info">
                <span className="contact-name">{person.firstName || "Unknown"}</span>
                <span className="contact-name">{person.secondName || ""}</span>
                <br></br>
                <span className="last-message">{person.lastMessage || "No message available"}</span>
            </div>
            <span className="last-seen">{person.lastSeen || "Last seen unavailable"}</span>

            {isRequest ? (
                <div class="friend-request-btns">
                    <Button
                        id="accept-friend-btn"
                        theme={theme == "darkTheme" ? darkTheme : lightTheme}
                        onClick={() => acceptFriend(person.email)}>
                        +
                    </Button>
                    <Button
                        id="reject-friend-btn"
                        theme={theme == "darkTheme" ? darkTheme : lightTheme}
                        onClick={() => rejectFriend(person.email)}>
                        -
                    </Button>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
}

export default PersonInfo;
