// import React, { useEffect, useState } from 'react';
// import { getProductById, updateProduct, uploadImagesToLocal } from '../../../services/admin/productService';

// const UpdateProduct = ({ id, onClose }) => {
//   const [productData, setProductData] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     category: '',
//     tags: '',
//     stock: '',
//     price: '',
//   });
//   const [imageFiles, setImageFiles] = useState([]);
//   const [previews, setPreviews] = useState([]);
//   const [coverIndex, setCoverIndex] = useState(0);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const data = await getProductById(id);
//       setProductData(data);
//       setFormData({
//         name: data.name,
//         category: data.category,
//         tags: data.tags,
//         stock: data.stock,
//         price: data.price,
//       });

//       if (data.images && data.images.length > 0) {
//         setPreviews(data.images); // Assuming backend sends product.images = [url1, url2, ...]
//       }
//     };
//     if (id) fetchProduct();
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'images') {
//       const selectedFiles = Array.from(files);
//       setImageFiles(selectedFiles);
//       const previewUrls = selectedFiles.map((file) => URL.createObjectURL(file));
//       setPreviews(previewUrls);
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     let imageUrls = previews; // Keep previous ones if no new images uploaded

//     if (imageFiles.length > 0) {
//       const formDataImages = new FormData();
//       imageFiles.forEach((file) => formDataImages.append('images', file));
//       const uploaded = await uploadImagesToLocal(formDataImages);
//       imageUrls = uploaded.images;
//     }

//     // Reorder images: move selected cover first
//     if (imageUrls.length > 1 && coverIndex !== 0) {
//       const reordered = [imageUrls[coverIndex], ...imageUrls.filter((_, idx) => idx !== coverIndex)];
//       imageUrls = reordered;
//     }

//     await updateProduct(id, { ...formData, images: imageUrls });
//     onClose();
//   };

//   if (!productData) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white dark:bg-gray-900 p-6 rounded-lg max-w-5xl w-full shadow-lg flex flex-col">
//         <h2 className="text-2xl font-bold mb-6 text-primary">Edit Product</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div className="grid grid-cols-2 gap-4">
//             <input name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Name" required className="w-full p-2 border rounded" />
//             <input name="category" type="text" value={formData.category} onChange={handleChange} placeholder="Category" required className="w-full p-2 border rounded" />
//             <input name="tags" type="text" value={formData.tags} onChange={handleChange} placeholder="Tags" className="w-full p-2 border rounded" />
//             <input name="stock" type="number" value={formData.stock} onChange={handleChange} placeholder="Stock" required className="w-full p-2 border rounded" />
//             <input name="price" type="number" step="0.01" value={formData.price} onChange={handleChange} placeholder="Price" required className="w-full p-2 border rounded" />
//           </div>

//           <input name="images" type="file" multiple accept="image/*" onChange={handleChange} className="w-full p-2 border rounded" />

//           {/* Image previews */}
//           {previews.length > 0 && (
//             <div className="flex gap-4 overflow-x-auto py-4">
//               {previews.map((src, index) => (
//                 <div
//                   key={index}
//                   className={`relative h-40 w-32 flex-shrink-0 rounded overflow-hidden border-2 ${coverIndex === index ? 'border-blue-600' : 'border-gray-300'}`}
//                   onClick={() => setCoverIndex(index)}
//                 >
//                   <img src={src} alt={`Preview ${index}`} className="object-cover h-full w-full cursor-pointer" />
//                   {coverIndex === index && (
//                     <div className="absolute bottom-0 w-full bg-blue-600 text-white text-center text-xs p-1">
//                       Cover
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}

//           <div className="flex gap-4 mt-4">
//             <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">Update Product</button>
//             <button type="button" onClick={onClose} className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-600">Cancel</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdateProduct;





// import React, { useEffect, useState } from 'react';
// import { getProductById, updateProduct, uploadImagesToLocal } from '../../../services/admin/productService';

