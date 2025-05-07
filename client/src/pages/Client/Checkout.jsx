// src/pages/Client/Checkout.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../../services/Client/orderService';
import { getCartItems } from '../../services/Client/cartService';
import { FaCreditCard, FaMapMarkerAlt, FaShoppingCart } from 'react-icons/fa';

const Checkout = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(null);
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('credit_card');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  useEffect(() => {
    const fetchCart = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const data = await getCartItems(userId);
        setCart(data);
      } catch (err) {
        console.error('Failed to fetch cart', err);
        setError('Failed to load cart');
      }
    };
    fetchCart();
  }, []);

  const handleCheckout = async () => {
    if (!address) {
      setError('Please enter a delivery address.');
      return;
    }
    setLoading(true);
    try {
      const userId = localStorage.getItem('userId');
      await createOrder(userId);
      navigate('/my-orders');
    } catch (err) {
      console.error('Order creation failed', err);
      setError('Order failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const totalPrice = cart?.items?.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-third text-four flex items-center justify-center py-12 px-4">
      <div className="bg-white dark:bg-four rounded-2xl shadow-xl p-8 w-full max-w-3xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-primary">Checkout</h1>

        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            <FaMapMarkerAlt className="inline mr-2" /> Delivery Address
          </label>
          <textarea
            rows="3"
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-100 dark:bg-gray-700 dark:text-white"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="123 Main St, City, Country"
          ></textarea>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-2">
            <FaCreditCard className="inline mr-2" /> Payment Method
          </label>
          <select
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-xl bg-gray-100 dark:bg-gray-700 dark:text-white"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="credit_card">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="cash_on_delivery">Cash on Delivery</option>
          </select>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-2 flex items-center">
            <FaShoppingCart className="mr-2" /> Order Summary
          </h2>
          <ul className="space-y-2 max-h-40 overflow-y-auto">
            {cart?.items?.map((item) => (
              <li key={item.id} className="flex justify-between text-sm">
                <span>{item.product.name} x{item.quantity}</span>
                <span>${(item.product.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-4 font-bold text-lg">
            <span>Total:</span>
            <span className="text-primary">${totalPrice?.toFixed(2)}</span>
          </div>
        </div>

        <button
          onClick={handleCheckout}
          disabled={loading}
          className="w-full bg-primary hover:bg-blue-700 text-white py-3 px-6 rounded-xl font-semibold shadow-md transition duration-300"
        >
          {loading ? 'Placing Order...' : 'Place Order'}
        </button>
      </div>
    </div>
  );
};

export default Checkout;
