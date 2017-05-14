import React, {PropTypes} from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router";

export default class PostListElement extends React.Component {
  render() {
    const post = this.props.post;
    const post_content = this.limit_content(post.text, 150);

    return (
      <div>
        <Row><h3><Link to={'/post/' + post.id}>{post.title}</Link> <small>{post.author}</small></h3></Row>
        <Row><strong>Дата:</strong> {post.created_at}</Row>
        <Row>{post_content}</Row>
      </div>
    );
  }

  limit_content(content, limit) {
    let limited_content;

    if(content.length > limit) {
      limited_content = content.substring(0, limit) + "...";
    } else {
      limited_content = content;
    }

    return limited_content;
  }
}

PostListElement.PropTypes = {
  post: PropTypes.object.isRequired,
}
