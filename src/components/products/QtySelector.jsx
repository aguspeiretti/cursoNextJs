"use client";
import React, { useState } from "react";
import Counter from "../Counter";
import Size from "../Size";
import { useCartContext } from "../context/CartContext";
import Swal from "sweetalert2";

const QtySelector = ({ item }) => {
  const { addToCart, cart } = useCartContext();

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  const handleAdd = () => {
    if (qty > 0 && size !== "") {
      addToCart({ ...item, qty, size });
      Swal.fire({
        toast: true,
        icon: "success",
        title: "Producto Agregado",
        animation: false,
        position: "top-right",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Debes elegir un talle y una cantidad",
      });
    }
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
        className="w-2/6 h-8 rounded-xl bg-sky-900 text-white"
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default QtySelector;
