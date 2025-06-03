import { createContext, useContext } from 'react';
import { useCart as createCartHook } from './hooks/useCart';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const cart = createCartHook();
  return (
    <CartContext.Provider value={cart}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
