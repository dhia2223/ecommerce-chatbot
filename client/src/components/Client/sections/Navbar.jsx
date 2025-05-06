// import React, { useEffect, useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { Sun, Moon } from 'lucide-react';

// const Navbar = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const isDark = localStorage.getItem('darkMode') === 'true';
//     setDarkMode(isDark);
//     document.documentElement.classList.toggle('dark', isDark);
//   }, []);

//   const toggleDarkMode = () => {
//     const newMode = !darkMode;
//     setDarkMode(newMode);
//     localStorage.setItem('darkMode', newMode);
//     document.documentElement.classList.toggle('dark', newMode);
//   };

//   const linkClass = (path) =>
//     `text-gray-600 dark:text-white hover:text-primary dark:hover:text-primary transition ${
//       location.pathname === path ? 'font-semibold text-primary' : ''
//     }`;

//   return (
//     <header className="bg-third dark:bg-four shadow-md py-4 px-6 flex items-center justify-between sticky top-0 z-50">
//       <Link to="/" className="text-2xl font-bold text-primary dark:text-white">E-COMMERCE</Link>
//       <nav className="space-x-6 hidden md:block">
//         <Link to="/products" className={linkClass('/products')}>Products</Link>
//         <Link to="/orders" className={linkClass('/orders')}>Orders</Link>
//         <Link to="/account" className={linkClass('/account')}>Account</Link>
//       </nav>
//       <div className="flex gap-4 items-center">
//         <Link to="/logout" className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition">Logout</Link>
//         <button onClick={toggleDarkMode} className="text-gray-700 dark:text-white">
//           {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
//         </button>
//       </div>
//     </header>
//   );
// };

// export default Navbar;





// import React, { useEffect, useState, useRef } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { Sun, Moon, User } from 'lucide-react';

// const Navbar = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const dropdownRef = useRef(null);
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const isDark = localStorage.getItem('darkMode') === 'true';
//     setDarkMode(isDark);
//     document.documentElement.classList.toggle('dark', isDark);

//     // Close dropdown on outside click
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const toggleDarkMode = () => {
//     const newMode = !darkMode;
//     setDarkMode(newMode);
//     localStorage.setItem('darkMode', newMode);
//     document.documentElement.classList.toggle('dark', newMode);
//   };

//   const handleLogout = () => {
//     localStorage.removeItem('token'); // Or cookies if used
//     // Optionally clear more auth/session data here
//     navigate('/login');
//   };

//   const linkClass = (path) =>
//     `text-gray-600 dark:text-white hover:text-primary dark:hover:text-primary transition ${
//       location.pathname === path ? 'font-semibold text-primary' : ''
//     }`;

//   return (
//     <header className="bg-third dark:bg-four shadow-md py-4 px-6 flex items-center justify-between sticky top-0 z-50">
//       <Link to="/" className="text-2xl font-bold text-primary dark:text-white">E-COMMERCE</Link>
      
//       <nav className="space-x-6 hidden md:block">
//         <Link to="/home" className={linkClass('/home')}>Home</Link>
//         <Link to="/products" className={linkClass('/products')}>Products</Link>
//         <Link to="/orders" className={linkClass('/orders')}>Orders</Link>
//         <Link to="/account" className={linkClass('/account')}>Account</Link>
//       </nav>

//       <div className="flex items-center gap-4 relative" ref={dropdownRef}>
//         <button onClick={toggleDarkMode} className="text-gray-700 dark:text-white">
//           {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
//         </button>

//         {/* User Icon */}
//         <button onClick={() => setDropdownOpen(!dropdownOpen)} className="text-gray-700 dark:text-white">
//           <User className="w-6 h-6" />
//         </button>

//         {/* Dropdown */}
//         {dropdownOpen && (
//           <div className="absolute right-0 top-12 w-40 bg-white dark:bg-gray-800 rounded shadow-md py-2 z-50">
//             <Link
//               to="/account"
//               className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
//             >
//               Settings
//             </Link>
//             <button
//               onClick={handleLogout}
//               className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700"
//             >
//               Logout
//             </button>
//           </div>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Navbar;




import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sun, Moon, User, ShoppingCart } from 'lucide-react';
import { useCart } from '../../../context/CartContext';
import CartDropdown from '../Cart/CartDropdown'; // Import CartDropdown

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [openCart, setOpenCart] = useState(false); // State for cart hover
  const dropdownRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();
  const { cartItems } = useCart(); // Use cart context

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    document.documentElement.classList.toggle('dark', newMode);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const linkClass = (path) =>
    `text-gray-600 dark:text-white hover:text-primary dark:hover:text-primary transition ${
      location.pathname === path ? 'font-semibold text-primary' : ''
    }`;

  return (
    <header className="bg-third dark:bg-four shadow-md py-4 px-6 flex items-center justify-between sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-primary dark:text-white">
        E-COMMERCE
      </Link>

      <nav className="space-x-6 hidden md:block">
        <Link to="/home" className={linkClass('/home')}>Home</Link>
        <Link to="/products" className={linkClass('/products')}>Products</Link>
        <Link to="/orders" className={linkClass('/orders')}>Orders</Link>
        <Link to="/account" className={linkClass('/account')}>Account</Link>
      </nav>

      <div className="flex items-center gap-4 relative" ref={dropdownRef}>
        {/* Dark Mode Toggle */}
        <button onClick={toggleDarkMode} className="text-gray-700 dark:text-white">
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        {/* Cart Icon with Hover */}
        <div
          className="relative"
          onMouseEnter={() => setOpenCart(true)}
          onMouseLeave={() => setOpenCart(false)}
        >
          <button className="relative text-gray-700 dark:text-white">
            <ShoppingCart className="w-6 h-6" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartItems.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
          </button>
          {openCart && <CartDropdown />} {/* Show CartDropdown on hover */}
        </div>

        {/* User Icon */}
        <button onClick={() => setDropdownOpen(!dropdownOpen)} className="text-gray-700 dark:text-white">
          <User className="w-6 h-6" />
        </button>

        {/* Dropdown */}
        {dropdownOpen && (
          <div className="absolute right-0 top-12 w-40 bg-white dark:bg-gray-800 rounded shadow-md py-2 z-50">
            <Link
              to="/account"
              className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Settings
            </Link>
            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;



// Navbar.jsx
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ShoppingCart } from 'lucide-react';
// import CartDropdown from './Cart/CartDropdown';
// import { useCart } from '../../context/CartContext';

// const Navbar = () => {
//   const { cartItems } = useCart();
//   const [openCart, setOpenCart] = useState(false);

//   return (
//     <nav className="bg-white shadow-md relative">
//       <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
//         <Link to="/" className="text-2xl font-bold text-gray-800">
//           MyStore
//         </Link>
//         <div className="flex items-center space-x-6">
//           <Link to="/products" className="text-gray-600 hover:text-gray-900">
//             Products
//           </Link>
//           <div
//             className="relative"
//             onMouseEnter={() => setOpenCart(true)}
//             onMouseLeave={() => setOpenCart(false)}
//           >
//             <button className="relative">
//               <ShoppingCart size={24} className="text-gray-600 hover:text-gray-900" />
//               {cartItems.length > 0 && (
//                 <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
//                   {cartItems.length}
//                 </span>
//               )}
//             </button>
//             {openCart && <CartDropdown />}
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
