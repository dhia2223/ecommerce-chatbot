import api from '../../api';



export const getProducts = async () => {
  const res = await api.get('/products'); // 👈 add /api prefix if you use globalPrefix
  return res.data;
};









