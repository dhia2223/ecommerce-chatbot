import api from '../../api';



// export const getProducts = async () => {
//   const res = await api.get('/products'); // 👈 add /api prefix if you use globalPrefix
//   return res.data;
// };



// Get all users
export const getAllUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

// Delete a user
export const deleteUser = async (id) => {
    console.log('Deleting user with ID:', id);
    const response = await api.delete(`/users/${id}`);
    return response.data;
};



// // Get user by ID
// export const getUserById = async (id) => {
//   const response = await axios.get(`${API_URL}/${id}`);
//   return response.data;
// };

// Create a new user
// export const createUser = async (userData) => {
//   const response = await api.post(API_URL, userData);
//   return response.data;
// };

// // Update a user
// export const updateUser = async (id, updatedData) => {
//   const response = await axios.put(`${API_URL}/${id}`, updatedData);
//   return response.data;
// };



export const createUser = async (userData) => {
  const token = localStorage.getItem('token');

  const parsedUser = {
    ...userData,
    name: userData.name.trim(),
    email: userData.email.trim(),
    password: userData.password,
  };

  console.log('Creating user with:', parsedUser);

  try {
    const response = await api.post('/users', parsedUser, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error creating user:', error.response?.data || error.message);
    throw new Error('Failed to create user');
  }
};
