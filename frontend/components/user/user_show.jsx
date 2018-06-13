import React from 'react';
import { withrouter } from 'react-router';
import { Link } from 'react-router-dom';

// import CommentFormContainer from '../comment/comment_form_container';
// import CommentIndexContainer from '../comment/comment_index_container';

class UserShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.props.getUser(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.props.getUser(nextProps.match.params.id);
        }
    }

    render() {
        // debugger;

        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const monthsFull = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octtober", "November", "December"];
      
     

        if(!!this.props.user){
                const articles = this.props.user.articles.map((article, i) => {
                    return (
                        <div className="profile-article-holder" key={article.id}>
                            <div className="profile-profile-div">
                                <Link to={`/users/${this.props.user.id}`}><img className="profile-article-img" src={this.props.user.img_url} />
                                </Link>
                                <div className="profile-article-info">
                                    <Link to={`/users/${this.props.user.id}`}><p className="profile-author">{this.props.user.firstname} {this.props.user.lastname}</p></Link>

                                    <p className="date">{months[article.month - 1]} {article.day}</p>
                                </div>
                            </div>
                            <Link to={`/articles/${article.id}`}><img className="profile-article-image" src={article.img_url} />
                            </Link>

                                <Link to={`/articles/${article.id}`}><p className="profile-article-title">{article.title}</p>       
                                <p className="profile-article-hook">{article.hook.slice(0, 65)}...</p>
                                </Link>


                        </div>
                    );
                });
                return (
                <div className="profile">
                    <div className = "profile-header">
                        <div className = "profile-header-info">
                            <h1 className="profile-name">{this.props.user.firstname} {this.props.user.lastname}</h1>
                            <p className="member-since">fable member since {monthsFull[this.props.user.month+1]} {this.props.user.year}</p>
                        </div>
                        <img className="profile-main-picture" src={this.props.user.img_url}/>
                    </div>
                    {articles}

                </div>);
            
        } else {
            return(<div>Loading...</div>);
        }




        // const user = this.props.user;

        // return (
        //     <div>Hello {this.props.currentUser.firstname}</div>
        // )

        // if (!user) {
        //     return (<div>Loading...</div>);
        // } else {
        //     return (
        //         <div className="article-show">
        //             <img className="article-show-img" src={article.img_url} />
        //             <div className="article-body">
        //                 <div className="article-header">
        //                     <h3 className="article-title">{article.title}</h3>
        //                     <p className="article-hook">{article.hook}
        //                     </p>
        //                     <div className="article-author">
        //                         <img className="article-author-avatar" src={article.userImgUrl} />
        //                         <div className="article-author-info">
        //                             <p className="article-author-name">{article.user_firstname} {article.user_lastname}</p>
        //                             <p className="article-date">{months[article.month + 1]} {article.day}</p>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div className="article-article">
        //                     {article.body}
        //                 </div>
        //             </div>
        //         </div>
        //     );
        // }

    }
}

export default UserShow;