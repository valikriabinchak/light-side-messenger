// Chat.js
import React, { useEffect, useState, useContext } from 'react';
import './Chat.css';
import { useNavigate } from 'react-router-dom';
import io from 'socket.io-client';

import { lightTheme, darkTheme } from '../../components/themes';
import { Container, Button, LabelField, InputField } from '../../components/styled-components';
import PersonInfo from './PersonInfo';
import { ThemeContext } from '../../ThemeContext.js'; 

const socket = io('http://localhost:3002');

function Chat({person}) {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    const [currentUser, setCurrentUser] = useState(person);
    const currentUserEmail = localStorage.getItem('email');

    const { theme } = useContext(ThemeContext);
    
    useEffect(() => {
      if (person?.email) {
        getMessages(person.email);
      }
    }, [person]);
  
    // Set up the socket listener when the chat component mounts
    useEffect(() => {
      const messageListener = (message) => {
        console.log('New message received:', message);
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

  //   useEffect(() => {
  //     console.log("CHAT PERSON HAS BEEN CHANGED", person);
  //     setCurrentUser(person);
  //     if (person?.email) {
  //       getMessages(person.email); // Fetch messages for the selected person
  //   }
  //   const currentUserEmail = localStorage.getItem('email');
  //     socket.on('newMessage', (message) => {
  //       setMessages((prev) => [...prev, message]);
  //   });

  //   return () => {
  //       socket.off('newMessage'); // Clean up listener
  //   };
  // }, [person]);

  const getMessages = async (friendEmail) => {
    try {
        const token = localStorage.getItem('token');

        const response = await fetch(
            `http://localhost:3002/user/messages?friendEmail=${friendEmail}`, 
            {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        if (response.ok) {
            const data = await response.json();
            console.log('Fetched messages:', data);
            // Update the state with the fetched messages
            setMessages(data); 
        } else {
            const error = await response.json();
            alert(`Error: ${error.message}`);
        }
    } catch (err) {
        console.error('Error fetching messages:', err);
        alert('Failed to fetch messages. Please try again later.');
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
    socket.emit('sendMessage', messageData);

    // Optimistically update the UI
    setMessages((prev) => [...prev, messageData]);
    setNewMessage('');
  }
};


    const navigate = useNavigate();
    return (
        <div className="chat-container">
            <div className="chat-header">
              <PersonInfo person={currentUser}></PersonInfo> 
              <button className="exit-btn" onClick={() => navigate('/')}></button>               
            </div>

            <Container className='message-area' theme={theme == darkTheme ? darkTheme : lightTheme ? lightTheme : darkTheme}>
                {messages.map((message, index) => (
                    <div
                    key={index}
                    className={`message-item ${message.sender === currentUserEmail ? 'left' : 'right'}`}
                    >
                    <div className="message-content">
                        <p>{message.content}</p>
                    </div>

                    <img
                        className="profile-photo"
                        src='https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg'
                        alt="profile"
                    />
                    </div>
                ))}
            </Container>
            <Container className="input-area">
                <Button className="emoji-button">😊</Button>
                <InputField onChange={(e) => setNewMessage(e.target.value)} value={newMessage} type="text" theme={theme == darkTheme ? darkTheme : lightTheme}/>
                <Button theme={theme == darkTheme ? darkTheme : lightTheme} onClick={sendMessage}>Send</Button>
            </Container>
        </div>
    );
};

export default Chat;
