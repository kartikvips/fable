import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import ReactQuill from 'react-quill';


class ArticleNew extends React.Component {
    constructor(props) {
        super(props);
      
        this.state = {
            title: '', body: "", hook: "", img_url: ''
        };
        this.errors = "";
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
       
    }

    update(field) {
        if(this.state.title !== "" && this.state.body !== "" && this.state.hook !== "" && this.state.img_url !== ""){
            this.errors = "";
        }
        return e => {
            this.setState({
                [field]: e.target.value
            });
        };
    }

    handleChange(value) {
        if (this.state.title !== "" && this.state.body !== "" && this.state.hook !== "" && this.state.img_url !== "") {
            this.errors = "";
        }
        this.setState({ body: value });
    }

    

    componentWillUnmount() {
        // if (this.props.errors) {
        //     this.props.clearErrors(this.props.errors);
        // }
    }

    handleSubmit(e) {
        const article = this.state;

        // const setState = (val) => {
        //     this.setState(val);
        
        this.props.createArticle({article})
        .then(
            (res => this.props.history.push(`/articles/${res.article.id}`)) );
        this.errors = "Article fields cannot be empty.";
        this.render();
    }

    renderErrors(errors) {
        debugger;
        return (
            <div className="article-errors">
              {errors}
            </div>
        );
    }

    render() {
    //    debugger;
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
                        <div className = "article-errors-div">
                            {this.renderErrors(this.errors)}
                            <input className="article-submit-button"
                                type='submit'
                                value='Publish'
                                onClick = {this.handleSubmit}
                            />
                        </div>
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