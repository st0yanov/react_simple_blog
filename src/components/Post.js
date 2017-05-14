import React from "react";
import {connect} from "react-redux";
import {PageHeader, Row, Image, Badge} from "react-bootstrap";

export class Post extends React.Component {
    render() {
        const post = this.props.post;
        const tags = post.tags.split(',');

        return (
            <div>
                <PageHeader>{post.title}<br/>
                    <small>{post.created_at}</small>
                </PageHeader>

                <Row>
                    <Image src={post.image} className="center-block" thumbnail/>
                </Row>

                <hr/>

                <Row>{post.text}</Row>

                <hr/>

                <Row>
                    <strong>Тагове: </strong>
                    {tags.map((tag, index) => {
                        return (
                            <Badge key={index}>{tag}</Badge>
                        );
                    })}
                </Row>

            </div>

        );
    }
}

function mapStateToProps(state, own_props) {
    const post = state.posts.find(x => Number(x.id) === Number(own_props.params.id)) || {};
    return {
        post: post,
    };
}

export default connect(mapStateToProps)(Post);
