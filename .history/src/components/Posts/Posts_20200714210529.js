import React from "react";
import Post from "./Post";
import "./Posts.css";

const Posts = (props) => {
  const { likePost, posts } = props;
  
  return (
    <div className="posts-container-wrapper">
      {
        posts.map((element) => <Post post={element)
      }
      <Post 
        post={posts[0]}
        likePost={ likePost }/>
      <Post
        post={posts[1]}
        likePost={ likePost }/>
    </div>
  );
};

export default Posts;
