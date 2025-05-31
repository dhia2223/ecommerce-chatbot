import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Client/sections/Navbar';
// import ChatbotButton from '../../components/Client/Chatbot/ChatbotButton';
import ChatbotWidget from '../../components/Client/Chatbot/ChatbotWidget';
import { getProducts } from '../../services/Client/productService';

import HeroSection from '../../components/Client/sections/HeroSection';
import CategoriesSection from '../../components/Client/sections/CategoriesSection';
import FeaturesSection from '../../components/Client/sections/FeaturesSection';
import SaleBanner from '../../components/Client/sections/SaleBanner';
import BestSellerProducts from '../../components/Client/sections/BestSellerProducts';
import NewsletterSection from '../../components/Client/sections/NewsletterSection';
import FooterSection from '../../components/Client/sections/FooterSection';




const Home = () => {
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
      <HeroSection />
      <CategoriesSection />
      <FeaturesSection />
      <SaleBanner />
      <BestSellerProducts products={filtered} />
      <NewsletterSection />
      <FooterSection />
      {/* <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-6 text-center">Best Seller Products</h2>
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
        <BestSellerProducts products={filtered} />
      </div> */}
      {/* <ChatbotButton /> */}
      <ChatbotWidget />
    </div>
  );
};

export default Home;
