


export const uploadImageToLocal = async (file) => {
    const token = localStorage.getItem('token');
  
    const formData = new FormData();
    formData.append('image', file);
  
    const res = await fetch('http://localhost:3000/products/upload', {
      method: 'POST',
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
    if (!res.ok) {
      throw new Error('Image upload failed');
    }
  
    const data = await res.json();
    return data.imageUrl;
};
  
  
export const createProduct = async (product) => {
    const token = localStorage.getItem('token');
  
    const parsedProduct = {
      ...product,
      stock: parseInt(product.stock, 10),
      price: parseFloat(product.price),
    };
  
    console.log('Creating product with:', parsedProduct);
  
    const res = await fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(parsedProduct),
    });
  
    if (!res.ok) {
      const errorBody = await res.text();
      console.error('Backend response:', errorBody);
      throw new Error('Failed to create product');
    }
  
    return await res.json();
};
  