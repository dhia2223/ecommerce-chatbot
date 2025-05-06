// CartItem.jsx
import React from 'react';
import { useCart } from '../../../context/CartContext';
import { Trash2 } from 'lucide-react'; // You can use react-icons instead if you want

const CartItem = ({ item }) => {
  const { removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded-md"
      />
      <div className="flex-1">
        <h4 className="text-sm font-semibold">{item.name}</h4>
        <p className="text-xs text-gray-500">
          {item.quantity} × ${item.price.toFixed(2)}
        </p>
      </div>
      <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-600">
        <Trash2 size={18} />
      </button>
    </div>
  );
};

export default CartItem;
