import "./PersonInfo.css";
import { lightTheme, darkTheme } from "../../themes.js";
import { Container, Button, LabelField, InputField } from "../../styled-components.js";
import { ThemeContext } from "../../../ThemeContext.js";
import React, { useEffect, useContext, useState } from "react";

function PersonInfo({ person, isFriendRequest, onClick, isHeader }) {
    const [currentUser, setCurrentUser] = useState(person);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        setCurrentUser(person);
        console.log("PersonInfo person updated:", person); // Log when person changes
    }, [person]);

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

    function formatTime(pastDate) {
        try {
            const now = new Date();
            const past = new Date(pastDate); // Assume pastDate is a date string or Date object
            const diffInMilliseconds = now - past;

            // Calculate the difference in minutes and hours
            const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
            const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));

            // Check conditions and return formatted time
            if (Number.isNaN(diffInHours)) {
                return "";
            }

            if (diffInMinutes < 0.5) {
                return "Online";
            } else if (diffInMinutes < 30) {
                return `${diffInMinutes} min ago`;
            } else if (diffInHours < 1) {
                return "1h ago";
            } else {
                const hours = past.getHours().toString().padStart(2, "0");
                const minutes = past.getMinutes().toString().padStart(2, "0");

                return `${hours}:${minutes}`;
            }
        } catch {
            return "long time ago";
        }
    }

    return (
        <div className="contact" onClick={() => onClick(currentUser)}>
            <img
                src="https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg"
                alt={`${currentUser.email} profile`}
                className="profile-photo"
            />
            <div className="contact-info">
                <span className="contact-name">{currentUser.firstName || ""}</span>
                <span className="contact-name">{currentUser.secondName || ""}</span>
                <br></br>
                {!isHeader ? (
                    <span className="last-message">{currentUser.lastMessage || ""}</span>
                ) : (
                    <span className="last-seen">
                        {formatTime(currentUser.lastSeen) !== "" && formatTime(currentUser.lastSeen) !== "Online"
                            ? "Seen " + formatTime(currentUser.lastSeen)
                            : formatTime(currentUser.lastSeen)}
                    </span>
                )}
            </div>
            {!isFriendRequest && !isHeader ? (
                <span className="last-seen">
                    {formatTime(currentUser.lastSeen) !== "" && formatTime(currentUser.lastSeen) !== "Online"
                        ? "Seen " + formatTime(currentUser.lastSeen)
                        : formatTime(currentUser.lastSeen)}
                </span>
            ) : (
                <></>
            )}

            {isFriendRequest ? (
                <div class="friend-request-btns">
                    <Button
                        id="accept-friend-btn"
                        theme={theme == "darkTheme" ? darkTheme : lightTheme}
                        onClick={() => acceptFriend(currentUser.email)}>
                        +
                    </Button>
                    <Button
                        id="reject-friend-btn"
                        theme={theme == "darkTheme" ? darkTheme : lightTheme}
                        onClick={() => rejectFriend(currentUser.email)}>
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
