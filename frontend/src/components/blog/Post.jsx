// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import PostList from "./PostList";

const Post = () => {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  let getPosts = async () => {
    let response = await fetch("http://localhost:8000/blog/");
    let data = await response.json();
    console.log(data);
    setposts(data);
  };

  return (
    <>
      {posts.map((post, index) => (
        <PostList key={index} post={post} />
      ))}
    </>
  );
};

export default Post;
