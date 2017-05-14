import React from "react";
import {connect} from "react-redux";
import {PageHeader} from "react-bootstrap";
import PostEditForm from "./common/PostEditForm";
import { SubmissionError } from "redux-form";
import { push } from "react-router-redux";

export class PostEdit extends React.Component {
    constructor(props) {
        super(props);

        // bind <this> to the event method
        this.formSubmit = this.formSubmit.bind(this);
    }

    render() {
        const post = this.props.post;

        return (
            <div>
                <PageHeader>{post.id ? 'Редактирай' : 'Добави'} публикация</PageHeader>
                <PostEditForm post={post} initialValues={post} postEdit={this}/>
            </div>
        );
    }

    formSubmit(values) {
        const {dispatch} = this.props;

        return new Promise((resolve, reject) => {
            dispatch({
                type: 'POSTS_ADD_EDIT',
                post: {
                    id: values.id || 0,
                    title: values.title,
                    author: values.author,
                    text: values.text,
                    tags: values.tags,
                    image: values.image,
                    status: values.status,
                    created_at: values.created_at,
                },
                callbackError: (error) => {
                    reject(new SubmissionError({_error: error}));
                },
                callbackSuccess: () => {
                    dispatch(push('/'));
                    resolve();
                }
            });
        });
    }
}

function mapStateToProps(state, own_props) {
    const post = state.posts.find((x) => Number(x.id) === Number(own_props.params.id)) || {};

    return {
        post: post,
    };
}

export default connect(mapStateToProps)(PostEdit);
