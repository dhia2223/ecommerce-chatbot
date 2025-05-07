import api from '../../api'; // assuming you have axios instance configured here

// Create an order from the cart (for logged-in USER)
export const createOrder = async () => {
  const response = await api.post('/orders'); // POST /orders
  return response.data;
};

// Get all orders of the currently logged-in user (My Orders page)
export const getMyOrders = async () => {
  const response = await api.get('/orders/my-orders'); // GET /orders/my-orders
  return response.data;
};

// Get all orders (ADMIN only)
export const getAllOrders = async () => {
  const response = await api.get('/orders'); // GET /orders (admin access only)
  return response.data;
};

// Update order status (ADMIN only)
export const updateOrderStatus = async (orderId, status) => {
  const response = await api.patch(`/orders/${orderId}/status`, { status }); // PATCH /orders/:id/status
  return response.data;
};

