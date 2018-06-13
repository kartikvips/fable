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
                            {article.body}
                        </div>
                    
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
            );
        }
        
        // const article = this.props.article;
        // if (!article) {
        //     return (<div>Loading...</div>);
        // } else {
        //     let edit;
        //     if (!!this.props.currentUser) {
        //         edit = this.props.currentUser.id == article.author_id ? <Link className='edit' to={`/api/stories/${article.id}/edit`}>Edit</Link> : null;
        //     }
        //     const storyPs = article.body.split('\n').map((p, i) => <p key={i}>{p}</p>);
        //     const body = () => ({ __html: article.body });
        //     return (
        //         <div>
        //             <article className='article'>
        //                 <div className='article-user'>
        //                     <div className='article-avatar'>
        //                         <img
        //                             src={article.avatar_url}
        //                             className='article-avatar-img'
        //                         ></img>
        //                     </div>
        //                     <div className='author-info'>
        //                         <div className='author-name'>
        //                             <h5>{article.author_name}</h5>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className='section-figure'>
        //                     <img src={article.image_url} />
        //                 </div>
        //                 <div className='article-div'>
        //                     <section className='section'>
        //                         <div className='section-content'>
        //                             <div className='section-title'>
        //                                 <h1>{article.title}</h1>
        //                             </div>
        //                         </div>
        //                     </section>
        //                     <section className='section'>
        //                         <div className='section-content'>
        //                             <div className='section-inner'>
        //                                 <div dangerouslySetInnerHTML={body()}>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                     </section>
        //                 </div>
        //             </article>
        //             <div className='comment'>
        //                 <div className='c-f-div'>
        //                     <CommentFormContainer />
        //                     <CommentIndexContainer />
        //                 </div>
        //             </div>
        //         </div>
        //     );
        // }
    }
}

export default ArticleShow;