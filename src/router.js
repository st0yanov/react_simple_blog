import React from "react";
import { Router, Route, IndexRoute } from "react-router";
import { history } from "./store.js";
import App from "./components/App";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Post from "./components/Post";
import PostEdit from "./components/PostEdit";
import NotFound from "./components/NotFound";

// build the router
const router = (
  <Router onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="post/:id" component={Post}/>
      <Route path="posts" component={Posts}/>
      <Route path="posts/new" component={PostEdit}/>
      <Route path="post/:id/edit" component={PostEdit}/>
      <Route path="*" component={NotFound}/>
    </Route>
  </Router>
);

// export
export { router };
