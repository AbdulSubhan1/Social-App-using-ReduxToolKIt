import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
  { id: "1", title: "First Post!", content: "Hello" },
  { id: "2", title: "Second Post!", content: "More Text" }
];
const postsSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content) {
        return {
          payload: {
            id: nanoid(),
            title,
            content
          }
        };
      }
    },
    updatePost(state, action) {
      console.log("update payload", action.payload);
      const { id, title, content } = action.payload;
      console.log(id);
      const existingPost = state.find((post) => post.id === id);
      console.log("finded post", existingPost.id);

      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    }
  }
});

export const { addPost, updatePost } = postsSlice.actions;

export default postsSlice.reducer;
