// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import PostList from "../components/blog/PostList";
import Navbar from "../components/blog/navbar";
import axios from "axios";
import FilterItem from "../components/blog/FilterItem";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState();

  useEffect(() => {
    getCategories();
  }, []);

  let getCategories = async () => {
    let response = await axios.get("http://localhost:8000/blog/categories/");
    let data = await response.data;
    setCategories(data);
  };

  const handleFilterByCategory = (category) => {
    setFilter(category);
    console.log("category", category);
    console.log("current filter", filter);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-between item-center">
        <PostList currentFilter={filter} />

        <div className="shadow mt-3 h-56 fixed right-32 rounded bg-slate-300">
          <ul className="px-4 py-2">
            <li
              className="text-white mb-2 bg-green-500 px-2 py-1 rounded cursor-pointer"
              onClick={() => {
                return handleFilterByCategory("all");
              }}
            >
              <p>Tous les Posts</p>
            </li>
            {categories.map((category, index) => (
              <li
                key={index}
                className="text-gray-600 mb-2 bg-slate-200 px-2 py-1 rounded cursor-pointer"
                onClick={() => {
                  console.log("click");
                  return handleFilterByCategory(category.name);
                }}
              >
                <FilterItem filterName={category.name} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
