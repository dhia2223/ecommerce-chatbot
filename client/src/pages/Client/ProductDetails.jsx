import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../../services/admin/productService';

import Navbar from '../../components/Client/sections/Navbar';
import ProductCarousel from '../../components/Client/Product/ProductCarousel';
import ProductInfo from '../../components/Client/Product/ProductInfo';
import ProductReviews from '../../components/Client/Product/ProductReviews';
import AddToCartButton from '../../components/Client/Product/AddToCartButton';

import { getReviewsByProductId, addReview } from '../../services/Client/reviewService';
import { useAuth } from '../../context/AuthContext'; // Assuming you have an AuthContext



const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const { productId } = useParams();
  const navigate = useNavigate();

  const { user } = useAuth();

  // Review
  //const [refresh, setRefresh] = useState(false);
  const [reviews, setReviews] = useState([]);

  // // Fallback reviews
  // const staticReviews = [
  //   'Absolutely love this product! Great quality.',
  //   'Arrived quickly and exactly as described.',
  //   'Will definitely order again – highly recommended!'
  // ];

  useEffect(() => {
    if (!productId) {
      setError('Invalid product ID.');
      return;
    }

    const fetchProduct = async () => {
      try {
        const data = await getProductById(productId);
        // Fetch reviews for the product
        const fetchedReviews = await getReviewsByProductId(productId);
        if (!data || typeof data !== 'object') {
          throw new Error('Invalid product data received.');
        }
        setProduct(data);
        // Set reviews, fallback to static reviews if none found
        setReviews(fetchedReviews);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch product', err);
        setError('Could not load product. Please try again later.');
      }
    };

    fetchProduct();
  }, [productId]);

  if (error) {
    return (
      <>
        <Navbar />
        <div className="text-red-500 dark:text-red-400 text-center p-10">{error}</div>
      </>
    );
  }

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="text-center text-gray-700 dark:text-gray-300 p-10">Loading...</div>
      </>
    );
  }

  const handleAddReview = async (newReview) => {
    try {
      // Assume you get the userId from auth context or token
      // Assuming useAuthContext is imported and provides user info
      if (!user ) {
        alert('You must be logged in to add a review.');
        return;
      }

      const reviewToPost = {
        ...newReview,
        productId: parseInt(productId),
        userId: user.id, // Retrieve userId from auth context
      };
      await addReview(reviewToPost);
      const updatedReviews = await getReviewsByProductId(productId);
      setReviews(updatedReviews);
    } catch (err) {
      console.error('Failed to add review', err);
    }
  };
  

  return (
    <>
      <Navbar />
      <div className="bg-gray-50 dark:bg-four text-gray-800 dark:text-white min-h-screen transition duration-300">
        <div className="max-w-7xl mx-auto px-6 py-12 bg-gray-50 dark:bg-four text-gray-800 dark:text-gray-100 transition duration-300">
                {/* Back button */}
                <button
                onClick={() => navigate('/products')}
                className="mb-6 text-sm text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
                >
                ← Back to Products
                </button>

                {/* Main grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="flex justify-center items-center h-full">
                    <ProductCarousel images={product.images} />
                </div>

                <div className="space-y-6">
                    <ProductInfo
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    />
                    <AddToCartButton product={product}/>
                </div>
                </div>

                {/* Reviews */}
                <div className="mt-16">
                {/* <ProductReviews reviews={product.reviews?.length ? product.reviews : staticReviews} /> */}
                <ProductReviews reviews={reviews} onAddReview={handleAddReview} />
                </div>
        </div>

      </div>

    </>
  );
};

export default ProductPage;
