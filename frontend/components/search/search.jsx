import { fetchSearchResults } from '../../util/search_api_util';
import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            articles: [],
            text: ""           
        };     
        this.users = this.state.users;
        this.articles = this.state.articles;
        this.handleQuery = this.handleQuery.bind(this);
    }

    handleQuery(e){
        this.setState({text: e.target.value, users: [], articles: []});
        let article;
        let user;

        const setState = (val) => {
            this.setState(val);
        };
        if(!!e.target.value){
            fetchSearchResults(e.target.value).then(res => {
    
                if(!!res.articles){
                    setState({articles: Object.values(res.articles)});
                }
                if(!!res.users){
                    setState({users: Object.values(res.users)});
                }      
            });
        }
    }


    render(){
        let usersDiv;
        let articlesDiv;
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        // debugger;
        if (this.state.users.length > 0) {
            usersDiv = this.state.users.map((user, i) => {
                return (
                    <div className="users-results" key={i}>
                        <div className="article-author">
                            <Link to={`/users/${user.id}`}><img className="article-author-avatar" src={user.img_url} /></Link>
                            <div className="article-author-info">
                                <Link to={`/users/${user.id}`}><p className="article-author-name">{user.firstname} {user.lastname}</p></Link>
                            </div>
                        </div>
                    </div>
                );
            }); 
        } else {
            usersDiv = <div></div>
            ;
        }

        if (this.state.articles.length > 0) {
            articlesDiv = this.state.articles.map((article, i) => {
                return (
                    <div className="articles-results bottom-mid-each" key={article.id}>
                        <div className="mid-arts">
                            <Link to={`/articles/${article.id}`}><p className="bottom-mid-title">{article.title}</p>
                                <p className="index-mid-hook">{article.hook.slice(0, 80)}...</p></Link>
                            <Link to={`/users/${article.user_id}`}><p className="index-author">{article.user_firstname} {article.user_lastname}</p></Link>
                            <p className="date">{months[article.month - 1]} {article.day}</p>
                        </div>
                        <Link to={`/articles/${article.id}`}><img src={article.img_url} /></Link>
                    </div>
                );
            });
        } else {
            articlesDiv = <div></div>;
        }

        // const articlesDiv = () => {
        //     if (!!this.state.articles.length > 0) {
        //         const articles = this.state.articles;
        //         return (
        //             <div className="articles-results">
        //                 Hello articles!
        //             </div>
        //         );
        //     } else {
        //         return (
        //             <div></div>
        //         );
        //     }
        // };
    


        return (
            <div className="search-body">
                <input type="text"
                    value={this.state.text}
                    onChange={this.handleQuery}
                    className="search-box"
                    placeholder="Search fable"
                />
                <div className ="search-results">
                    <div className="article-search-results">
                        {/* <h2 className = "article-search-title"></h2> */}
                        {articlesDiv}
                    </div>
                    <div className="users-search-results">
                        {usersDiv}
                    </div>
                    
                </div>



            </div>
        );
    }
}

export default Search;