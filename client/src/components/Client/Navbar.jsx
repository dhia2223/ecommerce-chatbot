// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../context/AuthContext';

// const Navbar = () => {
//   const { logout } = useAuth();
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   return (
//       <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
//         <div className="text-xl font-bold">E-COMMERCE</div>
//         <div className="space-x-4">
//           <a href="/products" className="hover:underline">Products</a>
//           <a href="/orders" className="hover:underline">Orders</a>
//           <a href="/account" className="hover:underline">Account</a>
//           <button className="bg-white text-black px-3 py-1 rounded hover:bg-gray-300">
//             Logout
//           </button>
//         </div>
//       </nav>

//   );
// };

// export default Navbar;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <header className="bg-red shadow-md py-4 px-6 flex items-center justify-between sticky top-0 z-50">
//       <Link to="/" className="text-2xl font-bold text-blue-600">E-COMMERCE</Link>
//       <nav className="space-x-6  md:block">
//         <Link to="/products" className="text-gray-600 hover:text-blue-600">Products</Link>
//         <Link to="/orders" className="text-gray-600 hover:text-blue-600">Orders</Link>
//         <Link to="/account" className="text-gray-600 hover:text-blue-600">Account</Link>
//       </nav>
//       <Link to="/logout" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Logout</Link>
//     </header>
//   );
// };

// export default Navbar;





import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    document.documentElement.classList.toggle('dark', newMode);
  };

  const linkClass = (path) =>
    `text-gray-600 dark:text-white hover:text-primary dark:hover:text-primary transition ${
      location.pathname === path ? 'font-semibold text-primary' : ''
    }`;

  return (
    <header className="bg-third dark:bg-four shadow-md py-4 px-6 flex items-center justify-between sticky top-0 z-50">
      <Link to="/" className="text-2xl font-bold text-primary dark:text-white">E-COMMERCE</Link>
      <nav className="space-x-6 hidden md:block">
        <Link to="/products" className={linkClass('/products')}>Products</Link>
        <Link to="/orders" className={linkClass('/orders')}>Orders</Link>
        <Link to="/account" className={linkClass('/account')}>Account</Link>
      </nav>
      <div className="flex gap-4 items-center">
        <Link to="/logout" className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary transition">Logout</Link>
        <button onClick={toggleDarkMode} className="text-gray-700 dark:text-white">
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </header>
  );
};

export default Navbar;
