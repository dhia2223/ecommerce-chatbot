import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Client/sections/Navbar';
import SearchBar from '../../components/Client/SearchBar';
import ProductCard from '../../components/Client/Product/ProductCard';
import { getProducts } from '../../services/Client/productService';
// import ChatbotButton from '../../components/Client/Chatbot/ChatbotButton';
import { useNavigate } from 'react-router-dom';

const Products = () => {
const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error("Failed to fetch products", err);
      }
    };
    fetchProducts();
  }, []);

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-gray-50 dark:bg-four text-gray-800 dark:text-white min-h-screen transition duration-300">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Explore Our <span className="text-primary">Products</span>
        </h1>
        <div className="mb-8">
          <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Available Products</h2>
        <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> 
          {filtered.map(product => (
            <div
                key={product.id}
                onClick={() => navigate(`/product/${product.id}`)}
                className="cursor-pointer"
            >
                <ProductCard product={product} />
            </div>
          ))}
        </div>
        {/* <ChatbotButton /> */}
      </div>

    </div>
  );
};

export default Products;
