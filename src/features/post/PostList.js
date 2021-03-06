import { useSelector } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";

const PostList = () => {
  const posts = useSelector((state) => state.posts);
  const renderedPosts = posts.map((post) => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content}</p>
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  ));
  console.log(renderedPosts);
  return (
    <section className="posts-list">
      <h2>POSTS</h2>
      {renderedPosts}
    </section>
  );
};

export default PostList;
