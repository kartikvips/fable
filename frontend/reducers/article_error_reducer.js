// import {
//     RECEIVE_CURRENT_USER,
//     RECEIVE_SESSION_ERRORS
// } from '../actions/session_actions';

// const ArticleErrorsReducer = (state = [], action) => {
//     Object.freeze(state);
//     switch (action.type) {
//         case RECEIVE_CURRENT_USER:
//             return [];
//         case RECEIVE_SESSION_ERRORS:
//             return action.errors.responseJSON;
//         case CLEAR_ERRORS:
//             return [];
//         default:
//             return state;
//     }
// };

// export default ArticleErrorsReducer;