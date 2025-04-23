// import React, { useState } from 'react';
// import { uploadImageToLocal, createProduct } from '../../services/Admin/productService';

// const AdminDashboard = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     category: '',
//     tags: '',
//     stock: '',
//     price: '',
//   });
//   const [imageFile, setImageFile] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const [message, setMessage] = useState('');

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'image') {
//       const file = files[0];
//       setImageFile(file);
//       setPreview(URL.createObjectURL(file));
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');

//     try {
//       let imageUrl = '';
//       if (imageFile) {
//         imageUrl = await uploadImageToLocal(imageFile);
//       }
//       // log
//       console.log('Image uploaded:', imageUrl);

//       await createProduct({ ...formData, imageUrl: imageUrl });
//       setMessage('Product added successfully!');
//       setFormData({ name: '', category: '', tags: '', stock: '', price: '' });
//       setImageFile(null);
//       setPreview(null);
//     } catch (error) {
//       console.error(error);
//       setMessage('Failed to add product.');
//     }
//   };

//   return (
//     <div className="p-6 max-w-xl mx-auto">
//       <h2 className="text-2xl font-bold mb-6">Admin Dashboard – Add Product</h2>
//       {message && <p className="mb-4 text-green-600">{message}</p>}
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <input name="name" type="text" placeholder="Product Name" value={formData.name} onChange={handleChange} required className="w-full p-2 border rounded" />
//         <input name="category" type="text" placeholder="Category" value={formData.category} onChange={handleChange} required className="w-full p-2 border rounded" />
//         <input name="tags" type="text" placeholder="Tags (comma separated)" value={formData.tags} onChange={handleChange} className="w-full p-2 border rounded" />
//         <input name="stock" type="number" placeholder="Stock" value={formData.stock} onChange={handleChange} required className="w-full p-2 border rounded" />
//         <input name="price" type="number" placeholder="Price" step="0.01" value={formData.price} onChange={handleChange} required className="w-full p-2 border rounded" />
//         <input type="file" accept="image/*" name="image" onChange={handleChange} className="w-full p-2 border rounded" />
//         {preview && <img src={preview} alt="Preview" className="h-32 object-cover mt-2 rounded" />}
//         <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">Add Product</button>
//       </form>
//     </div>
//   );
// };

// export default AdminDashboard;



import React from 'react';
import AdminNavbar from '../../components/admin/AdminNavbar';

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
