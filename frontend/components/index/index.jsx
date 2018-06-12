import React from 'react';
// import StoryIndexItem from './story_index_item';
import TopContainer from './top_container';
import BottomContainer from './bottom_container';
import { Link } from 'react-router-dom';


class Index extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getArticles();
    }

    render() {
        const topArts = this.props.articles.slice(0,5);
        
        // const articles = this.props.articles.map((article, i) => {
        //     return (
        //         <ArticleIndexItem
        //             key={article.id}
        //             article={article}
        //             deleteArticle={this.props.deleteArticle}
        //         />
        //     );
        // });
        // debugger;
        // const articles = this.props.articles.slice(5).map((article, i) => {
        //     return (
        //             <ul key= {i} className = 'index-list'>
        //                 <li>{article.id}</li>
        //                 <li>{article.title}</li>
        //                 <li>{article.hook}</li>
        //                 <img src = {article.img_url}/>
        //             </ul>
        //     );
        // });
        // debugger;
        return (
            <div className='article-index-list'>
                <TopContainer articles={topArts} />
                <BottomContainer articles={this.props.articles} />

                {/* {articles} */}
            </div>
        
        );
    }
}

export default Index;