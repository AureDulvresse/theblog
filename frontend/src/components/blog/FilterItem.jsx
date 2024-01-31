// eslint-disable-next-line no-unused-vars
import React from "react";

const FilterItem = ({ filterName }) => {
  return (
    <li className="text-gray-600 mb-2 bg-slate-200 px-2 py-1 rounded cursor-pointer">
      {filterName}
    </li>
  );
};

export default FilterItem;
