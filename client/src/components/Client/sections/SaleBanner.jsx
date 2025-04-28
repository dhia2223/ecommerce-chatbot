import React from 'react';
import { Link } from 'react-router-dom';

const SaleBannerSection = () => {
  return (
    <section className="bg-primary text-white py-16">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0">
          <h2 className="text-6xl font-bold mb-4b"><span className="text-8xl text-stone-950">Huge</span> Summer Sale!</h2>
          <p className="text-3xl text-center mb-10">Up to <span className='text-4xl text-lime-500 font-bold mb-4b'>50%</span> off on selected products</p>
          <Link
            to="/products"
            className="bg-white text-primary px-6 py-3 rounded hover:bg-third hover:text-secondary transition"
          >
            Shop Now
          </Link>
        </div>
        <img
          src="http://localhost:3000/assets/products/9f832237-82ca-4576-b550-9da2a58f889a.png" 
          alt="Sale"
          className="w-60 md:min-w-60"
        />
      </div>
    </section>
  );
};

export default SaleBannerSection;
