"use client";
import React from "react";
import "../../style/backgrounds.css";
import { useCartContext } from "@/components/context/CartContext";
import Swal from "sweetalert2";

const Carrito = () => {
  const { cart, removeProduct } = useCartContext();

  const eliminarProducto = (item) => {
    removeProduct(item.slug, item.size);
    console.log(item.slug, item.size);
    Swal.fire({
      toast: true,
      icon: "success",
      title: "Producto Eliminado",
      animation: false,
      position: "top-right",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
  };

  return (
    <div className="carrito w-full h-full overflow-hidden">
      <div className="w-full text-3xl text-white p-8 flex flex-col ">
        <h1>Carrito de compras</h1>
      </div>
      <div className="w-full h-full  flex justify-center text-white">
        <div className="w-full h-2/3 overflow-y-scroll barra   ">
          <table className="w-full">
            <thead className="bg-black bg-opacity-50 ">
              <tr>
                <th className="px-4 py-2 text-left ">Título</th>
                <th className="px-4 py-2 text-left">Tipo</th>
                <th className="px-4 py-2 text-center">talle</th>
                <th className="px-4 py-2  text-center ">Precio</th>
                <th className="px-4 py-2  text-center">Cantidad</th>
                <th className="px-4 py-2  text-center">Subtotal</th>
                <th className="px-4 py-2 text-center  ">Eliminar</th>
              </tr>
            </thead>
            <tbody className="">
              {cart.map((product, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-gray-200 bg-opacity-50"
                      : "bg-gray-400 h-10 bg-opacity-50"
                  }
                >
                  <td className="px-4 py-2">{product.title}</td>
                  <td className="px-4 py-2">{product.type}</td>
                  <td className="px-4 py-2 text-center">{product.size}</td>
                  <td className="px-4 py-2 text-center ">{product.price}</td>
                  <td className="px-4 py-2 text-center">{product.qty}</td>
                  <td className="px-4 py-2 text-center">{product.price}</td>
                  <td className="flex h-10 justify-around items-center">
                    <button
                      onClick={() => {
                        eliminarProducto(product);
                      }}
                      className=" w-2/6 h-3/4 bg-sky-900 rounded-lg text-sm   text-white  "
                    >
                      <i className="fa-solid fa-trash-can "></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Carrito;
