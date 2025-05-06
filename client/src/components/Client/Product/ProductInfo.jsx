import React, { useState } from 'react';

const ProductInfo = ({ name, price, description }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);

  const toggleDescription = () => setShowFullDesc(!showFullDesc);

  return (
    <div className="space-y-6">
      {/* Product Title */}
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        {name}
      </h1>

      {/* Price */}
      <div className="text-2xl font-semibold text-green-600 dark:text-green-400">
        ${price.toFixed(2)}
      </div>

      {/* Description */}
      <div>
        <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-300 mb-2">
          Description
        </h2>
        <p
          className="text-gray-700 dark:text-gray-400 leading-relaxed whitespace-pre-wrap break-words overflow-hidden"
          style={{ maxHeight: showFullDesc ? 'none' : '8rem' }}
        >
          {description}
        </p>

        {description?.length > 150 && (
          <button
            onClick={toggleDescription}
            className="text-blue-600 dark:text-blue-400 hover:underline text-sm mt-2 transition-colors duration-200"
          >
            {showFullDesc ? 'See less' : 'See more'}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductInfo;

