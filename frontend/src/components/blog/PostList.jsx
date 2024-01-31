// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Post from "./Post";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const PostList = ({ filter }) => {
  const [posts, setposts] = useState([]);

  let url;

  useEffect(() => {
    getPosts();
  }, []);

  if (filter == 0) {
    url = "http://localhost:8000/blog/";
  } else {
    url = "http://localhost:8000/blog/" + filter;
  }

  let getPosts = async () => {
    let response = await axios.get(url);
    let data = await response.data;
    setposts(data);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </>
  );
};

export default PostList;
