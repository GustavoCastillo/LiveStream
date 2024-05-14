import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  const moviesList = JSON.parse(localStorage.getItem('moviesList')) || [];
 
  const [cartCount, setCartCount] = useState(moviesList.length);
  const [showMovie, setShowMovie] = useState(false);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const removeFromCart = () => {
    if (cartCount > 0) {
      setCartCount(cartCount - 1);
    }
  };
  const completedPayment = () => {
      setShowMovie(true);
  };

  return (
    <CartContext.Provider value={{ cartCount, addToCart, removeFromCart,showMovie,completedPayment }}>
      {children}
    </CartContext.Provider>
  );
};
