import React, { useEffect, useState } from 'react';
import { getAllUsers, deleteUser } from '../../../services/Admin/userService';
import AdminNavbar from '../../../components/Admin/AdminNavbar';
import UserNavbar from '../../../components/Admin/UserNavbar';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const data = await getAllUsers();
    setUsers(data);
  };

  const handleDelete = async (id) => {
    await deleteUser(id);
    fetchUsers(); // Refresh after deletion
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-third dark:bg-four text-gray-900 dark:text-white">
      <AdminNavbar />
      <UserNavbar />
      <div className="max-w-6xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-4 text-primary">All Users</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map((user) => (
            <div key={user.id} className="border p-4 rounded shadow bg-white dark:bg-gray-800">
              <h3 className="text-lg font-bold">{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>Created at: {user.createdAt}</p>
              <div className="flex gap-2 mt-2">
                <Link to={`/admin/users/edit/${user.id}`} className="text-blue-500">Edit</Link>
                <button onClick={() => handleDelete(user.id)} className="text-red-500">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserList;
