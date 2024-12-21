import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();


const getCartFromLocalStorage = () => {
  const storedCart = localStorage.getItem('cart');
  return storedCart ? JSON.parse(storedCart) : [];
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(getCartFromLocalStorage()); 
  const [popupMessage, setPopupMessage] = useState('');


  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);


  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      setPopupMessage('Product already in the cart!');
      return;
    }

    setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    setPopupMessage('Product added to the cart!');
  };

  const removeItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    setPopupMessage('Product removed from the cart!');
  };
 
  const updateQuantity = (productId, newQuantity) => {
    setCart((prevCart) =>
      newQuantity === 0
        ? prevCart.filter((item) => item.id !== productId) // Remove item
        : prevCart.map((item) =>
            item.id === productId ? { ...item, quantity: newQuantity } : item
          )
    );
  };

  useEffect(() => {
    if (popupMessage) {
      const timeout = setTimeout(() => setPopupMessage(''), 2000);
      return () => clearTimeout(timeout);
    }
  }, [popupMessage]);

  return (
    <CartContext.Provider value={{ cart, addToCart, popupMessage, removeItem, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
