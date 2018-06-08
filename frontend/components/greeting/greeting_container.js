import {connect} from 'react-redux';
import {login, logout} from '../../actions/session_actions';
import Greeting from './greeting';
import { openModal } from '../../actions/modal_actions';

const mapStateToProps = ({session}) => {
    return {
        currentUser: session.currentUser
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    demologin: () => dispatch(login({email: "jack@gmail.com", password: "password"}))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Greeting);