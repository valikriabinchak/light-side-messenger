// Chat.js
import React, { useState } from 'react';
import './Chat.css';
import { useNavigate } from 'react-router-dom';

import { lightTheme, darkTheme } from '../../components/themes';
import { Container, Button, LabelField, InputField } from '../../components/styled-components';
import PersonInfo from './PersonInfo';

const contact = {
    id: 1,
    name: 'John Doe',
    lastMessage: 'Hey, how are you?',
    lastSeen: '5 min ago',
    photo: '../../../assets/icons/user.png',
}

const messages = [
    {
      id: 1,
      sender: 'John Doe',
      content: 'Hey, how are you?',
      timestamp: '2024-10-07 10:15:00',
      isMine: false
    },
    {
      id: 2,
      sender: 'Me',
      content: 'I’m good, thanks! How about you?',
      timestamp: '2024-10-07 10:16:00',
      isMine: true
    },
    {
      id: 3,
      sender: 'John Doe',
      content: 'Doing well! What’s up?',
      timestamp: '2024-10-07 10:17:30',
      isMine: false
    },
    {
      id: 4,
      sender: 'Me',
      content: 'Just working on a project right now.',
      timestamp: '2024-10-07 10:18:00',
      isMine: true
    },
    {
      id: 5,
      sender: 'John Doe',
      content: 'Cool! Need any help?',
      timestamp: '2024-10-07 10:19:00',
      isMine: false
    },
    {
      id: 6,
      sender: 'Me',
      content: 'Not at the moment, but I’ll let you know. Thanks!',
      timestamp: '2024-10-07 10:20:00',
      isMine: true
    }
  ];
  
function Chat({isDarkTheme}) {
    const [input, setInput] = useState('');
    const [isDark, setIsDark] = useState(isDarkTheme);

    const navigate = useNavigate();
    return (
        <div className="chat-container">
            <div className="chat-header">
              <PersonInfo isDarkTheme={isDarkTheme} person={contact}></PersonInfo> 
              <button className="exit-btn" onClick={() => navigate('/')}></button>               
            </div>

            <Container className='message-area' theme={isDark ? lightTheme : darkTheme}>
                {messages.map((message, index) => (
                    <div
                    key={index}
                    className={`message-item ${message.sender === 'Me' ? 'left' : 'right'}`}
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
                <InputField                 type="text"             />
                <Button theme={isDark ? lightTheme : darkTheme}>Send</Button>
            </Container>
        </div>
    );
};

export default Chat;
