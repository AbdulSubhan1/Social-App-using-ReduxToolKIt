import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { updatePost } from "./postSlice";

const EditPostForm = ({ match }) => {
  const { postId } = match.params;
  console.log(postId);
  const [title, setTitle] = useState("");
  const [content, setCotent] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setCotent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content) {
      console.log({ id: postId, title, content });
      dispatch(updatePost({ id: postId, title, content }));
      history.push(`/posts/${postId}`);
    }
  };

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
      </form>
      <button type="button" onClick={onSavePostClicked}>
        Save Post
      </button>
    </section>
  );
};
export default EditPostForm;
