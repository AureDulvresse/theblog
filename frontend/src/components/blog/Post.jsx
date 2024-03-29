/* eslint-disable react/prop-types */
import axios from "axios";
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const now = new Date();
  const updated_date = new Date(post.updated_at);
  let dateAgo = now - updated_date;
  dateAgo = Math.floor(dateAgo / 86400000);

  const [postCategory, setPostCategory] = useState({});

  useEffect(() => {
    getPostCategory();
  });

  const url = "http://localhost:8000/blog/categories/".concat(post.category_id);

  const getPostCategory = async () => {
    let response = await axios.get(url);
    setPostCategory(response.data);
  };

  return (
    <>
      <div className="px-2 py-3 w-60 mt-3 mb-1 shadow-md rounded flex justify-between items-start flex-col">
        <div className="rounded relative w-full h-40">
          <img
            src={post.thumbnail}
            className="rounded w-full h-full absolute object-cover"
            alt="img-post"
          />
        </div>

        <div className="mb-2">
          <h5 className="text-sm text-green-400 font-light italic">
            {postCategory.name}
          </h5>
          <h3 className="text-green-400 font-semibold">{post.title}</h3>
          <p className="text-black">{post.excerpt}</p>
          <p className=" text-sm text-slate-400 font-normal">
            Dernière mise à jour :{" "}
            {dateAgo == 0 ? "aujourd'hui" : dateAgo.toString().concat(" jours")}
          </p>
        </div>

        <Link
          to={"post/" + post.id}
          className="rounded mt-1 px-3 py-2 text-white bg-green-500 focus:bg-green-500 hover:bg-green-400 hover:scale-110"
        >
          Read Post
        </Link>
      </div>
    </>
  );
};

export default Post;
