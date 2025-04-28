import React from 'react';
import { Link } from 'react-router-dom';

const ProductNavbar = () => {
  return (
    <nav className="bg-primary p-1 shadow-md mb-6 rounded-lg ">
      <div className="flex justify-center space-x-6 items-center">
        <Link
          to="/admin/products"
          className="text-white text-lg font-medium hover:bg-secondary hover:text-white px-6 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Product List
        </Link>
        <Link
          to="/admin/products/add"
          className="text-white text-lg font-medium hover:bg-secondary hover:text-white px-6 py-3 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Add Product
        </Link>
      </div>
    </nav>
  );
};

export default ProductNavbar;