// const UpdateProduct = ({ id, onClose }) => {
//   const [productData, setProductData] = useState(null);
//   const [formData, setFormData] = useState({
//     name: '',
//     category: '',
//     tags: '',
//     stock: '',
//     price: '',
//     description: '',
//   });
//   const [imageFiles, setImageFiles] = useState([]);
//   const [previews, setPreviews] = useState([]);
//   const [coverIndex, setCoverIndex] = useState(0);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       const data = await getProductById(id);
//       setProductData(data);
//       setFormData({
//         name: data.name,
//         category: data.category,
//         tags: data.tags,
//         stock: data.stock,
//         price: data.price,
//         description: data.description || '',
//       });

//       if (data.images && data.images.length > 0) {
//         setPreviews(data.images);
//       }
//     };
//     if (id) fetchProduct();
//   }, [id]);

//   const handleChange = (e) => {
//     const { name, value, files } = e.target;
//     if (name === 'images') {
//       const selectedFiles = Array.from(files);
//       setImageFiles(selectedFiles);
//       const previewUrls = selectedFiles.map((file) => URL.createObjectURL(file));
//       setPreviews(previewUrls);
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     let imageUrls = previews;

//     if (imageFiles.length > 0) {
//       const formDataImages = new FormData();
//       imageFiles.forEach((file) => formDataImages.append('images', file));
//       const uploaded = await uploadImagesToLocal(formDataImages);
//       imageUrls = uploaded.images;
//     }

//     // Reorder images: put selected cover first
//     if (imageUrls.length > 1 && coverIndex !== 0) {
//       const reordered = [imageUrls[coverIndex], ...imageUrls.filter((_, idx) => idx !== coverIndex)];
//       imageUrls = reordered;
//     }

//     await updateProduct(id, { ...formData, images: imageUrls });
//     onClose();
//   };

//   if (!productData) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//       <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 rounded-lg max-w-5xl w-full shadow-lg overflow-y-auto max-h-[90vh]">
//         <h2 className="text-2xl font-bold mb-6 text-primary">Edit Product</h2>
//         <form onSubmit={handleSubmit} className="space-y-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <input
//               name="name"
//               type="text"
//               value={formData.name}
//               onChange={handleChange}
//               placeholder="Name"
//               required
//               className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600"
//             />
//             <input
//               name="category"
//               type="text"
//               value={formData.category}
//               onChange={handleChange}
//               placeholder="Category"
//               required
//               className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600"
//             />
//             <input
//               name="tags"
//               type="text"
//               value={formData.tags}
//               onChange={handleChange}
//               placeholder="Tags"
//               className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600"
//             />
//             <input
//               name="stock"
//               type="number"
//               value={formData.stock}
//               onChange={handleChange}
//               placeholder="Stock"
//               required
//               className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600"
//             />
//             <input
//               name="price"
//               type="number"
//               step="0.01"
//               value={formData.price}
//               onChange={handleChange}
//               placeholder="Price"
//               required
//               className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600"
//             />
//           </div>

//           <textarea
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             placeholder="Product description"
//             rows={4}
//             className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600"
//           />

//           <input
//             name="images"
//             type="file"
//             multiple
//             accept="image/*"
//             onChange={handleChange}
//             className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-600"
//           />

//           {/* Image previews */}
//           {previews.length > 0 && (
//             <div className="flex gap-4 overflow-x-auto py-4">
//               {previews.map((src, index) => (
//                 <div
//                   key={index}
//                   className={`relative h-40 w-32 flex-shrink-0 rounded overflow-hidden border-2 cursor-pointer ${
//                     coverIndex === index ? 'border-blue-600' : 'border-gray-300 dark:border-gray-600'
//                   }`}
//                   onClick={() => setCoverIndex(index)}
//                 >
//                   <img src={src} alt={`Preview ${index}`} className="object-cover h-full w-full" />
//                   {coverIndex === index && (
//                     <div className="absolute bottom-0 w-full bg-blue-600 text-white text-center text-xs p-1">
//                       Cover
//                     </div>
//                   )}
//                 </div>
//               ))}
//             </div>
//           )}

//           <div className="flex gap-4 mt-4">
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
//             >
//               Update Product
//             </button>
//             <button
//               type="button"
//               onClick={onClose}
//               className="bg-gray-400 text-white px-6 py-2 rounded hover:bg-gray-600"
//             >
//               Cancel
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default UpdateProduct;














import React, { useEffect, useState } from 'react';
import { getProductById, updateProduct, uploadImagesToLocal } from '../../../services/admin/productService';

