import * as APIUtil from '../util/article_api_util';
import {
    receiveErrors
} from './session_actions';

export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';
export const RECEIVE_ARTICLE = 'RECEIVE_ARTICLE';
export const REMOVE_ARTICLE = 'REMOVE_ARTICLE';

const receiveArticles = articles => ({
        type: RECEIVE_ARTICLES,
        articles
});


const receiveArticle = article => ({
        type: RECEIVE_ARTICLE,
        article
});


const removeArticle = articleId => ({
        type: REMOVE_ARTICLE,
        articleId
});


export const fetchArticles = () => dispatch => (
        APIUtil.fetchArticles()
        .then(articles => dispatch(receiveArticles(articles)), errors => dispatch(receiveErrors(errors)))
);


export const fetchArticle = id => dispatch => (
        APIUtil.fetchArticle(id)
        .then(article => dispatch(receiveArticle(article)), errors => dispatch(receiveErrors(errors)))
);


export const createArticle = formData => dispatch => (                      APIUtil.createArticle(formData)
        .then(article => dispatch(receiveArticle(article)), errors => dispatch(receiveErrors(errors)))
);


export const updateArticle = (article, id) => dispatch => (                 APIUtil.updateArticle(article, id)
        .then(article => dispatch(receiveArticle(article)), errors => dispatch(receiveErrors(errors)))
);


export const deleteArticle = articleId => dispatch => (                     APIUtil.deleteArticle(articleId)
        .then(article => dispatch(removeArticle(articleId)),errors => dispatch(receiveErrors(errors)))
);


