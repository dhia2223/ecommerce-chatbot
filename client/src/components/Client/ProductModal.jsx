import React, { useState } from 'react';
import { X, ChevronDown, ChevronUp, ChevronLeft, ChevronRight, Circle } from 'lucide-react';

const staticReviews = [
  { id: 1, name: "John Doe", rating: 5, comment: "Fantastic product, top quality!" },
  { id: 2, name: "Emma Brown", rating: 4, comment: "Loved it, would recommend!" },
  { id: 3, name: "Liam Wilson", rating: 5, comment: "Super satisfied!" },
  { id: 4, name: "Sophia Green", rating: 5, comment: "Absolutely amazing product!" },
];

const ProductModal = ({ product, onClose }) => {
  const [showDescription, setShowDescription] = useState(false);
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = product.images || [product.imageUrl || '/placeholder.png'];

  const nextImage = () => {
    setCurrentImage((currentImage + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((currentImage - 1 + images.length) % images.length);
  };

  const reviewsToShow = showAllReviews ? staticReviews : staticReviews.slice(0, 2);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4 overflow-auto">
      <div className="bg-white dark:bg-four rounded-xl shadow-2xl w-full max-w-2xl relative max-h-[90vh] overflow-hidden flex flex-col">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition"
        >
          <X size={26} />
        </button>

        {/* Modal Content */}
        <div className="p-6 space-y-6 overflow-y-auto">

          {/* Image Carousel */}
          <div className="relative w-full h-64 bg-gray-100 dark:bg-third rounded-lg flex justify-center items-center">
            <img
              src={images[currentImage]}
              alt={product.name}
              className="rounded-lg object-cover h-full"
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-four p-2 rounded-full shadow hover:bg-gray-200 dark:hover:bg-third"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white dark:bg-four p-2 rounded-full shadow hover:bg-gray-200 dark:hover:bg-third"
                >
                  <ChevronRight size={20} />
                </button>
              </>
            )}
          </div>

          {/* Dots */}
          {images.length > 1 && (
            <div className="flex justify-center gap-2 mt-2">
              {images.map((_, idx) => (
                <Circle
                  key={idx}
                  size={14}
                  className={`cursor-pointer ${idx === currentImage ? 'fill-primary' : 'stroke-primary'}`}
                  onClick={() => setCurrentImage(idx)}
                />
              ))}
            </div>
          )}

          {/* Product Info */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{product.name}</h2>
            <p className="text-3xl font-bold text-primary mt-2">${product.price}</p>
          </div>

          {/* Add to Cart Button */}
          <button
            className="bg-primary hover:bg-secondary text-white py-3 rounded-lg transition font-semibold text-lg w-full"
          >
            Add to Cart
          </button>

          {/* Description Collapsible */}
          <div>
            <button
              onClick={() => setShowDescription(!showDescription)}
              className="flex items-center gap-2 text-primary font-semibold mt-6 mb-2"
            >
              {showDescription ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              {showDescription ? "Hide Description" : "See Description"}
            </button>
            {showDescription && (
              <p className="text-gray-600 dark:text-gray-300 mt-2">{product.description}</p>
            )}
          </div>

          {/* Reviews Section */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 mt-6">Customer Reviews</h3>

            <div className="space-y-3 max-h-40 overflow-y-auto pr-2">
              {reviewsToShow.map((review) => (
                <div
                  key={review.id}
                  className="p-3 rounded-lg bg-gray-100 dark:bg-third"
                >
                  <div className="flex justify-between items-center mb-1">
                    <p className="font-semibold text-sm">{review.name}</p>
                    <div className="flex gap-0.5 text-primary">
                      {Array(review.rating).fill(0).map((_, idx) => (
                        <span key={idx}>★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{review.comment}</p>
                </div>
              ))}
            </div>

            {/* See More / See Less */}
            {staticReviews.length > 2 && (
              <div className="mt-4 text-center">
                <button
                  onClick={() => setShowAllReviews(!showAllReviews)}
                  className="text-primary hover:underline font-semibold"
                >
                  {showAllReviews ? "See Less Reviews" : "See More Reviews"}
                </button>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductModal;
