import React from 'react';
import { Link } from 'react-router-dom';


const Greeting = ({ currentUser, logout, openModal, demologin }) => {

    const sessionLinks = () => (
        <nav className="login-signup">
            <Link to={`/search`}><i class="fas fa-search" id="search"></i></Link>
            <button className="switch-one" onClick={() => openModal('login')}>Sign in</button>
            &nbsp;&nbsp;
            <button className="switch-two" onClick={() => openModal('signup')}>Get started</button>
            &nbsp;&nbsp;
            <button className="switch-three" onClick={demologin}>Demo</button>
        </nav>
    );
    
    const personalGreeting = () => (
        <hgroup className="header-group">
            {/* <h2 className="header-name">Hi, {currentUser.firstname} {currentUser.lastname}!</h2> */}
            &nbsp;&nbsp;
            <Link to={`/search`}><i class="fas fa-search" id="search"></i>
            </Link>
            <div className = "imgcontainer">
                <Link to={`/users/${currentUser.id}`}><img className="profile-pic" src={currentUser.img_url} /></Link>
            </div>
            {/* <Dropdown /> */}
            <button className="switch-one other-one" onClick={logout}>Log Out</button>
        </hgroup>
    );

    return (
        currentUser ?
            personalGreeting(currentUser, logout) :
            sessionLinks()
    );
};

export default Greeting;