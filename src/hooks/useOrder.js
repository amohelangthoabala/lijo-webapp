import { useMutation } from '@tanstack/react-query';
import { placeOrder } from '../services/orderService';

export const useOrder = () => {
  return useMutation({
    mutationFn: placeOrder,
  });
};