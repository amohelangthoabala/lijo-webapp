// hooks/useOrders.js
import { useQuery } from '@tanstack/react-query';
import { getOrders } from '../services/orderService';

export const useOrders = () => {
  return useQuery({
    queryKey: ['orders'],
    queryFn: getOrders,
  });
};
