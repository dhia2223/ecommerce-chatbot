import api from '../../api';



export const getProducts = async () => {
  const res = await api.get('/products'); // 👈 add /api prefix if you use globalPrefix
  return res.data;
};


// export const uploadProduct = async (formData) => {
//   const token = localStorage.getItem('token'); // or however you store the JWT

//   const data = new FormData();
//   data.append('name', formData.name);
//   data.append('category', formData.category);
//   data.append('tags', formData.tags);
//   data.append('stock', formData.stock);
//   data.append('price', formData.price);
//   data.append('image', formData.image); // 👈 Must match the name used in FileInterceptor

//   console.log(data); // Check the form data before sending

//   const res = await axios.post('http://localhost:3000/products', data, {
//     headers: {
//       'Content-Type': 'multipart/form-data',
//       Authorization: `Bearer ${token}`, // 🔐 include JWT if needed
//     },
//   });

//   return res.data;
// };


///







