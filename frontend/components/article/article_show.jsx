import React from 'react';
import { withrouter } from 'react-router';
import { Link } from 'react-router-dom';
import CommentFormContainer from '../comment/comment_form_container';
import CommentIndexContainer from '../comment/comment_index_container';

class ArticleShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.getArticle(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.props.getArticle(nextProps.match.params.id);
        }
    }

    render() {
        // debugger;
        // if(!!this.props.currentUser){
        //     return (<div>Hello {this.props.currentUser.firstname}</div>);
        // }else{
        //     return (<div>Hello </div>);
        // }
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; 


        const article = this.props.article;
        if(!article){
            return (<div>Loading...</div>);
        }else{
            return(
                <div className = "article-show">
                    <img className="article-show-img" src={article.img_url}/>
                    <div className="article-body">
                        <div className = "article-header">
                            <h3 className = "article-title">{article.title}</h3>
                            <p className="article-hook">{article.hook}
                            </p>
                            <div className = "article-author">
                                <img className = "article-author-avatar" src = {article.userImgUrl} />
                                <div className = "article-author-info">
                                    <Link to={`/users/${article.user_id}`}><p className = "article-author-name">{article.user_firstname} {article.user_lastname}</p></Link>
                                    <p className = "article-date">{months[article.month-1]} {article.day}</p>
                                </div>
                            </div>
                        </div>
                        <div className="article-article">
                            <table>
                                <tbody>
                                    <tr>
                                        <td dangerouslySetInnerHTML={{ __html: article.body }} />
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="comment-form-label">        <span>Responses</span>
                            <div className="comments-div">
                                <div className="comments-form-div">
                                    <CommentFormContainer />                       
                                </div>
                                <div className="comemnts-view-div">
                                    <CommentIndexContainer />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
     
    }
}

export default ArticleShow;