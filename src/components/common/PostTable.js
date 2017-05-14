import React from "react";
import {Table, Pagination} from "react-bootstrap";
import {connect} from "react-redux";
import {push} from "react-router-redux";
import PostTableElement from "./PostTableElement";
import PostDeletePrompt from "./PostDeletePrompt";

export class PostTable extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            delete_show: false,
            delete_post: {},
        };

        this.changePage = this.changePage.bind(this);
        this.showDelete = this.showDelete.bind(this);
        this.hideDelete = this.hideDelete.bind(this);
        this.postDelete = this.postDelete.bind(this);
    }

    render() {
        const {posts, page} = this.props;
        const per_page = 10;
        const pages = Math.ceil(posts.length / per_page);
        const start_offset = (page - 1) * per_page;
        let start_count = 0;

        return (
            <div>
                <Table responsive>
                    <thead>
                    <tr>
                        <th>№</th>
                        <th>Заглавие</th>
                        <th>Автор</th>
                        <th>Статус</th>
                        <th>Редактиране</th>
                        <th>Изтриване</th>
                    </tr>
                    </thead>
                    <tbody>
                    {posts.map((post, index) => {
                        if (index >= start_offset && start_count < per_page) {
                            start_count++;
                            return (
                                <PostTableElement key={index} post={post} showDelete={this.showDelete}/>
                            );
                        }
                    })}
                    </tbody>
                </Table>
                <Pagination className="posts-pagination pull-right" bsSize="medium" maxButtons={10} first last next prev
                            boundaryLinks items={pages} activePage={page} onSelect={this.changePage}/>
                <PostDeletePrompt show={this.state.delete_show} post={this.state.delete_post}
                                  hideDelete={this.hideDelete} postDelete={this.postDelete}/>
            </div>
        );
    }

    changePage(page) {
        this.props.dispatch(push('/posts/?page=' + page));
    }

    showDelete(post) {
        this.setState({
            delete_show: true,
            delete_post: post,
        });
    }

    hideDelete() {
        this.setState({
            delete_show: false,
            delete_post: {},
        });
    }

    postDelete() {
        this.props.dispatch({
            type: 'POSTS_DELETE',
            post_id: this.state.delete_post.id,
        });

        this.hideDelete();
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts,
        page: Number(state.routing.locationBeforeTransitions.query.page) || 1,
    };
}

export default connect(mapStateToProps)(PostTable);
