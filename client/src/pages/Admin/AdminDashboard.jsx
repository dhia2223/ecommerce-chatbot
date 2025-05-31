import React from 'react';
import AdminNavbar from '../../components/Admin/AdminNavbar';

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-third dark:bg-four transition duration-300 text-gray-900 dark:text-white">
      <AdminNavbar />
      <div className="max-w-6xl mx-auto py-8 px-4">
        <h2 className="text-3xl font-bold mb-6 text-primary dark:text-white">
          Welcome back, Admin
        </h2>
        <p className="text-lg">Use the navbar above to manage products and users.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
