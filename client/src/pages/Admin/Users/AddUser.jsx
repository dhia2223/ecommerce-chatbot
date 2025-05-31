import React, { useState } from 'react';
import { register } from '../../../services/authService';
import AdminNavbar from '../../../components/admin/AdminNavbar';
import UserNavbar from '../../../components/Admin/UserNavbar';

const AddUser = () => {
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await register(userData);
            setUserData({ name: '', email: '', password: '' }); // Reset form
        } catch (error) {
            console.error('Failed to register user:', error);
        }
    };

    return (
        <div className="min-h-screen bg-third dark:bg-four text-gray-900 dark:text-white">
            <AdminNavbar />
            <UserNavbar />
            <div className="max-w-2xl mx-auto py-10 px-4">
                <h2 className="text-2xl font-bold mb-6 text-primary">Add New User</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        name="name"
                        type="text"
                        placeholder="Name"
                        value={userData.name}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={userData.email}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                    <input
                        name="password"
                        type="password"
                        placeholder="Password"
                        value={userData.password}
                        onChange={handleChange}
                        className="w-full p-2 border rounded"
                        required
                    />
                    <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
                        Add User
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddUser;
