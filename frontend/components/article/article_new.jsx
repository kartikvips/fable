import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import ReactQuill from 'react-quill';


class ArticleNew extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
            title: '', body: "", hook: "", img_url: ''
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
        const article = this.state;
        // debugger;
        this.props.createArticle({article})
        .then(
            res => this.props.history.push(`/articles/${res.article.id}`));
        // this.setState({ body: '', title: '', hook: '', img_url: '' });
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
       
        if(!!this.props.currentUser){
        const user = this.props.currentUser;
            return(
                <div className = "editor-main">
                    <div className = "submit-holder">
                        <div className='editor-author-info'>
                            {/* <div className="editor-author-names"> */}
                                <Link to={`/users/${user.id}`}><img className='editor-user-img' src={user.img_url}/></Link>
                            {/* </div> */}
                            <div className='editor-author-name'>
                                <Link to={`/users/${user.id}`}><p className="editor-username">{user.firstname} {user.lastname}</p></Link>
                                <p className="editor-draftt">Draft</p>
                            </div>
                        </div>
                        <input className="article-submit-button"
                            type='submit'
                            value='Publish'
                            onClick = {this.handleSubmit}
                        />
                    </div>

                    <div className="editor">
                        <input type="text"
                            value={this.state.title}
                            onChange={this.update('title')}
                            className="editor-title"
                            placeholder="Title"
                        />
                        <input type="text"
                            value={this.state.hook}
                            onChange={this.update('hook')}
                            className="editor-hook"
                            placeholder="Hook"
                        />
                        <input type="text"
                            value={this.state.img_url}
                            onChange={this.update('img_url')}
                            className="editor-image"
                            placeholder="Image URL"
                        />
                        
                        <ReactQuill theme = "bubble" 
                                    value={this.state.body}
                                    onChange={this.handleChange} 
                                    placeholder = "Start your fable"
                                    className="editor-body"
                        />
                    
                    </div>
                </div>
            );
        } else {
            return (
                <Redirect to='/' />
            );
        }
    }
}

export default withRouter(ArticleNew);