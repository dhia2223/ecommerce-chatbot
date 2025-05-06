
// import React from 'react';

// const ProductCard = ({ product }) => {
//   return (
//     <div className="bg-white dark:bg-four rounded-xl shadow hover:shadow-lg transition p-4 text-gray-800 dark:text-white">
//       <img
//         src={product.imageUrl}
//         alt={product.name}
//         className="w-full h-48 object-cover rounded mb-2"
//       />
//       <h3 className="text-lg font-semibold">{product.name}</h3>

//       <p className="text-primary font-bold mt-1">${product.price}</p>
//       <button className="mt-4 w-full bg-primary text-white py-2 rounded hover:bg-secondary transition">
//         View Details
//       </button>
//     </div>
//   );
// };

// export default ProductCard;



import React from 'react';

const ProductCard = ({ product }) => {
  const coverImage = product.images && product.images.length > 0 ? product.images[0] : '/default-placeholder.png';



  return (
    <div className="bg-white dark:bg-four rounded-xl shadow hover:shadow-lg transition p-4 text-gray-800 dark:text-white">
      <img
        src={coverImage}
        alt={product.name}
        className="w-full h-48 object-cover rounded mb-2"
      />
      <h3 className="text-lg font-semibold">{product.name}</h3>

      <p className="text-primary font-bold mt-1">${product.price}</p>
      <button
        className="mt-4 w-full bg-primary text-white py-2 rounded hover:bg-secondary transition"
      >
        View Details
      </button>
    </div>
  );
};

export default ProductCard;
