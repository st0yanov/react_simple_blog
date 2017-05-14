import {takeLatest} from "redux-saga";
import {fork} from "redux-saga/effects";
import {postsFetchList, postsAddEdit, postsDelete, postsFilterByStatus} from "./posts";

// main saga generators
export function* sagas() {
    yield [
        fork(takeLatest, 'POSTS_FETCH_LIST', postsFetchList),
        fork(takeLatest, 'POSTS_ADD_EDIT', postsAddEdit),
        fork(takeLatest, 'POSTS_DELETE', postsDelete),
        fork(takeLatest, 'POSTS_FILTER_BY_STATUS', postsFilterByStatus),
    ];
}
