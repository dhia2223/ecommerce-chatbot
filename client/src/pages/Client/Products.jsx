import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Client/sections/Navbar';
import SearchBar from '../../components/Client/Product/SearchBar';
import ProductCard from '../../components/Client/Product/ProductCard';
import { getProducts } from '../../services/Client/productService';
// import ChatbotButton from '../../components/Client/Chatbot/ChatbotButton';
import { useNavigate, useLocation } from 'react-router-dom';
import FilterBar from '../../components/Client/Product/FilterBar';


const Products = () => {


  const location = useLocation();


  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');

  // filtre bar
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOption, setSortOption] = useState('');



  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const data = await getProducts();
  //       setProducts(data);
  //       // filtre bar
  //       const uniqueCategories = [...new Set(data.map(p => p.category))];
  //       setCategories(uniqueCategories);
  //     } catch (err) {
  //       console.error("Failed to fetch products", err);
  //     }
  //   };
  //   fetchProducts();
  // }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
        const uniqueCategories = [...new Set(data.map(p => p.category))];
        setCategories(uniqueCategories);
  
        // Check query param
        const queryParams = new URLSearchParams(location.search);
        const categoryParam = queryParams.get('category');
        if (categoryParam) {
          setSelectedCategory(categoryParam);
        }
      } catch (err) {
        console.error("Failed to fetch products", err);
      }
    };
    fetchProducts();
  }, [location.search]);
  
  // const calculateProductScore = (product) => {
  //   if (!product.reviews || product.reviews.length === 0) return 0; // No reviews, score is 0
  //   return product.reviews.reduce((sum, review) => sum + (review.rating || 0), 0);
  // };
  // const calculateProductScore = (product) => {
  //   if (!product.reviews || product.reviews.length === 0) return 0;
  //   const total = product.reviews.reduce((sum, review) => sum + (review.rating || 0), 0);
  //   return total / product.reviews.length;
  // };
  

  // const filtered = products.filter(p =>
  //   p.name.toLowerCase().includes(search.toLowerCase())
  // );

  const filtered = products
  .filter(p => {
    const nameMatch = p.name.toLowerCase().includes(search.toLowerCase());
    const tagsMatch = p.tags
      ? p.tags.toLowerCase().includes(search.toLowerCase())
      : false;
    const categoryMatch = selectedCategory === '' || p.category === selectedCategory;
    return (nameMatch || tagsMatch) && categoryMatch;
  })
  .sort((a, b) => {
    if (sortOption === 'low-high') return a.price - b.price;
    if (sortOption === 'high-low') return b.price - a.price;
    if (sortOption === 'latest') return new Date(b.createdAt) - new Date(a.createdAt);
    if (sortOption === 'most-rated') return b.ratingScore - a.ratingScore;
    // debug log the score
    // console.log('Product A Score:', calculateProductScore(a)); // Debugging line
    // console.log('Product B Score:', calculateProductScore(b)); // Debugging line

    return 0;
  });
  // const filtered = products
  // .filter(p => {
  //   const nameMatch = p.name.toLowerCase().includes(search.toLowerCase());
  //   const tagsMatch = p.tags
  //     ? p.tags.toLowerCase().includes(search.toLowerCase())
  //     : false;
  //   const categoryMatch = selectedCategory === '' || p.category === selectedCategory;
  //   return (nameMatch || tagsMatch) && categoryMatch;
  // })
  // .sort((a, b) => {
  //   if (sortOption === 'low-high') return a.price - b.price;
  //   if (sortOption === 'high-low') return b.price - a.price;
  //   if (sortOption === 'latest') return new Date(b.createdAt) - new Date(a.createdAt);
  //   if (sortOption === 'most-rated') return calculateProductScore(b) - calculateProductScore(a);

  //   if (process.env.NODE_ENV === 'development') {
  //     console.log('Product A Score:', calculateProductScore(a));
  //     console.log('Product B Score:', calculateProductScore(b));
  //   }

  //   return 0;
  // });


  


  return (
    <div className="bg-gray-50 dark:bg-four text-gray-800 dark:text-white min-h-screen transition duration-300">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-6">
          Explore Our <span className="text-primary">Products</span>
        </h1>
        {/* <div className="mb-8">
          <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
        </div> */}
        {/* <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-200 mb-4">Available Products</h2> */}
        <div className="mb-8 flex flex-col gap-4">
          <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
          <FilterBar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            sortOption={sortOption}
            onSortChange={setSortOption}
          />
        </div>

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
