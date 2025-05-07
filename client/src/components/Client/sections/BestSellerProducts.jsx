import React, { useEffect, useState } from 'react';
import ProductCard from '../Product/ProductCard';
import { getProducts } from '../../../services/Client/productService';
import { useNavigate } from 'react-router-dom';

const BestSellerSection = () => {
  const [bestSellers, setBestSellers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBestSellers = async () => {
      try {
        const data = await getProducts();
        // Just take first 4-8 products for demo; later you can filter by actual "bestSeller" field if you have
        setBestSellers(data.slice(0, 4));
      } catch (err) {
        console.error('Failed to fetch products', err);
      }
    };
    fetchBestSellers();
  }, []);

  return (
    <section className="py-16 bg-third dark:bg-four">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-four dark:text-white mb-12">
          Best Selling Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {bestSellers.map((product) => (
            // <ProductCard key={product.id} product={product} />
            <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="cursor-pointer"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellerSection;
