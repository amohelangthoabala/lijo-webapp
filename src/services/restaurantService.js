import client from '../api/client';

export const getRestaurants = async () => {
  const response = await client.get('/restaurants');
  return response.data;
};
