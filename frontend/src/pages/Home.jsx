// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import PostList from "../components/blog/PostList";
import Navbar from "../components/blog/navbar";
import axios from "axios";
import FilterItem from "../components/blog/FilterItem";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState(0);

  useEffect(() => {
    getCategories();
  }, []);

  let getCategories = async () => {
    let response = await axios.get("http://localhost:8000/blog/categories/");
    let data = await response.data;
    setCategories(data);
  };

  const handleFilterByCategory = (id) => {
    setFilter(id);
    console.log(id);
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-between item-center">
        <PostList filter={filter} />

        <div className="shadow mt-3 rounded bg-slate-300">
          <ul className="px-4 py-2">
            <li
              className="text-white mb-2 bg-green-500 px-2 py-1 rounded cursor-pointer"
              onClick={() => handleFilterByCategory(0)}
            >
              Tous les Posts
            </li>
            {categories.map((category, index) => (
              <FilterItem
                key={index}
                filterName={category.name}
                onClick={() => {
                  return handleFilterByCategory(category.id);
                }}
              />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Home;
