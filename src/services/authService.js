import client from '../api/client';

export const registerUser = async (userData) => {
  const response = await client.post('/auth/register', userData);
  return response.data;
};

export const loginUser = async (credentials) => {
  const response = await client.post('/auth/login', credentials);
  return response.data;
};

export const logoutUser = async () => {
  const response = await client.post('/auth/logout');
  return response.data;
};
