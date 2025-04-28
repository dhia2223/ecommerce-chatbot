import React from 'react';
import { Link } from 'react-router-dom';

const UserNavbar = () => {
  return (
    <nav className="bg-primary p-1 shadow-md mb-6 rounded-lg">
      <div className="flex justify-center space-x-6 items-center">
        <Link
          to="/admin/users"
          className="text-white text-lg font-medium hover:bg-secondary hover:text-white px-6 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          User List
        </Link>
        <Link
          to="/admin/users/add"
          className="text-white text-lg font-medium hover:bg-secondary hover:text-white px-6 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Add User
        </Link>
      </div>
    </nav>
  );
};

export default UserNavbar;

