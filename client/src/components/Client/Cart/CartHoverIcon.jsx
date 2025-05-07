import { useState, useRef } from "react";
import { ShoppingCart } from "lucide-react";
import CartDropdown from "./CartDropdown"; // adjust path if needed
import { useCart } from "../../../context/CartContext";

export default function CartHoverIcon() {
  const [openCart, setOpenCart] = useState(false);
  const timeoutRef = useRef(null);
  const { cartItems } = useCart();

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenCart(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenCart(false);
    }, 200); // 200ms delay
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="relative text-gray-700 dark:text-white">
        <ShoppingCart className="w-6 h-6" />
        {cartItems.length > 0 && (
          <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
            {cartItems.reduce((total, item) => total + item.quantity, 0)}
          </span>
        )}
      </button>

      {openCart && (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="absolute right-0 z-50"
        >
          <CartDropdown />
        </div>
      )}
    </div>
  );
}
