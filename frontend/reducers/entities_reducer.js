import {combineReducers} from 'redux';

// import users from './users_reducer';
import articles from './articles_reducer';
import users from './users_reducer';
import comments from './comments_reducer'

export default combineReducers({
    users, 
    articles,
    comments
});