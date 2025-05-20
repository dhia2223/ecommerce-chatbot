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




// import React, { useState } from 'react';

// const ProductReviews = ({ reviews = [] }) => {
//   const [showAll, setShowAll] = useState(false);
//   const visibleReviews = showAll ? reviews : reviews.slice(0, 2);

//   if (reviews.length === 0) return null;

//   return (
//     <div className="mt-8 space-y-4">
//       <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
//         Customer Reviews
//       </h2>
//       <ul className="space-y-4">
//         {visibleReviews.map((review, index) => (
//           <li
//             key={index}
//             className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300"
//           >
//             <p className="italic">"{review}"</p>
//           </li>
//         ))}
//       </ul>
//       {reviews.length > 2 && (
//         <button
//           onClick={() => setShowAll(!showAll)}
//           className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
//         >
//           {showAll ? 'See less' : 'See more reviews'}
//         </button>
//       )}
//     </div>
//   );
// };

// export default ProductReviews;


// import React, { useState } from 'react';

// const ProductReviews = ({ reviews, onAddReview }) => {
//   const [comment, setComment] = useState('');
//   const [rating, setRating] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!comment) return;
//     onAddReview({ comment, rating: rating ? parseInt(rating) : null });
//     setComment('');
//     setRating('');
//   };

//   return (
//     <div>
//       <h3 className="text-2xl font-bold mb-4">Customer Reviews</h3>
//       <div className="space-y-4">
//         {reviews.map((r, i) => (
//           <div key={i} className="bg-white dark:bg-slate-800 p-4 rounded shadow">
//             <p className="text-gray-700 dark:text-gray-200">{r.comment}</p>
//             {r.rating !== null && (
//               <div className="text-yellow-500 mt-1">
//                 {'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}
//               </div>
//             )}
//             <div className="text-xs text-gray-500 mt-1">By: {r.user?.name || 'Anonymous'}</div>
//           </div>
//         ))}
//       </div>

//       {/* Add review form */}
//       <form onSubmit={handleSubmit} className="mt-6 space-y-3">
//         <textarea
//           value={comment}
//           onChange={(e) => setComment(e.target.value)}
//           className="w-full p-2 rounded border"
//           placeholder="Write your review..."
//           required
//         />
//         <input
//           type="number"
//           min="1"
//           max="5"
//           value={rating}
//           onChange={(e) => setRating(e.target.value)}
//           placeholder="Rating (1-5)"
//           className="p-2 rounded border w-32"
//         />
//         <button
//           type="submit"
//           className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800"
//         >
//           Submit Review
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ProductReviews;









import React, { useState } from 'react';
import { Star, User, MessageCircle, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ProductReviews = ({ reviews, onAddReview }) => {
  const [comment, setComment] = useState('');
  const [rating, setRating] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!comment) return;
    onAddReview({ comment, rating: rating || null });
    setComment('');
    setRating(0);
  };

  const handleStarClick = (value) => {
    setRating(value);
  };

  return (
    <div>
      <h3 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">Customer Reviews</h3>

      <div className="space-y-5">
        <AnimatePresence>
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow flex flex-col gap-2"
            >
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-200">
                <User size={16} />
                <span className="text-sm">{r.user?.name || 'Anonymous'}</span>
              </div>
              <p className="text-base text-gray-700 dark:text-gray-300 flex items-start gap-2">
                <MessageCircle size={16} className="mt-1 text-indigo-500" />
                {r.comment}
              </p>
              {r.rating !== null && (
                <div className="flex text-yellow-400 mt-1">
                  {Array.from({ length: 5 }, (_, idx) => (
                    <Star
                      key={idx}
                      size={20}
                      fill={idx < r.rating ? 'currentColor' : 'none'}
                      stroke="currentColor"
                    />
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Add review form */}
      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-3 rounded-xl border dark:bg-slate-800 dark:text-gray-100 focus:ring-2 focus:ring-indigo-500"
          placeholder="Write your review..."
          required
        />

        {/* Star rating selection */}
        <div className="flex items-center gap-2">
          <span className="text-gray-700 dark:text-gray-200">Your Rating:</span>
          <div className="flex gap-1">
            {Array.from({ length: 5 }, (_, idx) => (
              <Star
                key={idx}
                size={24}
                className={`cursor-pointer transition ${
                  idx < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'
                }`}
                fill={idx < rating ? 'currentColor' : 'none'}
                stroke="currentColor"
                onClick={() => handleStarClick(idx + 1)}
              />
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="flex items-center gap-2 bg-indigo-600 text-white py-3 px-5 rounded-xl hover:bg-indigo-700 transition"
        >
          <Send size={16} /> Submit Review
        </button>
      </form>
    </div>
  );
};

export default ProductReviews;
