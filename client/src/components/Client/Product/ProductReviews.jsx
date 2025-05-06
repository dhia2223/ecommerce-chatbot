// import React, { useState } from 'react';

// const ProductReviews = ({ reviews = [] }) => {
//   const [showAll, setShowAll] = useState(false);
//   const visibleReviews = showAll ? reviews : reviews.slice(0, 2);

//   if (reviews.length === 0) return null;

//   return (
//     <div className="mt-6">
//       <h2 className="text-lg font-semibold mb-2">Customer Reviews</h2>
//       <ul className="space-y-3">
//         {visibleReviews.map((review, index) => (
//           <li key={index} className="text-gray-700 dark:text-gray-300 border-b pb-2">
//             "{review}"
//           </li>
//         ))}
//       </ul>
//       {reviews.length > 2 && (
//         <button
//           onClick={() => setShowAll(!showAll)}
//           className="text-blue-500 text-sm mt-2"
//         >
//           {showAll ? 'See less' : 'See more'}
//         </button>
//       )}
//     </div>
//   );
// };

// export default ProductReviews;




import React, { useState } from 'react';

const ProductReviews = ({ reviews = [] }) => {
  const [showAll, setShowAll] = useState(false);
  const visibleReviews = showAll ? reviews : reviews.slice(0, 2);

  if (reviews.length === 0) return null;

  return (
    <div className="mt-8 space-y-4">
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
        Customer Reviews
      </h2>
      <ul className="space-y-4">
        {visibleReviews.map((review, index) => (
          <li
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
          >
            <p className="italic">"{review}"</p>
          </li>
        ))}
      </ul>
      {reviews.length > 2 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
        >
          {showAll ? 'See less' : 'See more reviews'}
        </button>
      )}
    </div>
  );
};

export default ProductReviews;
