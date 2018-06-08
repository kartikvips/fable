import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout, openModal, demologin }) => {

    const sessionLinks = () => (
        <nav className="login-signup">
            <button className="switch-one" onClick={() => openModal('login')}>Sign in</button>
            &nbsp;&nbsp;
            <button className="switch-two" onClick={() => openModal('signup')}>Get started</button>
            &nbsp;&nbsp;
            <button className="switch-three" onClick={demologin}>Demo</button>
        </nav>
    );
    const personalGreeting = () => (
        <hgroup className="header-group">
            <h2 className="header-name">Hi, {currentUser.firstname} {currentUser.lastname}!</h2>
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return (
        currentUser ?
            personalGreeting(currentUser, logout) :
            sessionLinks()
    );
};

export default Greeting;