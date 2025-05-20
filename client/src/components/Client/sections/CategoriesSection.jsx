import React from 'react';
import { useNavigate } from 'react-router-dom';





const categories = [
  {
    title: "Enjoy With",
    highlight: "EARPHONE",
    color: "bg-black",
    image: "http://localhost:3000/assets/products/c4dc0c96-b285-47a0-b254-9bbc8e52f9b6.png",
  },
  {
    title: "Trend Wear",
    highlight: "GADGET",
    color: "bg-yellow-400",
    image: "http://localhost:3000/assets/products/0852c236-625e-4d6d-afc4-cd7b68b4475b.png",
  },
  {
    title: "Trend Devices",
    highlight: "LAPTOP",
    color: "bg-red-400",
    image: "http://localhost:3000/assets/products/b95faccd-0ce0-4be1-8125-289b80329e92.png",
  },
  {
    title: "Best Gaming",
    highlight: "CONSOLE",
    color: "bg-gray-200",
    image: "http://localhost:3000/assets/products/312a2f5f-a018-4fc9-82b1-910ac2f93dd9.png",
  },
  {
    title: "Play Game",
    highlight: "OCULUS",
    color: "bg-green-400",
    image: "http://localhost:3000/assets/products/59ee963e-46c3-40c2-8681-cf7f2405e930.png",
  },
  {
    title: "New Amazon",
    highlight: "SPEAKER",
    color: "bg-blue-400",
    image: "http://localhost:3000/assets/products/0a63414a-ee8c-4eb7-9d1d-a5ae95d4204c.png",
  },
];

const CategoriesSection = () => {
  const navigate = useNavigate();
  return (
    <section className="py-12">
      <div className="h-full max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-2 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`${cat.color} rounded-lg p-6 flex flex-col justify-between text-white`}
          >
            <div>
              <h3 className="text-lg font-bold">{cat.title}</h3>
              <h2 className="text-xl md:text-2xl font-extrabold">{cat.highlight}</h2>
            </div>
            <div className="flex justify-center">
              <img
                src={cat.image}
                alt={cat.highlight}
                className="max-h-32 w-auto object-contain"
              />
            </div>
            <button
              onClick={() => navigate(`/products?category=${encodeURIComponent(cat.highlight)}`)}
              className="bg-white text-black font-semibold py-1 px-3 rounded hover:bg-gray-200 transition"
            >
              Browse
            </button>
          </div>
        ))}
      </div>
    </section>

  );
};

export default CategoriesSection;
