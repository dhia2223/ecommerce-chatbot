import api from '../../api';

// Upload multiple images to local server
export const uploadImagesToLocal = async (formDataImages) => {
  const token = localStorage.getItem('token');

  try {
    const res = await api.post('/products/upload', formDataImages, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
      },
    });
    return res.data; // Assuming backend returns { images: ["url1", "url2", ...] }
  } catch (error) {
    console.error('Backend response:', error.response?.data || error.message);
    throw new Error('Images upload failed');
  }
};

// Create product
export const createProduct = async (product) => {
  const token = localStorage.getItem('token');

  const parsedProduct = {
    ...product,
    stock: parseInt(product.stock, 10),
    price: parseFloat(product.price),
  };

  console.log('Creating product with:', parsedProduct);

  try {
    const res = await api.post('/products', parsedProduct, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error('Backend response:', error.response?.data || error.message);
    throw new Error('Failed to create product');
  }
};

// Delete product
export const deleteProduct = async (id) => {
  const token = localStorage.getItem('token');

  try {
    const res = await api.delete(`/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error('Backend response:', error.response?.data || error.message);
    throw new Error('Failed to delete product');
  }
};

// Get all products
export const getAllProducts = async () => {
  const token = localStorage.getItem('token');

  try {
    const res = await api.get('/products', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error('Backend response:', error.response?.data || error.message);
    throw new Error('Failed to fetch products');
  }
};

// Get product by id
export const getProductById = async (id) => {
  const token = localStorage.getItem('token');

  try {
    const res = await api.get(`/products/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error('Backend response:', error.response?.data || error.message);
    throw new Error('Failed to fetch product');
  }
};

// Update product
export const updateProduct = async (id, product) => {
  const token = localStorage.getItem('token');

  const parsedProduct = {
    ...product,
    stock: parseInt(product.stock, 10),
    price: parseFloat(product.price),
  };

  console.log('Updating product with:', parsedProduct);

  try {
    const res = await api.patch(`/products/${id}`, parsedProduct, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return res.data;
  } catch (error) {
    console.error('Backend response:', error.response?.data || error.message);
    throw new Error('Failed to update product');
  }
};
