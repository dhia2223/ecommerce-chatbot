import React, { useEffect, useState } from 'react';
import { getProductById, updateProduct, uploadImageToLocal } from '../../../services/admin/productService';

const UpdateProduct = ({ id, onClose }) => {
  const [productData, setProductData] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    tags: '',
    stock: '',
    price: '',
  });
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const data = await getProductById(id);
      setProductData(data);
      setFormData({
        name: data.name,
        category: data.category,
        tags: data.tags,
        stock: data.stock,
        price: data.price,
      });
      setPreview(data.imageUrl);
    };
    if (id) fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      const file = files[0];
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let imageUrl = preview;
    if (imageFile) {
      imageUrl = await uploadImageToLocal(imageFile);
    }
    await updateProduct(id, { ...formData, imageUrl });
    onClose();
  };

  if (!productData) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg max-w-4xl w-full shadow-lg flex">
        {/* Left section: Form */}
        <form onSubmit={handleSubmit} className="w-1/2 pr-4 space-y-4">
          <h2 className="text-2xl font-bold text-primary">Edit Product</h2>
          <input name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Name" required className="w-full p-2 border rounded" />
          <input name="category" type="text" value={formData.category} onChange={handleChange} placeholder="Category" required className="w-full p-2 border rounded" />
          <input name="tags" type="text" value={formData.tags} onChange={handleChange} placeholder="Tags" className="w-full p-2 border rounded" />
          <input name="stock" type="number" value={formData.stock} onChange={handleChange} placeholder="Stock" required className="w-full p-2 border rounded" />
          <input name="price" type="number" step="0.01" value={formData.price} onChange={handleChange} placeholder="Price" required className="w-full p-2 border rounded" />
          <input name="image" type="file" accept="image/*" onChange={handleChange} className="w-full p-2 border rounded" />
          <div className="flex gap-4 mt-4">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Update</button>
            <button type="button" onClick={onClose} className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-600">Cancel</button>
          </div>
        </form>

        {/* Right section: Image preview */}
        <div className="w-1/2 pl-4 flex items-center justify-center">
          {preview && <img src={preview} alt="Product preview" className="h-64 object-cover rounded shadow" />}
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;