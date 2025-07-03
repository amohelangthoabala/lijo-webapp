import client from '../api/client';

export const placeOrder = async (orderData) => {
  const response = await client.post('/orders', orderData);
  return response.data;
};

export const getOrders = async () => {
  const response = await client.get('/orders');
  return response.data;
};