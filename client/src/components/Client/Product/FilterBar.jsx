import React from 'react';

const FilterBar = ({ categories, selectedCategory, onCategoryChange, sortOption, onSortChange }) => {
  return (
    <div className="flex flex-wrap gap-4 items-center mb-6">
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="p-2 rounded border dark:bg-gray-700 dark:text-white"
      >
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      <select
        value={sortOption}
        onChange={(e) => onSortChange(e.target.value)}
        className="p-2 rounded border dark:bg-gray-700 dark:text-white"
      >
        <option value="">Sort By</option>
        <option value="low-high">Price: Low to High</option>
        <option value="high-low">Price: High to Low</option>
        <option value="latest">Latest</option>
        <option value="most-rated">Most Rated</option>
      </select>
    </div>
  );
};

export default FilterBar;
