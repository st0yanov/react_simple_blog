import React, { PropTypes } from "react";
import { Modal, Button } from "react-bootstrap";

export default class PostDeletePrompt extends React.Component {
    render() {
        const {show, post, hideDelete, postDelete} = this.props;
        return (
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>
                        Сигурен ли си, че искаш да изтриеш пост <strong>{post.title}</strong>?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button onClick={hideDelete}>Не</Button>
                    <Button bsStyle="primary" onClick={postDelete}>Да</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

// prop checks
PostDeletePrompt.propTypes = {
    show: PropTypes.bool.isRequired,
    post: PropTypes.object.isRequired,
    hideDelete: PropTypes.func.isRequired,
    postDelete: PropTypes.func.isRequired,
}
