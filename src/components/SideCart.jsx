"use client";

import { useCartContext } from "./context/CartContext";

const SideCart = ({ handleMenu, sideOpen }) => {
  const { cart } = useCartContext();

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
      className={`w-1/4 h-full bg-white absolute top-0  text-black ease-in duration-300 p-6 ${
        sideOpen ? "right-0" : "right-[-1000px]"
      }  `}
    >
      <div
        onClick={handleMenu}
        className="cursor-pointer w-full h-10 text-lg flex items-center justify-end  "
      >
        X
      </div>
      <div className="mb-8">
        <h2>Mi Carrito</h2>
      </div>
      <div>
        {cart.map((item) => (
          <div
            key={item.title}
            className="flex w-full items-center justify-between"
          >
            <div className="font-light text-xs w-5/6 border-2 border-zinc-800 mt-4 p-2 rounded-lg">
              <div className="flex justify-between">
                <p>{item.title} </p>
                <p>${item.price * item.qty}</p>
              </div>
            </div>
            <div className="w-1/6">
              <button className=" w-4/6 bg-orange-500 rounded-lg p-1 mt-4 ml-2 text-white">
                <i className="fa-solid fa-trash-can "></i>
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 flex justify-between items-center w-10/12 ">
        <p>Costo Total : {precioTotal}</p>
        <button className=" bg-orange-500 rounded-lg p-1 text-white font-normal">
          Ir al carrito
        </button>
      </div>
    </div>
  );
};

export default SideCart;
