import React from 'react';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Client/sections/Navbar';

const Account = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="bg-gray-50 dark:bg-four min-h-screen">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold text-primary dark:text-white mb-8">My Account</h1>

        <div className="bg-white dark:bg-four p-6 rounded-lg shadow-md space-y-6">
          {/* User Info */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">Profile Information</h2>
            <p className="text-gray-600 dark:text-gray-400">Name: {user?.name || 'Guest'}</p>
            <p className="text-gray-600 dark:text-gray-400">Email: {user?.email || '-'}</p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              className="w-full sm:w-auto bg-primary text-white py-2 px-6 rounded hover:bg-secondary transition"
              onClick={() => navigate('/account/edit')}
            >
              Edit Profile
            </button>
            <button
              className="w-full sm:w-auto bg-primary text-white py-2 px-6 rounded hover:bg-secondary transition"
              onClick={() => navigate('/orders')}
            >
              View Orders
            </button>
            <button
              className="w-full sm:w-auto bg-primary text-white py-2 px-6 rounded hover:bg-secondary transition"
              onClick={() => navigate('/account/change-password')}
            >
              Change Password
            </button>
            <button
              className="w-full sm:w-auto bg-red-600 text-white py-2 px-6 rounded hover:bg-red-700 transition"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
