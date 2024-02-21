// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import Post from "./Post";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const PostList = ({ currentFilter }) => {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    getPosts(currentFilter);
  }, []);

  let getPosts = async (currentFilter) => {
    let url = "http://localhost:8000/blog/";

    currentFilter == "all"
      ? url.concat(currentFilter)
      : url.concat("post/categories/" + currentFilter);

    console.log(currentFilter);

    let response = await axios.get(url);
    let data = await response.data;
    setposts(data);
    console.log(url);
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
