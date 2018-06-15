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
import ArticleNewContainer from './article/article_new_container';
import ArticleUpdateContainer from './article/article_update_container';
import UserShowContainer from './user/user_show_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
// import SignUpFormContainer from './session_form/signup_form_container';
// import LogInFormContainer from './session_form/login_form_container';
import Modal from './modal/modal';
import Header from './header';
import Search from './search/search';

const App = () => (
    <div>
        <Header />
        <Switch>
            <Route exact path="/" component={IndexContainer} />
            <Route exact path="/search" component={Search} />
            <Route exact path='/articles/new' component={ArticleNewContainer} />
            <Route exact path='/articles/update/:id' component={ArticleUpdateContainer} />
            <Route exact path='/articles/:id' component={ArticleShowContainer} />
            <Route exact path='/users/:id' component={UserShowContainer} />
            <Redirect to='/' />
        </Switch>

    </div>
);

export default App;