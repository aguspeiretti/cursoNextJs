"use client";

import Link from "next/link";
import { useCartContext } from "./context/CartContext";
import Swal from "sweetalert2";

const SideCart = ({ handleMenu, sideOpen }) => {
  const { cart, removeProduct } = useCartContext();

  const eliminarProducto = (item) => {
    removeProduct(item.slug, item.size);
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

  function sumarPreciosEnCarrito(cart) {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
      if (cart[i].price && !isNaN(cart[i].price)) {
        total += cart[i].price * cart[i].qty;
      }
    }

    return total;
  }
  const precioTotal = sumarPreciosEnCarrito(cart);

  return (
    <div
      className={`w-1/4 h-full bg-zinc-800 absolute top-0  text-white font-semibold ease-in duration-300 p-4 z-10 ${
        sideOpen ? "right-0" : "right-[-1000px]"
      }  `}
    >
      <div
        onClick={handleMenu}
        className="cursor-pointer w-full h-10 text-lg flex items-center justify-end pr-8  "
      >
        X
      </div>
      <div className="mb-8">
        <h2>Mi Carrito</h2>
      </div>
      <div className="h-[calc(100%-180px)] overflow-y-scroll barra  ">
        {cart.map((item) => (
          <div
            key={item.title}
            className="flex w-full items-center justify-between"
          >
            <div className="font-light text-xs w-5/6 border-2 border-white mt-4 p-2 rounded-lg text-white">
              <div className="flex flex-col justify-between">
                <div className="flex justify-around">
                  <p>{item.qty}</p>
                  <p>{item.title} </p>
                </div>
                <p>${item.price * item.qty}</p>
              </div>
            </div>
            <div className="w-1/6">
              <button
                onClick={() => eliminarProducto(item)}
                className=" w-4/6 bg-sky-900 rounded-lg p-1 mt-4 ml-2 text-white"
              >
                <i className="fa-solid fa-trash-can "></i>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 flex justify-between items-center w-10/12 ">
        <p>Costo Total : {precioTotal}</p>
        <Link href={"/carrito"}>
          <button
            onClick={handleMenu}
            className="  bg-sky-900 rounded-lg p-1 text-white font-normal"
          >
            Ir al carrito
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SideCart;
