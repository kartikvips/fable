import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import ReactQuill from 'react-quill';

class ArticleNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '', body: "", user_id: this.props.currentUser.id
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    update(field) {
        return e => {
            this.setState({
                [field]: e.target.value
            });
        };
    }
    
    handleChange(value) {
        this.setState({ body: value });
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
        // const comment = this.state;
        // this.props.createComment(comment);
        // this.setState({ body: '' });
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
        // let image, name;
        // if (!this.props.currentUser) {
        //     return (<div></div>);
        // } else {
        //     image = this.props.currentUser.img_url;
        //     name = `${this.props.currentUser.firstname} ${this.props.currentUser.lastname}`;
        // }
        // return (

        //     <div className='comment-form'>
        //         <div className='comment-author'>

        //             <img className='comment-user-img' src={image} ></img>
        //             <div className='comment-author-name'>
        //                 <p className="author-name-com">{name}</p>
        //             </div>
        //         </div>
        //         {/* {this.renderErrors()} */}
        //         <form className="comment-form-form" onSubmit={this.handleSubmit}>
        //             <textarea className="comment-textarea"
        //                 value={this.state.body}
        //                 onChange={this.update('body')}
        //             />
        //             <br />
        //             <input className="comment-submit"
        //                 type='submit'
        //                 value='Publish'
        //             />
        //         </form>
        //     </div>

        // );
        return(
            <div className="editor">
                <input type="text"
                    value={this.state.title}
                    onChange={this.update('title')}
                    className="editor-title"
                    placeholder="Title"
                />
                Hello WORLD!
                
                <ReactQuill theme = "bubble" value={this.state.body}
                    onChange={this.handleChange} />
            
            </div>
        );
    }
}

export default withRouter(ArticleNew);