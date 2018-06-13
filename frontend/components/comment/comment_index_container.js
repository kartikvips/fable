import React from 'react';
import {
    connect
} from 'react-redux';
import CommentIndex from './comment_index';
import {
    fetchComments,
    deleteComment,
    updateComment
} from '../../actions/comment_actions';
import {
    withRouter
} from 'react-router-dom';

const mapStateToProps = (state, ownProps) => {
    return {
        comments: Object.values(state.entities.comments).filter(comment => parseInt(comment.article_id) === parseInt(ownProps.match.params.id)),
        currentUser: state.session.currentUser
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchComments: () => dispatch(fetchComments()),
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentIndex));