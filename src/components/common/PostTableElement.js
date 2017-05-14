import React, { PropTypes } from "react";
import { Link } from "react-router";
import { Button, Glyphicon } from "react-bootstrap";

export default class PostTableElement extends React.Component{
  render() {
    const {post, showDelete} = this.props;

    return (
      <tr>
        <td>{post.id}</td>
        <td><Link to={'post/' + post.id}>{post.title}</Link></td>
        <td>{post.author}</td>
        <td>{post.status}</td>
        <td>
          <Link to={'post/' + post.id + '/edit'}>
            <Button bsSize="xsmall">
              Edit <Glyphicon glyph="edit"/>
            </Button>
          </Link>
        </td>
        <td>
          <Button bsSize="xsmall" className="post-delete" onClick={() => showDelete(post)}>
            Delete <Glyphicon glyph="remove-circle"/>
          </Button>
        </td>
      </tr>
    );
  }
}

// prop checks
PostTableElement.propTypes = {
  post: PropTypes.object.isRequired,
}
