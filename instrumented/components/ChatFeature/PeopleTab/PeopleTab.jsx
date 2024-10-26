import "./PeopleTab.css";

import React, { useEffect, useState, useContext } from "react";
import { lightTheme, darkTheme } from "../../themes.js";
import { Container, Button, LabelField, InputField } from "../../styled-components.js";
import PersonInfo from "../PersonInfo/PersonInfo.jsx";
import { ThemeContext } from "../../../ThemeContext.js";

function PeopleTab({ onUserChange }) {
    const token = localStorage.getItem("token");

    useEffect(() => {
        getUserFriends();
        getFriendRequests();
    }, [token]);

    const [searchField, setSearchField] = useState("");
    const [friends, setFriends] = useState([]);
    const [requests, setRequests] = useState([]);
    const [filteredFriends, setFilteredFriends] = useState([]);

    const { theme } = useContext(ThemeContext);

    function handleSearchField(value) {
        value = value.trim();
        setSearchField(value);

        if (friends && friends.length && value) {
            setFilteredFriends(
                friends.filter(
                    (c) =>
                        (c.firstName ? c.firstName.includes(value) : "") ||
                        (c.lastName ? c.lastName.includes(value) : "") ||
                        (c.email ? c.email.includes(value) : ""),
                ),
            );
        }
    }

    const getUserFriends = async () => {
        try {
            const token = localStorage.getItem("token");

            const response = await fetch("http://localhost:3002/user/friends", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                setSearchField("");

                const data = await response.json();

                setFriends(data);
                setFilteredFriends(data);
            } else {
                const error = await response.json();
                alert(`Error: ${error.message}`);
            }
        } catch (err) {
            console.error("Login failed:", err);
            alert("Can not get friends");
        }
    };

    const getFriendRequests = async () => {
        try {
            const token = localStorage.getItem("token");

            const response = await fetch("http://localhost:3002/user/friends/requests", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (response.ok) {
                const data = await response.json();

                setRequests(data);
            } else {
                const error = await response.json();
                alert(`Error: ${error.message}`);
            }
        } catch (err) {
            console.error("Login failed:", err);
            alert("Can npt get requests to be a frend");
        }
    };

    const sendFriendRequest = async () => {
        try {
            const token = localStorage.getItem("token");

            const response = await fetch("http://localhost:3002/user/friends/request", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    friendEmail: searchField,
                }),
            });

            if (response.ok) {
                const data = await response.json();
            } else {
                const error = await response.json();
                alert(`Error: ${error.message}`);
            }
        } catch (err) {
            console.error("Login failed:", err);
            alert("Login failed. Try again later.");
        }
    };

    return (
        <div className="sidebar">
            <div className="header">
                <div className="search-icon"></div>
                <InputField
                    type="text"
                    theme={theme == "darkTheme" ? darkTheme : lightTheme}
                    onChange={(e) => handleSearchField(e.target.value)}
                />
                <Button
                    id="add-friend-btn"
                    theme={theme == "darkTheme" ? darkTheme : lightTheme}
                    onClick={() => {
                        if (searchField.trim()) sendFriendRequest();
                    }}>
                    +
                </Button>
            </div>

            <div className="contact-list">
                {filteredFriends.map((f) => (
                    <PersonInfo key={f.email} person={f} onClick={() => onUserChange(f)}></PersonInfo>
                ))}
                {requests.map((f) => (
                    <PersonInfo
                        key={f.email}
                        person={f}
                        onClick={() => {}}
                        isRequest={true}
                        isFriendRequest={true}></PersonInfo>
                ))}
            </div>
        </div>
    );
}

export default PeopleTab;
