"use client";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Recuperar el carrito desde el localStorage al cargar la página
    const storedCart = JSON.parse(localStorage.getItem("cart")) ?? [];

    setCart(storedCart);
  }, []);

  useEffect(() => {
    // Guardar el carrito en el localStorage cada vez que cambie
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

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

  const calculateTotalCost = () => {
    return cart.reduce((total, product) => {
      const productPrice = product.price || 0;
      return total + productPrice * product.qty;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{ addToCart, cart, removeProduct, calculateTotalCost }}
    >
      {children}
    </CartContext.Provider>
  );
};
