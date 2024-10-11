import './Profile.css';
import { useNavigate } from 'react-router-dom';
import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { lightTheme, darkTheme } from '../components/themes';
import { Container, Button, LabelField, InputField } from '../components/styled-components';

function ProfileComponent({ isDarkTheme }) {    
    const [isDark, setIsDark] = useState(isDarkTheme);

    const toggleForm = () => setIsDark(!isDark);

    const navigate = useNavigate();

    return (
        <Container className="grid-container" theme={theme == darkTheme ? darkTheme : lightTheme }>
            <Container className="item photo" theme={theme == darkTheme ? darkTheme : lightTheme }>
                <img src="../../assets/icons/user.png" alt="User profile photo" />
                <Button theme={theme == darkTheme ? darkTheme : lightTheme }>Change photo</Button>
            </Container>
            <Container className="item main-data" theme={theme == darkTheme ? darkTheme : lightTheme }>
                <LabelField theme={theme == darkTheme ? darkTheme : lightTheme }>First name</LabelField>
                <InputField type="text" theme={theme == darkTheme ? darkTheme : lightTheme } onChange={(e) => setFirstName(e.target.value)}/>

                <LabelField theme={theme == darkTheme ? darkTheme : lightTheme }>Last name</LabelField>
                <InputField type="text" theme={theme == darkTheme ? darkTheme : lightTheme } onChange={(e) => setLastName(e.target.value)}/>

                <LabelField theme={theme == darkTheme ? darkTheme : lightTheme }>Email address</LabelField>
                <InputField type="text" theme={theme == darkTheme ? darkTheme : lightTheme } onChange={(e) => setEmailAddress(e.target.value)}/>

                <Container className="ages-theme-content" theme={theme == darkTheme ? darkTheme : lightTheme }>
                    <Container className="age-field" theme={theme == darkTheme ? darkTheme : lightTheme }>
                        <LabelField theme={theme == darkTheme ? darkTheme : lightTheme }>Ages</LabelField>
                        <InputField type="number" theme={theme == darkTheme ? darkTheme : lightTheme } onChange={(e) => setAges(e.target.value)}/>
                    </Container>

                    <Container className="theme-switch" theme={theme == darkTheme ? darkTheme : lightTheme }>
                        <LabelField theme={theme == darkTheme ? darkTheme : lightTheme }>Theme</LabelField>
                        <LabelField className="switch" theme={theme == darkTheme ? darkTheme : lightTheme }>
                            <InputField type="checkbox" onClick={props.toggleTheme} theme={theme == darkTheme ? darkTheme : lightTheme }/>
                            <span className="slider round"></span>
                        </LabelField>
                    </Container>
                </Container>

                <LabelField theme={theme == darkTheme ? darkTheme : lightTheme }>Native language (translation code)</LabelField>
                <InputField type="text" theme={theme == darkTheme ? darkTheme : lightTheme } onChange={(e) => setNativeLanguage(e.target.value)}/>
            </Container>

            <Container className="item action-btns" theme={isDark ? lightTheme : darkTheme}>
                <Button onClick={() => navigate('/messenger')} theme={isDark ? lightTheme : darkTheme}>Reset passoword</Button>
                <Button theme={isDark ? lightTheme : darkTheme}>Edit</Button>
                <Button onClick={() => navigate('/messenger')} theme={isDark ? lightTheme : darkTheme}>Save</Button>
                <Button onClick={() => navigate(-1)} className="cancel-btn" theme={isDark ? lightTheme : darkTheme}>Cancel</Button>
            </Container>
      </Container>
    );
  }

export default ProfileComponent;
  