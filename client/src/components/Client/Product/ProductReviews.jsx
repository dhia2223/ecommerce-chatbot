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
