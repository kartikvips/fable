import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const TopContainer = ({ articles }) => {
    // debugger;
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]; 

    if(articles.length > 0){
        const first = articles.slice(0, 1).map((article, i) => {
            return (
                <div className = "top-left" key={article.id}>
                    <Link to={`/articles/${article.id}`}><img src={article.img_url} />
                    </Link>
                    <div className ="left-art">
                        <Link to={`/articles/${article.id}`}>
                        <p className = "index-title">{article.title}</p>
                        <p className = "index-hook">{article.hook}...</p></Link>
                        <p className = "index-author">{article.user_firstname} {article.user_lastname}</p>
                        <p className = "date">{months[article.month-1]} {article.day}</p>
                    </div>
                </div>
            );
        });
        // const seconds = articles.slice(1,4);

        const seconds = articles.slice(1,4).map((article, i) => {
            return (
                <div className = "top-mid-each" key = {article.id}>
                    <Link to={`/articles/${article.id}`}><img src={article.img_url} />
                    </Link>
                    <div className = "mid-arts">
                        <Link to={`/articles/${article.id}`}><p className="mid-title">{article.title}</p>       <p className = "index-mid-hook">{article.hook.slice(0,40)}...</p>
                        </Link>
                        <p className = "index-author">{article.user_firstname} {article.user_lastname}</p>
                        <p className = "date">{months[article.month-1]} {article.day}</p>
                    </div>
                </div>
            );
        });

        const third = articles.slice(4, 5).map((article, i) => {
            return (
                <div className="top-right" key={article.id}>
                    <Link to={`/articles/${article.id}`}><img src={article.img_url} /></Link>
                    <div className="right-art">
                        <Link to={`/articles/${article.id}`}><p className="index-title">{article.title}</p>
                        <p className="index-hook">{article.hook.slice(0,50)}...</p></Link>
                        <p className="index-author">{article.user_firstname} {article.user_lastname}</p>
                        <p className="date">{months[article.month - 1]} {article.day}</p>
                    </div>
                </div>
            );
        });

        return (
        <div className= "top-index">
            {first}
            <div className = "top-mid">
                {seconds}
            </div>
            {third}
        </div>);
    }
    return (<div>Loading...</div>);
};


export default TopContainer;