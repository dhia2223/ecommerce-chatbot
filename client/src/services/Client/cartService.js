// services/cartService.js
import api from '../../api'; // your axios config with baseURL + auth headers

// export const getCartItems = async () => {
//   const res = await api.get('/items');
//   return res.data;
// };
export const getCartItems = async (userId) => {
    const response = await api.get(`/cart/items`, {
      params: { userId }, // required
    });
    return response.data;
};

export const addCartItem = async (productId, quantity) => {
  const res = await api.post('/add', {
    productId,
    quantity,
  });
  return res.data;
};

export const removeCartItem = async (productId) => {
  const res = await api.delete(`/cart/remove/${productId}`);
  return res.data;
};