const UpdateProduct = ({ id, onClose }) => {
  const [productData, setProductData] = useState(null);
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
  const [coverIndex, setCoverIndex] = useState(0);

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
        description: data.description || '',
      });
      if (data.images && data.images.length > 0) {
        setPreviews(data.images);
      }
    };
    if (id) fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'images') {
      const selectedFiles = Array.from(files);
      setImageFiles(selectedFiles);
      const previewUrls = selectedFiles.map((file) => URL.createObjectURL(file));
      setPreviews((prev) => [...prev, ...previewUrls]);
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleImageRemove = (index) => {
    const newPreviews = previews.filter((_, i) => i !== index);
    setPreviews(newPreviews);
    if (index === coverIndex) {
      setCoverIndex(0);
    } else if (index < coverIndex) {
      setCoverIndex((prev) => prev - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrls = previews;

    if (imageFiles.length > 0) {
      const formDataImages = new FormData();
      imageFiles.forEach((file) => formDataImages.append('images', file));
      const uploaded = await uploadImagesToLocal(formDataImages);
      imageUrls = [...imageUrls.filter((url) => !url.startsWith('blob:')), ...uploaded.images];
    }

    // Move selected cover image to first
    if (imageUrls.length > 1 && coverIndex !== 0) {
      imageUrls = [imageUrls[coverIndex], ...imageUrls.filter((_, i) => i !== coverIndex)];
    }

    await updateProduct(id, { ...formData, images: imageUrls });
    onClose();
  };

  if (!productData) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-6 rounded-lg max-w-4xl w-full shadow-lg overflow-y-auto max-h-[95vh]">
        <h2 className="text-2xl font-bold mb-6 text-primary">Edit Product</h2>

        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Basic Information */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Basic Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Product Name"
                required
                className="p-2 border rounded w-full dark:bg-gray-800 dark:border-gray-700"
              />
              <input
                name="category"
                type="text"
                value={formData.category}
                onChange={handleChange}
                placeholder="Category"
                required
                className="p-2 border rounded w-full dark:bg-gray-800 dark:border-gray-700"
              />
              <input
                name="tags"
                type="text"
                value={formData.tags}
                onChange={handleChange}
                placeholder="Tags (comma separated)"
                className="p-2 border rounded w-full dark:bg-gray-800 dark:border-gray-700"
              />
              <input
                name="stock"
                type="number"
                value={formData.stock}
                onChange={handleChange}
                placeholder="Stock Quantity"
                required
                className="p-2 border rounded w-full dark:bg-gray-800 dark:border-gray-700"
              />
              <input
                name="price"
                type="number"
                step="0.01"
                value={formData.price}
                onChange={handleChange}
                placeholder="Price"
                required
                className="p-2 border rounded w-full dark:bg-gray-800 dark:border-gray-700"
              />
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Description</h3>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Detailed description..."
              rows={4}
              className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
            />
          </div>

          {/* Images */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Images</h3>
            <input
              name="images"
              type="file"
              multiple
              accept="image/*"
              onChange={handleChange}
              className="w-full p-2 border rounded dark:bg-gray-800 dark:border-gray-700"
            />
            {previews.length > 0 && (
              <div className="flex gap-4 overflow-x-auto mt-4 py-2">
                {previews.map((src, index) => (
                  <div
                    key={index}
                    className={`relative h-40 w-32 rounded overflow-hidden border-2 ${
                      coverIndex === index ? 'border-blue-600' : 'border-gray-300 dark:border-gray-600'
                    }`}
                  >
                    <img
                      src={src}
                      alt={`Preview ${index}`}
                      onClick={() => setCoverIndex(index)}
                      className="object-cover h-full w-full cursor-pointer"
                    />
                    {coverIndex === index && (
                      <div className="absolute bottom-0 w-full bg-blue-600 text-white text-center text-xs p-1">
                        Cover
                      </div>
                    )}
                    <button
                      type="button"
                      onClick={() => handleImageRemove(index)}
                      className="absolute top-1 right-1 bg-red-600 text-white text-xs px-1 rounded"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-6">
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">
              Update Product
            </button>
            <button type="button" onClick={onClose} className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-700">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
