import React, { useEffect, useState } from 'react';
import { getAllProducts, deleteProduct } from '../../../services/Admin/productService';
import AdminNavbar from '../../../components/Admin/AdminNavbar';
import ProductNavbar from '../../../components/Admin/ProductNavbar';
import UpdateProduct from './UpdateProduct';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [expandedDescriptions, setExpandedDescriptions] = useState({});

  const fetchProducts = async () => {
    const data = await getAllProducts();
    setProducts(data);
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchProducts();
  };

  const handleEdit = (id) => {
    setSelectedProductId(id);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProductId(null);
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-third dark:bg-four text-gray-900 dark:text-white">
      <AdminNavbar />
      <ProductNavbar />
      <div className="max-w-6xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold mb-4 text-primary">All Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => {
            const firstImage = product.images?.[0];
            const isExpanded = expandedDescriptions[product.id];
            const desc = product.description || '';

            return (
              <div key={product.id} className="border p-4 rounded-lg shadow bg-white dark:bg-gray-800">
                <img
                  src={firstImage || '/placeholder.jpg'}
                  alt={product.name}
                  className="h-40 object-cover w-full rounded mb-3"
                />
                <h3 className="text-lg font-bold">{product.name}</h3>
                <div className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                   Description: {isExpanded ? desc : `${desc.slice(0, 30)}${desc.length > 100 ? '...' : ''}`}
                  </p>
                  <p>Category: {product.category}</p>
                  <p>Price: ${product.price}</p>
                  <p>Stock: {product.stock}</p>
                </div>
                <div className="flex gap-4 mt-3">
                  <button
                    onClick={() => handleEdit(product.id)}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(product.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {isModalOpen && (
        <UpdateProduct id={selectedProductId} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default ProductList;
