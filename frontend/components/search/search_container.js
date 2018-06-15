import React from 'react';
import {
    connect
} from 'react-redux';
import CommentForm from './comment_form';
import {
    fetchComment,
    createComment,
    updateComment
} from '../../actions/comment_actions';
import {
    withRouter
} from 'react-router-dom';

import { fetchSearchResults} from '../../util/search_api_util';
// import {
//     clearErrors
// } from '../../actions/session_actions';

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        createComment: query => dispatch(createComment(comment))
    };
};

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(CommentForm));