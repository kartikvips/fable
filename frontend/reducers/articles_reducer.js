import {
    RECEIVE_ARTICLES,
    RECEIVE_ARTICLE,
    REMOVE_ARTICLE
} from '../actions/article_actions';
import merge from 'lodash/merge';

const ArticlesReducer = (state = {}, action) => {
  
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ARTICLES:
            return action.articles;
        case RECEIVE_ARTICLE:
            return merge({}, state, {
                [action.article.id]: action.article
            });
        case REMOVE_ARTICLE:
            const newState = merge({}, state);
            delete newState[action.articleId];
            return newState;
        default:
            return state;
    }
};

export default ArticlesReducer;