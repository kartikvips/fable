import React from 'react';
import { connect } from 'react-redux';
import { fetchArticles } from '../../actions/article_actions';
import Index from './index';
import { selectAllArticles } from '../../reducers/selectors'

const mapStateToProps = ({entities}) => ({
        articles: selectAllArticles(entities.articles)
});


const mapDispatchToProps = dispatch => ({
    getArticles: () => dispatch(fetchArticles())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Index);
