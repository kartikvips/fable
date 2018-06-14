import React from 'react';
import {
    connect
} from 'react-redux';
import {
    createArticle
} from '../../actions/article_actions';
import ArticleNew from './article_new';


const mapStateToProps = (state, ownProps) => {
    const keys = Object.keys(state.entities.articles);

    return {
    currentUser: state.session.currentUser,
    articleId: keys[keys.length-1]
};

};


const mapDispatchToProps = dispatch => ({
    createArticle: (article) => dispatch(createArticle(article))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleNew);