import './PersonInfo.css';

import { useState } from 'react';
import { lightTheme, darkTheme } from '../../components/themes';
import { Container, Button, LabelField, InputField } from '../../components/styled-components';

function PersonInfo({isDarkTheme, person}) {
    const [isDark, setIsDark] = useState(isDarkTheme);

    const handleContactClick = (contactName) => {
        alert(`Opening chat with ${contactName}`);
    };

  return (
    <div
        className="contact"
        onClick={() => handleContactClick(person.name)}
    >
        <img src="https://static.vecteezy.com/system/resources/thumbnails/008/442/086/small/illustration-of-human-icon-user-symbol-icon-modern-design-on-blank-background-free-vector.jpg" alt={`${person.name} profile`} className="profile-photo" />
        <div className="contact-info">
            <span className="contact-name">{person.name}</span>
            <br></br>
            <span className="last-message">{person.lastMessage}</span>
        </div>
        <span className="last-seen">{person.lastSeen}</span>
    </div>
  );
};

export default PersonInfo;