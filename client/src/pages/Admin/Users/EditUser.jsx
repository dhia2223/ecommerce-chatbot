// import React, { useState, useEffect } from 'react';
// import { getUserById, updateUser } from '../../../services/Admin/userService';
// import AdminNavbar from '../../../components/Admin/AdminNavbar';
// import UserNavbar from '../../../components/Admin/UserNavbar';
// import { useParams, useNavigate } from 'react-router-dom';

// const EditUser = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [userData, setUserData] = useState({
//     name: '',
//     email: '',
//     role: '',
//   });

//   useEffect(() => {
//     const fetchUser = async () => {
//       const user = await getUserById(id);
//       setUserData({
//         name: user.name,
//         email: user.email,
//         role: user.role,
//       });
//     };

//     fetchUser();
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await updateUser(id, userData);
//       navigate('/admin/users'); // Redirect after updating
//     } catch (error) {
//       console.error('Failed to update user:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-third dark:bg-four text-gray-900 dark:text-white">
//       <AdminNavbar />
//       <UserNavbar />
//       <div className="max-w-2xl mx-auto py-10 px-4">
//         <h2 className="text-2xl font-bold mb-6 text-primary">Edit User</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             name="name"
//             type="text"
//             placeholder="Name"
//             value={userData.name}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//           <input
//             name="email"
//             type="email"
//             placeholder="Email"
//             value={userData.email}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           />
//           <select
//             name="role"
//             value={userData.role}
//             onChange={handleChange}
//             className="w-full p-2 border rounded"
//             required
//           >
//             <option value="admin">Admin</option>
//             <option value="user">User</option>
//           </select>
//           <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
//             Update User
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default EditUser;
