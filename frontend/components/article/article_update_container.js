import React from 'react';
import {
    connect
} from 'react-redux';
import { updateArticle, fetchArticle} from '../../actions/article_actions';
import ArticleUpdate from './article_update';


const mapStateToProps = (state, ownProps) => {
    // debugger;
    return {
        currentUser: state.session.currentUser,
        article: state.entities.articles[ownProps.match.params.id]
    };

};


const mapDispatchToProps = dispatch => ({
    updateArticle: (article, id) => dispatch(updateArticle(article, id)),
    getArticle: (id) => dispatch(fetchArticle(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ArticleUpdate);