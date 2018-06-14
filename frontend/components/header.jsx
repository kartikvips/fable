import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import Modal from './modal/modal';
import { connect } from 'react-redux';


const Header = (props) => {
    const article = () => {
        if(!!props.currentUser){
            return (
                <div className="fake-div">
                    <Link to="/articles/new">New fable</Link>
                </div>
            );
        } else {
            return (
                <div className="fake-div">
                    
                </div>
            );
        }
    };
    return (
        <div>
            <Modal />

            <header>
               {article ()}

                <Link to="/" className="header-link">
                    <h1 className="logo">fable</h1>
                </Link>
                <GreetingContainer />
            </header>
        </div>
    );
        
        };
        
    
        

            
const mapStateToProps = ({session}) => {
    return {
                currentUser: session.currentUser
        };
    };
        
export default connect(
            mapStateToProps
)(Header);