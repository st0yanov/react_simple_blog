import {combineReducers} from "redux";
import {routerReducer} from "react-router-redux";
import {reducer as formReducer} from "redux-form";
import posts from "./posts";
import filtered_posts from "./filtered_posts";

// main reducers
export const reducers = combineReducers({
    routing: routerReducer,
    form: formReducer,
    posts: posts,
    filtered_posts: filtered_posts,
});
