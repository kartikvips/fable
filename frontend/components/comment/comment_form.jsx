import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: '', article_id: this.props.match.params.id
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.target.value
            });
        };
    }

    componentWillUnmount() {
        // if (this.props.errors) {
        //     this.props.clearErrors(this.props.errors);
        // }
    }

    handleSubmit(e) {
        e.preventDefault();
        // if (!this.props.currentUser) {
        //     return <Redirect to='/login' />;
        // }
        const comment = this.state;
        this.props.createComment(comment);
        this.setState({ body: '' });
    }

    // renderErrors() {
    //     return (
    //         <ul>
    //             {this.props.errors.map((error, i) => (
    //                 <li
    //                     className='error'
    //                     key={`error-${i}`}>
    //                     {error}
    //                 </li>
    //             ))}
    //         </ul>
    //     );
    // }

    render() {
        let image, name;
        if (!this.props.currentUser) {
            return(<div></div>);
        } else {
            image = this.props.currentUser.img_url;
            name = `${this.props.currentUser.firstname} ${this.props.currentUser.lastname}`;
        }
        return (
            <div className="comment-form-label"><span>Responses</span>
                <div className='comment-form'>
                    <div className='comment-author'>
                        
                        <img className='comment-user-img' src={image} ></img>
                        <div className='comment-author-name'>
                            <p className="author-name-com">{name}</p>
                        </div>
                    </div>
                    {/* {this.renderErrors()} */}
                    <form className = "comment-form-form" onSubmit={this.handleSubmit}>
                        <textarea className = "comment-textarea"
                            value={this.state.body}
                            onChange={this.update('body')}
                        />
                        <br />
                        <input className="comment-submit"
                            type='submit'
                            value='Publish'
                        />
                    </form>
                </div>
            </div>
        );
    }
}

export default withRouter(CommentForm);