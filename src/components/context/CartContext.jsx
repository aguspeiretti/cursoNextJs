"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };
  const removeProduct = (slug, size) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.filter(
        (product) => !(product.slug === slug && product.size === size)
      );
      return updatedCart;
    });
  };
  return (
    <CartContext.Provider value={{ addToCart, cart, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};
