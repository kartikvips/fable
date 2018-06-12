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
import IndexContainer from './index/index_container';
import ArticleShowContainer from './article/article_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import SignUpFormContainer from './session_form/signup_form_container';
// import LogInFormContainer from './session_form/login_form_container';
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
        <Switch>
            <Route exact path="/" component={IndexContainer} />
            <Route exact path='/articles/:id' component={ArticleShowContainer} />
            <Redirect to='/' />
        </Switch>

    </div>
);

export default App;