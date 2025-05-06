import api from '../../api';



export const getProducts = async () => {
  const res = await api.get('/products'); // 👈 add /api prefix if you use globalPrefix
  return res.data;
};


export const getProductById = async (id) => {
  const res = await api.get(`/products/${id}`);
  return res.data;
};









