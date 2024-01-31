// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <>
      <div className="w-100 shadow py-3">
        <div className="flex align-center justify-around py-2">
          <Link to={"/"} className="text-green-400 font-bold text-2xl">
            the blog
          </Link>

          <SearchBar />

          <ul className="flex align-center justify-between gap-3 mx-2 py-1">
            <li>
              <Link
                to={"/signin"}
                className="text-sm text-gray-400 hover:text-green-400"
              >
                Inscription
              </Link>
            </li>
            <li>
              <Link
                to={"/login"}
                className="text-sm text-gray-400 hover:text-green-400"
              >
                Connexion
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
