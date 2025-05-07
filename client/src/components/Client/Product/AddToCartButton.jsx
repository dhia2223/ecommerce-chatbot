// components/client/AddToCartButton.jsx
import React, { useState } from 'react';
import { useCart } from '../../../context/CartContext'; 

const AddToCartButton = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  return (
    <div className="mt-6 flex items-center space-x-4">
      <div className="flex items-center border rounded">
        <button
          onClick={() => setQuantity(q => Math.max(1, q - 1))}
          className="px-3 py-1"
        >
          -
        </button>
        <input
          type="text"
          value={quantity}
          readOnly
          className="w-10 text-center border-l border-r"
        />
        <button
          onClick={() => setQuantity(q => q + 1)}
          className="px-3 py-1"
        >
          +
        </button>
      </div>
      <button
        onClick={() => addToCart(product, quantity)}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCartButton;
