import { useState, useEffect } from 'react';

export const useCart = () => {
  const [cart, setCart] = useState({
    items: [],
    restaurantId: null,
  });

  // Load cart from localStorage on mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    console.log('Adding to cart:', product);

    if (cart.items.length === 0) {
      // Cart empty — first item sets restaurantId
      setCart({
        items: [product],
        restaurantId: product.restaurant_id,
      });
      return;
    }

    if (cart.restaurantId !== product.restaurant_id) {
      if (
        window.confirm(
          'Your cart has items from a different restaurant. Clear the cart and add this item instead?'
        )
      ) {
        setCart({
          items: [product],
          restaurantId: product.restaurant_id,
        });
      }
      // If user cancels, do nothing.
      return;
    }

    // Same restaurant — update or add
    setCart((prevCart) => {
      const existing = prevCart.items.find((item) => item.id === product.id);

      if (existing) {
        return {
          ...prevCart,
          items: prevCart.items.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + product.quantity }
              : item
          ),
        };
      }

      return {
        ...prevCart,
        items: [...prevCart.items, product],
      };
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const newItems = prevCart.items.filter((item) => item.id !== productId);
      return {
        ...prevCart,
        items: newItems,
        restaurantId: newItems.length === 0 ? null : prevCart.restaurantId,
      };
    });
  };

  const clearCart = () => {
    setCart({
      items: [],
      restaurantId: null,
    });
  };

  return {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
  };
};
