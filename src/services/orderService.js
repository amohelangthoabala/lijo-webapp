import client from '../api/client';

export const placeOrder = async (orderData) => {
  const response = await client.post('/orders', orderData);
  return response.data;
};