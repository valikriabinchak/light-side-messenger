import "./MessengerContainer.css";
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import PeopleTab from "../../components/ChatFeature/PeopleTab/PeopleTab";
import Chat from "../../components/ChatFeature/Chat/Chat";

// const socket = io('http://localhost:3002');
// socket.connect("subscribe");
const defaultUser = {
    firstName: "Select a user",
    lastName: "",
    email: "",
};

function MessengerContainerComponent() {
    const [currentUser, setCurrentUser] = useState(defaultUser);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleUserChange = (friend) => {
        setCurrentUser(friend);
        setMenuOpen(false);
    };

    return (
        <div className="container">
            {!menuOpen && (
                <button className="menu-btn" onClick={() => setMenuOpen(true)}>
                    ☰
                </button>
            )}

            <div className={`people-tab ${menuOpen ? "open" : ""}`}>
                <button className="close-menu-btn" onClick={() => setMenuOpen(false)}>
                    ☰
                </button>
                <PeopleTab onUserChange={handleUserChange} />
            </div>

            <div className={`chat ${!menuOpen ? "visible" : ""}`}>
                <Chat person={currentUser} />
            </div>
        </div>
    );
}

export default MessengerContainerComponent;
