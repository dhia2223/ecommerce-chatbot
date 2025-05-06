// CartDropdown.jsx
import React from 'react';
import { useCart } from '../../../context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const CartDropdown = () => {
  const { cartItems, totalPrice } = useCart();

  return (
    <div className="absolute right-0 mt-2 w-80 bg-white border rounded-md shadow-lg z-50">
      <div className="p-4">
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <>
            <div className="space-y-4 max-h-60 overflow-y-auto">
              {cartItems.map(item => (
                <CartItem key={item.id} item={item} />
              ))}
            </div>
            <div className="pt-4 border-t mt-4">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold">Total:</span>
                <span className="text-red-600 font-bold">${totalPrice.toFixed(2)}</span>
              </div>
              <Link
                to="/checkout"
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md"
              >
                Go to Checkout
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDropdown;
