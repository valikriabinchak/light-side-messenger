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
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [currentUser, setCurrentUser] = useState(defaultUser);

    useEffect(() => {
        console.log("CURRENT USER UPDATED:", currentUser);
    }, [currentUser]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input) {
            //console.log("SOCKET: ", socket)
            //socket.emit('message', input);
            setInput("");
        }
    };

    const handleUserChange = (friend) => {
        // Update the current user state
        setCurrentUser(friend);
        // You might want to do additional actions here, like fetching chat history or profile details
    };

    return (
        <div>
            <PeopleTab onUserChange={handleUserChange}></PeopleTab>
            <Chat person={currentUser}></Chat>
        </div>
    );
}

export default MessengerContainerComponent;
