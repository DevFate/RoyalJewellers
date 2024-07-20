import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);

  useEffect(() => {
    const newSubtotal = cartItems.reduce((acc, item) => acc + parseFloat(item.price.slice(1)) * item.quantity, 0);
    setSubtotal(newSubtotal);
  }, [cartItems]);

  const addToCart = (product) => {
    const existingProduct = cartItems.find(item => item.id === product.id);
    if (existingProduct) {
      setCartItems(cartItems.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const increaseQuantity = (productId) => {
    setCartItems(cartItems.map(item => item.id === productId ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decreaseQuantity = (productId) => {
    const newCart = cartItems.map(item => item.id === productId ? { ...item, quantity: item.quantity - 1 } : item)
      .filter(item => item.quantity > 0);
    setCartItems(newCart);
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, subtotal, addToCart, increaseQuantity, decreaseQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
