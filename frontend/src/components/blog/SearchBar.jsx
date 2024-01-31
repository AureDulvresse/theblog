// eslint-disable-next-line no-unused-vars
import React from "react";

const SearchBar = () => {
  return (
    <>
      <div className="relative block">
        <input
          className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-3 pr-9 pl-3 shadow-sm focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-1 sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          name="search"
        />
        <span className="absolute inset-y-0 right-0 flex items-center pl-2 bg-green-500 rounded-md focus:bg-green-300 text-white">
          <svg
            className="h-5 w-5 fill-slate-300 rounded-sm"
            viewBox="0 0 20 20"
          ></svg>
        </span>
      </div>
    </>
  );
};

export default SearchBar;
