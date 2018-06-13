import React from 'react';
import {
    connect
} from 'react-redux';
import {
    fetchUser
} from '../../actions/user_actions';
import UserShow from './user_show';


const mapStateToProps = (state, ownProps) => ({
    user: state.entities.users[ownProps.match.params.id],
    articles: state.entities.articles,
    currentUser: state.session.currentUser
});


const mapDispatchToProps = dispatch => ({
    getUser: (id) => dispatch(fetchUser(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UserShow);