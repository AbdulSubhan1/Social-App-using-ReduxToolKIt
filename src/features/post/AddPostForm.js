import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addPost } from "./postSlice";

const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setCotent] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setCotent(e.target.value);

  const dispatch = useDispatch();

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        addPost({
          title,
          content
        })
      );
      setTitle("");
      setCotent("");
    }
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
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
        <button type="button" onClick={onSavePostClicked}>
          Save Post
        </button>
      </form>
    </section>
  );
};

export default AddPostForm;
