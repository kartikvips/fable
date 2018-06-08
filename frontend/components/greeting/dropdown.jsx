import React from "react";
import { Link } from "react-router-dom";

export default class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = { listVisible: false };
        this.hide = this.hide.bind(this);
        this.show = this.show.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        if (this.state.listVisible === true) {
            this.hide();
        } else {
            this.show();
        }
    }

    show() {
        this.setState({ listVisible: true });
    }

    hide() {
        document.querySelector(".menuWrapper");
        this.setState({ listVisible: false });
    }

    shouldComponentUpdate(nextSate) {
        return this.state.listVisible === nextSate.listVisible ? false : true;
    }

    render() {
        const contents = this.state.listVisible ? (
            <div className="listContainer">
                <div className="dropdown-list menuWrapper">
                    {/* <Link to="/upload" className="uploadButton header__dropdown">
                        <span className="uploadButton__title">Upload</span>
                    </Link>
                    <Link to="/create" className="playlistButton header__dropdown">
                        <span className="uploadButton__title">Create Playlist</span>
                    </Link> */}
                </div>{" "}
            </div>
        ) : (
                <div />
            );
        return (
            <div
                className={
                    "dropdown-container" + (this.state.listVisible ? " show" : "")
                }
                onClick={this.handleClick}
            >
                <div
                    className={"plus" + (this.state.listVisible ? " clicked" : "")}
                    onClick={this.show}
                >
                    <i className="fa fa-plus" />
                    {contents}
                </div>
            </div>
        );
    }
}