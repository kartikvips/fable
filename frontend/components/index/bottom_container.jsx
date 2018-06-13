import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const BottomContainer = ({ articles }) => {
    // debugger;
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    if (articles.length > 0) {


        const left = articles.map((article, i) => {
            return (
                <div className="bottom-mid-each" key={article.id}>            
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
        const right = articles.slice(0,4).map((article, i) => {
            return (
                    <div className="bottom-right-each" key={article.id}>    
                        <div className="counter">
                            0{i+1}
                        </div>
                        <div className="bottom-right-arts">
                            <Link to={`/articles/${article.id}`}><p className="bottom-right-title">{article.title}</p></Link>
                            <Link to={`/users/${article.user_id}`}><p className="index-author">{article.user_firstname} {article.user_lastname}</p></Link>
                            <p className="date">{months[article.month - 1]} {article.day}</p>
                        </div>
                    
                    </div>
            );
        });



        return (
            <div className="bottom-index">
             
                <div className="bottom-mid">
                    {left}
                </div>
                <div className="bottom-right">
                    <div className="pop-title">
                        Popular on fable
                    </div>
                    <div className="bottom-right-overall">
                        {right}
                    </div>
                </div>

              
            </div>);
    }
    return (<div></div>);
};


export default BottomContainer;