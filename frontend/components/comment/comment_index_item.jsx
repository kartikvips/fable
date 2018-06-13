import React from 'react';
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CommentIndexItem = ({ comment, router, history }) => {
    // debugger;
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; 
    return (
        <div className='comment-comments'>
            <div className='comment-author-info'>
                <div className="comment-author-names">
                    <Link to={`/users/${comment.user_id}`}><img className='comment-user-img' src={comment.comment_url}></img></Link>
                </div>
                <div className='comment-author-name'>
                    <Link to={`/users/${comment.user_id}`}><p className="author-name-com">{comment.user_firstname} {comment.user_lastname}</p></Link>
                    <p className = "comment-date">{months[comment.month-1]} {comment.day}</p>
                </div>
            </div>
            <div className='comment-body'>
                {comment.body}
            </div>
        </div>
    );
};

export default withRouter(CommentIndexItem);