import React from 'react';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchComments();
    }

    render() {
        
        const comments = this.props.comments.reverse().map((comment, i) => {

            return (
                <CommentIndexItem
                    key={comment.id}
                    comment={comment}
                />
            );
        });
        // debugger;
        return (
            <div className='comment-container'>
                {comments}
            </div>
        );
    }
}

export default CommentIndex;