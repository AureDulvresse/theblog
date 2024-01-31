// eslint-disable-next-line no-unused-vars
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/blog/navbar";

const ShowPost = () => {
  const { id } = useParams(["id"]);

  const [post, setpost] = useState({});

  useEffect(() => {
    getPost(id);
  }, [id]);

  let getPost = async (id) => {
    let response = await fetch("http://localhost:8000/blog/post/" + id);
    let data = await response.json();
    console.log(data);
    setpost(data);
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 mt-2">
        <h3 className="font-bold">{post.title}</h3>
        <p>{post.excerpt}</p>
      </div>
    </>
  );
};

export default ShowPost;
