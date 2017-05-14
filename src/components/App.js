import React from "react";
import {connect} from "react-redux";
import Menu from "./common/Menu";
import "../stylesheets/main.scss";

// app component
export class App extends React.Component {
    componentWillMount() {
        this.props.dispatch({type: 'POSTS_FETCH_LIST'});
        this.props.dispatch({type: 'FILTERED_POSTS_FILTER_BY_STATUS', posts: []});
    }

    render() {
        return (
            <div className="container">
                <div>
                    <Menu/>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts || [],
        filtered_posts: state.posts || [],
    };
}
export default connect(mapStateToProps)(App);
