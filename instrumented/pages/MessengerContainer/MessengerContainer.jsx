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

    const handleUserChange = (friend) => {
        setCurrentUser(friend);
    };

    return (
        <div>
            <PeopleTab onUserChange={handleUserChange}></PeopleTab>
            <Chat person={currentUser}></Chat>
        </div>
    );
}

export default MessengerContainerComponent;
