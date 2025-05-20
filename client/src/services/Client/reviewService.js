import api from '../../api';

// Fetch reviews for a product
export const getReviewsByProductId = async (productId) => {
  const res = await api.get(`/reviews/product/${productId}`);
  // debug
    console.log('Fetched reviews:', res.data); // Debugging line
  return res.data;
};

// Add a new review
export const addReview = async (reviewData) => {

    console.log('Adding review from front:', reviewData); // Debugging line
  const res = await api.post('/reviews', reviewData);
  return res.data;
};
