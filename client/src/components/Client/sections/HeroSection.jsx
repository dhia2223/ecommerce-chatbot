import React from 'react';


const HeroSection = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center">
        {/* Left content */}
        <div className="flex-1 mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white leading-tight mb-4">
            Beats Solo <br /> <span className="text-primary">Wireless</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.
          </p>
          <button className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg transition">
            Shop by Category
          </button>
        </div>

        {/* Right image */}
        <div className="flex-1 flex justify-center">
          <img
            src="http://localhost:3000/assets/products/ec35aaf8-61e9-42da-9c9d-eff8623be65b.png"
            alt="Headphone"
            className="w-72 md:min-w-96"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
