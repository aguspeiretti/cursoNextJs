"use client";
import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existingProduct = cart.find(
      (product) => product.slug === item.slug && product.size === item.size
    );

    if (existingProduct) {
      setCart((prevCart) => {
        return prevCart.map((product) =>
          product.slug === item.slug && product.size === item.size
            ? { ...product, qty: product.qty + item.qty }
            : product
        );
      });
    } else {
      setCart([...cart, item]);
    }
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
