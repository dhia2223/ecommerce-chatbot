import React, { useState } from 'react';
import { uploadImagesToLocal, createProduct } from '../../../services/Admin/productService';
import AdminNavbar from '../../../components/Admin/AdminNavbar';
import ProductNavbar from '../../../components/Admin/ProductNavbar';
import { v4 as uuidv4 } from 'uuid';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    tags: '',
    stock: '',
    price: '',
    description: '',
  });

  const [imageFiles, setImageFiles] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    setImageFiles(files);

    const newPreviews = files.map(file => ({
      id: uuidv4(),
      url: URL.createObjectURL(file),
      file,
    }));

    setPreviews(newPreviews);
  };

  const moveImage = (index, direction) => {
    const newPreviews = [...previews];
    const [moved] = newPreviews.splice(index, 1);
    newPreviews.splice(index + direction, 0, moved);
    setPreviews(newPreviews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      // Upload all images
      const formDataImages = new FormData();
      previews.forEach(p => formDataImages.append('images', p.file));

      const uploadRes = await uploadImagesToLocal(formDataImages);
      const imageUrls = uploadRes.images; // array

      await createProduct({
        ...formData,
        images: imageUrls, // important: in selected order
      });

      setMessage('✅ Product added successfully!');
      setFormData({ name: '', category: '', tags: '', stock: '', price: '', description: '' });
      setImageFiles([]);
      setPreviews([]);
    } catch (error) {
      console.error(error);
      setMessage('❌ Failed to add product.');
    }
  };

  return (
    <div className="min-h-screen bg-third dark:bg-four text-gray-900 dark:text-white">
      <AdminNavbar />
      <ProductNavbar />
      <div className="max-w-3xl mx-auto py-10 px-4">
        <h2 className="text-2xl font-bold mb-6 text-primary">Add New Product</h2>
        {message && <p className="mb-4">{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="name" type="text" placeholder="Product Name" value={formData.name} onChange={handleChange} required className="w-full p-2 border rounded" />
          <input name="category" type="text" placeholder="Category" value={formData.category} onChange={handleChange} required className="w-full p-2 border rounded" />
          <input name="tags" type="text" placeholder="Tags (comma separated)" value={formData.tags} onChange={handleChange} className="w-full p-2 border rounded" />
          <input name="stock" type="number" placeholder="Stock" value={formData.stock} onChange={handleChange} required className="w-full p-2 border rounded" />
          <input name="price" type="number" placeholder="Price" step="0.01" value={formData.price} onChange={handleChange} required className="w-full p-2 border rounded" />
          <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="w-full p-2 border rounded" />

          <input type="file" accept="image/*" name="images" multiple onChange={handleImagesChange} className="w-full p-2 border rounded" />

          {/* Preview images with move buttons */}
          {previews.length > 0 && (
            <div className="flex overflow-x-auto space-x-4 mt-4">
              {previews.map((preview, idx) => (
                <div key={preview.id} className="relative flex-shrink-0">
                  <img src={preview.url} alt={`Preview ${idx}`} className="h-32 w-32 object-cover rounded" />
                  <div className="absolute top-1 right-1 flex flex-col space-y-1">
                    {idx !== 0 && (
                      <button
                        type="button"
                        onClick={() => moveImage(idx, -1)}
                        className="bg-white text-black rounded p-1 text-xs"
                      >
                        ▲
                      </button>
                    )}
                    {idx !== previews.length - 1 && (
                      <button
                        type="button"
                        onClick={() => moveImage(idx, 1)}
                        className="bg-white text-black rounded p-1 text-xs"
                      >
                        ▼
                      </button>
                    )}
                  </div>
                  {idx === 0 && (
                    <div className="absolute bottom-1 left-1 bg-primary text-white text-xs p-1 rounded">
                      Cover
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 w-full">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
