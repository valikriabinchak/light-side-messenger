import './PeopleTab.css';

import { useState } from 'react';
import { lightTheme, darkTheme } from '../../components/themes';
import { Container, Button, LabelField, InputField } from '../../components/styled-components';
import PersonInfo from './PersonInfo';
import { useTheme } from 'styled-components';

const contacts = [
  {
      id: 1,
      name: 'John Doe',
      lastMessage: 'Hey, how are you?',
      lastSeen: '5 min ago',
      photo: '../../../assets/icons/user.png',
  },
  {
      id: 2,
      name: 'Jane Smith',
      lastMessage: 'Let’s meet tomorrow!',
      lastSeen: '2 hours ago',
      photo: '../../../assets/icons/user.png',
  },
  {
    id: 3,
    name: 'Tom Johnson',
    lastMessage: 'What is JS?',
    lastSeen: '1 day ago',
    photo: '../../../assets/icons/user.png',
},
{
    id: 4,
    name: 'Valentine Riabinchak',
    lastMessage: 'Do yo want to have coding?',
    lastSeen: '5 hours ago',
    photo: '../../../assets/icons/user.png',
},
];

function PeopleTab() {
    let theme = useTheme();
    const [filteredContacts, setFilteredContacts] = useState(contacts);

    function handleSearchField(value) {
        setFilteredContacts(contacts.filter(c => c.name.includes(value)
            || c.lastMessage.includes(value)
        ));
    }

    return (
        <div className="sidebar">
            <div className='header'>
                <div className="search-icon"></div>
                <InputField type="text" theme={theme == darkTheme ? darkTheme : lightTheme} onChange={(e) => handleSearchField(e.target.value)}/>
                <Button id='add-friend-btn' theme={theme == darkTheme ? darkTheme : lightTheme}>+</Button>
            </div>

            <div className="contact-list">
                {filteredContacts.map((contact) => (
                    <PersonInfo  key={contact.id} person={contact}></PersonInfo>
                ))}
            </div>
        </div>
    );
};

export default PeopleTab;