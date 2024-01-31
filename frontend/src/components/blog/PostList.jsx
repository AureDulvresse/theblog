/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const PostList = ({ post }) => {
  return (
    <>
      <div className="shadow">
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
      </div>
    </>
  );
};

export default PostList;
