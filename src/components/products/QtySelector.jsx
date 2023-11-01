"use client";
import React, { useState } from "react";
import Counter from "../Counter";
import Size from "../Size";

const QtySelector = ({ item }) => {
  console.log(item);

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  const handleAdd = () => {};

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
