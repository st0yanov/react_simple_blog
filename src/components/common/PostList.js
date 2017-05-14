import React from "react";
import {connect} from "react-redux";
import PostListElement from "./PostListElement";
import { FormGroup, ControlLabel, FormControl } from "react-bootstrap";

export class PostList extends React.Component {
    constructor(props) {
        super(props);

        this.filterByStatus = this.filterByStatus.bind(this);
    }

    componentWillMount() {
        this.props.dispatch({type: 'FILTERED_POSTS_FILTER_BY_STATUS', posts: this.props.posts});
    }

    render() {
        let filtered_posts = this.props.filtered_posts;
        let sorted_posts = filtered_posts.slice();
        sorted_posts.sort((a, b) => new Date(...b.created_at.split('-')) - new Date(...a.created_at.split('-')));

        let limited_posts = sorted_posts.slice(0, 15);

        return (
            <div>
                <FormGroup controlId="formControlsSelect">
                    <ControlLabel>Филтрирай по:</ControlLabel>
                    <FormControl componentClass="select" placeholder="избери..." onChange={this.filterByStatus}>
                        <option value="">всички</option>
                        <option value="activated">активирани</option>
                        <option value="deactivated">неактивирани</option>
                    </FormControl>
                </FormGroup>

                {limited_posts.map((post, index) => {
                    return (
                        <PostListElement key={index} post={post}/>
                    );
                })}
            </div>
        );
    }

    filterByStatus(e) {
        this.props.dispatch({
            type: 'POSTS_FILTER_BY_STATUS',
            posts: this.props.posts,
            status: e.target.value,
        });
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
        filtered_posts: state.filtered_posts,
    };
}

export default connect(mapStateToProps)(PostList);
