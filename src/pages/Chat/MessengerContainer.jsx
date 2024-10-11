import './MessengerContainer.css';
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import PeopleTab from './PeopleTab';
import Chat from './Chat';

// const socket = io('http://localhost:3002'); 
// socket.connect("subscribe");

function MessengerContainerComponent() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    // socket.on('message', (msg) => {
    //   setMessages((prevMessages) => [...prevMessages, msg]);
    // });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      //console.log("SOCKET: ", socket)
      //socket.emit('message', input);
      setInput(''); 
    }
  };

  return (
    <div>
      <PeopleTab></PeopleTab>
      <Chat></Chat>
    </div>
  );
}

export default MessengerContainerComponent;
