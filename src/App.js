import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { Navbar } from "./app/Navbar";
import AddPostForm from "./features/post/AddPostForm";
import EditPostForm from "./features/post/EditPostForm";
import PostList from "./features/post/PostList";
import { SinglePostPage } from "./features/post/SinglePostPage";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                <AddPostForm />
                <PostList />
              </React.Fragment>
            )}
          />
          <Route path="/posts/:postId" component={SinglePostPage} />
          <Route path="/editPost/:postId" component={EditPostForm} />
          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
