import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';

const AdminNavbar = () => {
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
    `px-4 py-2 rounded hover:bg-primary hover:text-white transition ${
      location.pathname.includes(path) ? 'bg-primary text-white' : 'text-gray-800 dark:text-white'
    }`;

  return (
    <nav className="bg-third dark:bg-four p-4 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold text-primary dark:text-white">Admin Dashboard</h1>
      <div className="flex gap-4 items-center">
        <Link to="/admin/products" className={linkClass('/products')}>
          Manage Products
        </Link>
        <Link to="/admin/users" className={linkClass('/users')}>
          Manage Users
        </Link>
        <button onClick={toggleDarkMode} className="text-gray-700 dark:text-white">
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </nav>
  );
};

export default AdminNavbar;
