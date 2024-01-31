/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  return (
    <>
      <div className="shadow px-2 py-3 w-60 mt-3 mb-1">
        <div className="rounded p-relative object-cover">
          <img
            src={post.thumbnail}
            className="w-100 h-100 p-absolute"
            alt="img-post"
          />
        </div>

        <div className="mb-2">
          <h3 className="text-green-400 font-semibold">{post.title}</h3>
          <p>{post.excerpt}</p>
        </div>

        <Link
          to={"post/" + post.id}
          className="rounded mt-1 px-3 py-2 text-white bg-green-500 focus:bg-green-500 hover:bg-green-400 hover:scale-50"
        >
          Read Post
        </Link>
      </div>
    </>
  );
};

export default Post;
