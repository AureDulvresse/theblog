// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/blog/navbar";

const ShowPost = () => {
  const { id } = useParams(["id"]);
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-6 mt-2">
        <div>ShowPost {id}</div>
      </div>
    </>
  );
  
};

export default ShowPost;
