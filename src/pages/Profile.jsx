import './Profile.css';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { lightTheme, darkTheme } from '../components/themes';
import { Container, Button, LabelField, InputField } from '../components/styled-components';
function ProfileComponent({ isDarkTheme }) {    
    const [isDark, setIsDark] = useState(isDarkTheme);

    const toggleForm = () => setIsDark(!isDark);

    return (
        <Container className="grid-container" theme={isDark ? lightTheme : darkTheme}>
            <Container className="item photo" theme={isDark ? lightTheme : darkTheme}>
                <img src="" alt="" />
                <Button theme={isDark ? lightTheme : darkTheme}>Change photo</Button>
            </Container>
            <Container className="item main-data" theme={isDark ? lightTheme : darkTheme}>
                <LabelField theme={isDark ? lightTheme : darkTheme}>First name</LabelField>
                <InputField type="text" theme={isDark ? lightTheme : darkTheme}/>

                <LabelField theme={isDark ? lightTheme : darkTheme}>Last name</LabelField>
                <InputField type="text" theme={isDark ? lightTheme : darkTheme}/>

                <LabelField theme={isDark ? lightTheme : darkTheme}>Email address</LabelField>
                <InputField type="text" theme={isDark ? lightTheme : darkTheme}/>

                <Container className="ages-theme-content" theme={isDark ? lightTheme : darkTheme}>
                    <Container className="age-field" theme={isDark ? lightTheme : darkTheme}>
                        <LabelField theme={isDark ? lightTheme : darkTheme}>Ages</LabelField>
                        <InputField type="number" theme={isDark ? lightTheme : darkTheme}/>
                    </Container>

                    <Container className="theme-switch" theme={isDark ? lightTheme : darkTheme}>
                        <LabelField theme={isDark ? lightTheme : darkTheme}>Theme</LabelField>
                        <LabelField className="switch" theme={isDark ? lightTheme : darkTheme}>
                            <InputField type="checkbox" onChange={toggleForm} theme={isDarkTheme ? lightTheme : darkTheme}/>
                            <span className="slider round"></span>
                        </LabelField>
                    </Container>
                </Container>

                <LabelField theme={isDark ? lightTheme : darkTheme}>Native language (translation code)</LabelField>
                <InputField type="text" theme={isDark ? lightTheme : darkTheme}/>
            </Container>

            <Container className="item action-btns" theme={isDark ? lightTheme : darkTheme}>
                <Button theme={isDark ? lightTheme : darkTheme}>Reset passoword</Button>
                <Button theme={isDark ? lightTheme : darkTheme}>Edit</Button>
                <Button theme={isDark ? lightTheme : darkTheme}>Save</Button>
                <Button className="cancel-btn" theme={isDark ? lightTheme : darkTheme}>Cancel</Button>
            </Container>
      </Container>
    );
  }
  

ProfileComponent.propTypes = {
    isDarkTheme: PropTypes.bool.isRequired,
}

export default ProfileComponent;
  