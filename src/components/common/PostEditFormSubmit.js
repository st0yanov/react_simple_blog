import React from "react";
import { FormGroup, Button } from "react-bootstrap";
import { connect } from "react-redux";

export class PostEditFormSubmit extends React.Component {
    render() {
        const {error, submitting} = this.props;

        return (
            <FormGroup className="submit">
                <Button type="submit" bsStyle="primary" disabled={submitting}>Save</Button>
            </FormGroup>
        );
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
    };
};

export default connect(mapStateToProps)(PostEditFormSubmit);