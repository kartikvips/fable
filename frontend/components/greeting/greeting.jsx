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
            &nbsp;&nbsp;
            <div className = "imgcontainer">
                <img className="profile-pic" src="http://cdn3-www.dogtime.com/assets/uploads/gallery/west-highland-white-terrier-dogs-and-puppies/thumbs/thumbs_west-highland-white-terrier-dogs-puppies-2.jpg" />
            </div>
            {/* <Dropdown /> */}
            <button className="switch-one" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return (
        currentUser ?
            personalGreeting(currentUser, logout) :
            sessionLinks()
    );
};

export default Greeting;