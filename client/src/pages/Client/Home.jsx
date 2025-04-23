
// import React, { useEffect, useState } from 'react';
// import Navbar from '../../components/Client/Navbar';
// import SearchBar from '../../components/Client/SearchBar';
// import ProductCard from '../../components/Client/ProductCard';
// import { getProducts } from '../../services/Client/productService';
// import ChatbotButton from '../../components/Client/ChatbotButton';


// const Home = () => {
//   const [products, setProducts] = useState([]);
//   const [search, setSearch] = useState('');

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const data = await getProducts();
//         setProducts(data);
//       } catch (err) {
//         console.error("Failed to fetch products", err);
//       }
//     };
//     fetchProducts();
//   }, []);

//   const filtered = products.filter(p =>
//     p.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <Navbar />
//       <div className="max-w-6xl mx-auto px-4 py-8">
//         <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
//           Find your next <span className="text-blue-600">favorite item.</span>
//         </h1>
//         <div className="mb-8">
//           <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
//         </div>
//         <h2 className="text-2xl font-semibold text-gray-700 mb-4">Featured Products</h2>
//         <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> 
//           {filtered.map(product => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//         </div>
//       <ChatbotButton />
//       </div>
//     </div>
//   );
// };

// export default Home;




import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Client/Navbar';
import SearchBar from '../../components/Client/SearchBar';
import ProductCard from '../../components/Client/ProductCard';
import { getProducts } from '../../services/Client/productService';
import ChatbotButton from '../../components/Client/ChatbotButton';

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
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Find your next <span className="text-primary">favorite item.</span>
        </h1>
        <div className="mb-8">
          <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
        </div>
        <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Featured Products</h2>
        <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"> 
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <ChatbotButton />
      </div>
    </div>
  );
};

export default Home;
