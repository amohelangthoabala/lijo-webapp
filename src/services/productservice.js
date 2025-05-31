import client from '../api/client';

export const getProducts = async (page = 1) => {
  const response = await client.get(`/products?page=${page}`);
  return response.data;
};