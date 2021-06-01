import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/post/postSlice";
export default configureStore({
  reducer: {
    posts: postsReducer
  }
});
