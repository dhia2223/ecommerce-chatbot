// import React, { useEffect, useState } from 'react';
// import { getAllProducts, deleteProduct } from '../../../services/admin/productService';
// import AdminNavbar from '../../../components/Admin/AdminNavbar';
// import ProductNavbar from '../../../components/Admin/ProductNavbar';
// import { Link } from 'react-router-dom';

// const ProductList = () => {
//   const [products, setProducts] = useState([]);

//   const fetchProducts = async () => {
//     const data = await getAllProducts();
//     setProducts(data);
//   };

//   const handleDelete = async (id) => {
//     await deleteProduct(id);
//     fetchProducts(); // Refresh after deletion
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   return (
//     <div className="min-h-screen bg-third dark:bg-four text-gray-900 dark:text-white">
//       <AdminNavbar />
//       <ProductNavbar />
//       <div className="max-w-6xl mx-auto py-8 px-4">
//         <h2 className="text-2xl font-bold mb-4 text-primary">All Products</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//           {products.map((product) => (
//             <div key={product.id} className="border p-4 rounded shadow bg-white dark:bg-gray-800">
//               <img src={product.imageUrl} alt={product.name} className="h-40 object-cover w-full mb-2" />
//               <h3 className="text-lg font-bold">{product.name}</h3>
//               <p>Category: {product.category}</p>
//               <p>Price: ${product.price}</p>
//               <p>Stock: {product.stock}</p>
//               <div className="flex gap-2 mt-2">
//                 <Link to={`/admin/products/update/${product.id}`} className="text-blue-500">Edit</Link>
//                 <button onClick={() => handleDelete(product.id)} className="text-red-500">Delete</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductList;






import React, { useEffect, useState } from 'react';
import { getAllProducts, deleteProduct } from '../../../services/admin/productService';
import AdminNavbar from '../../../components/Admin/AdminNavbar';
import ProductNavbar from '../../../components/Admin/ProductNavbar';
import UpdateProduct from './UpdateProduct'; // Import the UpdateProduct component
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null); // State to track the selected product for editing
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const fetchProducts = async () => {
    const data = await getAllProducts();
    setProducts(data);
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchProducts(); // Refresh after deletion
  };

  const handleEdit = (id) => {
    setSelectedProductId(id); // Set the selected product ID
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedProductId(null); // Reset the selected product ID
    fetchProducts(); // Refresh the product list after editing
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded shadow bg-white dark:bg-gray-800">
              <img src={product.imageUrl} alt={product.name} className="h-40 object-cover w-full mb-2" />
              <h3 className="text-lg font-bold">{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price}</p>
              <p>Stock: {product.stock}</p>
              <div className="flex gap-2 mt-2">
                <button onClick={() => handleEdit(product.id)} className="text-blue-500">Edit</button>
                <button onClick={() => handleDelete(product.id)} className="text-red-500">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && (
        <UpdateProduct
          id={selectedProductId} // Pass the selected product ID to the modal
          onClose={handleCloseModal} // Pass the close handler to the modal
        />
      )}
    </div>
  );
};

export default ProductList;
