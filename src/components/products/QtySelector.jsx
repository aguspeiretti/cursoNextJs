"use client";
import React, { useState } from "react";
import Counter from "../Counter";
import Size from "../Size";
import { useCartContext } from "../context/CartContext";

const QtySelector = ({ item }) => {
 

  const {addToCart , cart} = useCartContext()

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  const handleAdd = () => {
    addToCart({...item , qty ,size})
  };
  
 
  return (
    <div>
      <div className="mt-4 mb-4">
        <Counter max={item.inStock} quantity={qty} setCounter={setQty} />
      </div>
      <div className="mb-8">
        <Size size={size} setSize={setSize} />
      </div>
      <button
        onClick={() => {
          handleAdd();
        }}
        className="w-2/6 h-8 rounded-xl bg-orange-500 text-white"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default QtySelector;
