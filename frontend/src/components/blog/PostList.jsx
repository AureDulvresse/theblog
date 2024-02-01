// eslint-disable-next-line no-unused-vars
import React from "react";

import { useState, useEffect } from "react";
import axios from "axios";
import { ReactPaginate } from "react-paginate";

import Post from "./Post";

// eslint-disable-next-line react/prop-types
const PostList = ({ filter }) => {
  const [posts, setposts] = useState([]);
  const [currentPosts, setCurrentPosts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOfset] = useState(0);

  let url;

  const postPerPage = 8;

  useEffect(() => {
    getPosts();
  });

  useEffect(() => {
    const endOffSet = itemOffset + postPerPage;
    setCurrentPosts(posts.slice(itemOffset, endOffSet));
    setPageCount(Math.ceil(posts.length / postPerPage));
  }, [itemOffset, postPerPage, posts]);

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

  const handlePageClick = (event) => {
    const newOffset = event.selected % posts.length;
    setItemOfset(newOffset);
  };

  return (
    <>
      <div className="grid grid-cols-3 gap-8">
        {currentPosts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>

      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
};

export default PostList;
