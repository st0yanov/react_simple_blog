import { call, put } from "redux-saga/effects";

export function* postsFetchList(action) {
  let posts = [];
  for (let x = 1; x <= 28; x++) {
    posts.push({
      id: x,
      title: 'Blog Post ' + x,
      author: 'Author ' + x,
      status: (x % 2 == 0) ? 'activated' : 'deactivated',
      created_at: '2017-01-' + String("0" + x).slice(-2),
      text: 'Lorem ipsum dolor ' + x,
      tags: 'test,blog,post,hardcoded',
      image: 'https://unsplash.it/800/300/?random'
    });
  }

  yield put({
    type: 'POSTS_LIST',
    posts: posts,
  });
}

export function* postsAddEdit(action) {
    yield put({
        type: action.post.id ? 'POSTS_EDIT_SAVE' : 'POSTS_ADD_SAVE',
        post: action.post,
    });

    action.callbackSuccess();
}

export function* postsDelete(action) {
    yield put({
        type: 'POSTS_DELETE_SAVE',
        post_id: action.post_id,
    });
}

export function* postsFilterByStatus(action) {
    yield put({
        type: 'FILTERED_POSTS_FILTER_BY_STATUS',
        posts: action.posts,
        status: action.status,
    });
}
