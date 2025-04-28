import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ value, onChange }) => {
  return (
    <div className="flex items-center bg-gray-100 dark:bg-third px-4 py-2 rounded-md shadow-sm">
      <FiSearch className="text-gray-500 dark:text-gray-950 mr-2" />
      <input
        type="text"
        placeholder="Search products..."
        className="bg-transparent outline-none w-full text-gray-800 dark:text-gray-950 placeholder-gray-500 dark:placeholder-gray-400"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchBar;
