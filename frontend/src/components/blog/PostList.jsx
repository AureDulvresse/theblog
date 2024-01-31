/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const PostList = ({ post }) => {
  return (
    <>
      <Link to={"post/" + post.id}>
        <div className="shadow">
          <h3>{post.title}</h3>
          <p>{post.excerpt}</p>
        </div>
      </Link>
    </>
  );
};

export default PostList;
