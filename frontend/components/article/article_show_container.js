import React from 'react';
import {
    connect
} from 'react-redux';
import {
    fetchArticle
} from '../../actions/article_actions';
import ArticleShow from './article_show';


const mapStateToProps = (state, ownProps) => ({
    article: state.entities.articles[ownProps.match.params.id],
    currentUser: state.session.currentUser
});


const mapDispatchToProps = dispatch => ({
    getArticle: (id) => dispatch(fetchArticle(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleShow);