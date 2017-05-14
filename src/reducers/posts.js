export default function posts(state = {}, action) {
    switch (action.type) {
        case 'POSTS_LIST':
            return action.posts;

        case 'POSTS_ADD_SAVE':
            const post = action.post;
            post.id = post.id || Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
            return [...state, post];

        case 'POSTS_EDIT_SAVE':
            return state.map(post =>
                Number(post.id) === Number(action.post.id) ? {...action.post} : post
            );
        case 'POSTS_DELETE_SAVE':
            return state.filter(post =>
                Number(post.id) !== Number(action.post_id)
            );
        default:
            return state;
    }
}
