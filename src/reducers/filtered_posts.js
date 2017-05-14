export default function filtered_posts(state = {}, action) {
    switch (action.type) {
        case 'FILTERED_POSTS_FILTER_BY_STATUS':
            if(!action.status || action.status === "") return action.posts;
            return action.posts.filter(post =>
                post.status === action.status
            );
        default:
            return state;
    }
}
