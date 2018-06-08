import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    Link,
    HashRouter
} from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';
import Modal from './modal/modal';

const App = () => (
    <div>
        <Modal />

        <header>
            <div className = "fakediv"></div>

            <Link to="/" className="header-link">
                <h1 className = "logo">fable</h1>
            </Link>
            <GreetingContainer />
        </header>
        {/* <Switch> */}
          
            {/* <ProtectedRoute exact path="/benches/new" component={BenchFormContainer} /> */}
            {/* <Route path="/benches/:benchId" component={BenchShowContainer} /> */}
            {/* <Route exact path="/" component={SearchContainer} /> */}
        {/* </Switch> */}
    </div>
);

export default App;