// // context/CartContext.jsx
// import React, { createContext, useContext, useEffect, useState } from 'react';
// import api from '../api';

// const CartContext = createContext();
// export const useCart = () => useContext(CartContext);

// const LOCAL_STORAGE_KEY = 'guest_cart';

// const getUserIdFromToken = () => {
//   const token = localStorage.getItem('token');
//   if (!token) return null;
//   try {
//     const payload = JSON.parse(atob(token.split('.')[1]));
//     return payload.userId || payload.sub;
//   } catch {
//     return null;
//   }
// };

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const userId = getUserIdFromToken();
//   const isGuest = !userId;

//   // Load cart on mount
//   useEffect(() => {
//     if (isGuest) {
//       const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
//       setCartItems(stored ? JSON.parse(stored) : []);
//     } else {
//       api.get(`/cart/items`, { params: { userId } }).then(res => setCartItems(res.data));
//     }
//   }, [userId]);

//   const syncGuestCart = (items) => {
//     setCartItems(items);
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
//   };

//   const addToCart = async (product, quantity = 1) => {
//     if (isGuest) {
//       const existing = cartItems.find(item => item.id === product.id);
//       const updated = existing
//         ? cartItems.map(item =>
//             item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
//           )
//         : [...cartItems, { ...product, quantity }];
//       syncGuestCart(updated);
//     } else {
//       await api.post('/cart/add', {
//         userId,
//         productId: product.id,
//         quantity,
//       });
//       const res = await api.get(`/cart/items`, { params: { userId } });
//       setCartItems(res.data);
//     }
//   };

//   const removeFromCart = async (productId) => {
//     if (isGuest) {
//       const updated = cartItems.filter(item => item.id !== productId);
//       syncGuestCart(updated);
//     } else {
//       await api.delete('/cart/remove', { params: { userId, productId } });
//       const res = await api.get(`/cart/items`, { params: { userId } });
//       setCartItems(res.data);
//     }
//   };

//   const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalPrice }}>
//       {children}
//     </CartContext.Provider>
//   );
// };


// context/CartContext.jsx

// context/CartContext.jsx
import React, { createContext, useContext, useEffect, useState } from 'react';
import api from '../api';
import { useAuth } from './AuthContext'; // ⬅️ Import AuthContext

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const LOCAL_STORAGE_KEY = 'guest_cart';

const getUserIdFromToken = () => {
  const token = localStorage.getItem('token');
  if (!token) return null;
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    return payload.userId || payload.sub;
  } catch {
    return null;
  }
};

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { loginTrigger, setLoginTrigger } = useAuth(); // ⬅️ Track login

  const userId = getUserIdFromToken();
  const isGuest = !userId;

  const fetchCart = async () => {
    if (isGuest) {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      setCartItems(stored ? JSON.parse(stored) : []);
    } else {
      try {
        const res = await api.get(`/cart/items`, { params: { userId } });
        setCartItems(res.data);
      } catch (err) {
        console.error("Failed to fetch cart:", err);
        setCartItems([]); // fallback
      }
    }
  };

  // Load cart on mount and when userId changes
  useEffect(() => {
    fetchCart();
  }, [userId]);

  // Refresh cart when loginTrigger is activated
  useEffect(() => {
    if (loginTrigger) {
      fetchCart();
      setLoginTrigger(false);
    }
  }, [loginTrigger]);

  const syncGuestCart = (items) => {
    setCartItems(items);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
  };

  const addToCart = async (product, quantity = 1) => {
    if (isGuest) {
      const existing = cartItems.find(item => item.id === product.id);
      const updated = existing
        ? cartItems.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
          )
        : [...cartItems, { ...product, quantity }];
      syncGuestCart(updated);
    } else {
      await api.post('/cart/add', {
        userId,
        productId: product.id,
        quantity,
      });
      await fetchCart();
    }
  };

  const removeFromCart = async (productId) => {
    if (isGuest) {
      const updated = cartItems.filter(item => item.id !== productId);
      syncGuestCart(updated);
    } else {
      await api.delete('/cart/remove', { params: { userId, productId } });
      await fetchCart();
    }
  };

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, totalPrice, refreshCart: fetchCart }}>
      {children}
    </CartContext.Provider>
  );
};
