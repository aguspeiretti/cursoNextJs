"use client";
import React, { useState } from "react";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(null);
  const [rmenu, setRmenu] = useState(false);

  const toggleMenu = (menuItem) => {
    if (menuOpen === menuItem) {
      setMenuOpen(null);
    } else {
      setMenuOpen(menuItem);
    }
  };

  const toggleRmenu = () => {
    setRmenu(!rmenu);
    console.log(rmenu);
  };
  const condicional = rmenu ? "top-14" : "top-[-1000px]";

  return (
    <div className="flex">
      <div className="hidden md:block">
        <ul className="flex">
          <li className="relative group m-4">
            <div
              className="cursor-pointer"
              onClick={() => toggleMenu("Colegios")}
            >
              Colegios
            </div>
            {menuOpen === "Colegios" && (
              <ul className="sub-menu absolute  left-0 mt-4 p-2 bg-white border rounded-lg shadow-lg text-black w-44 font-normal">
                <li className="py-1 transition hover:bg-gray-200 cursor-pointer">
                  Jockey Club
                </li>
                <li className="py-1 transition hover:bg-gray-200 cursor-pointer">
                  Niños Argentinos
                </li>
                <li className="py-1 transition hover:bg-gray-200 cursor-pointer">
                  Monjas Azules
                </li>
                <li className="py-1 transition hover:bg-gray-200 cursor-pointer">
                  Victorino
                </li>
                <li className="py-1 transition hover:bg-gray-200 cursor-pointer">
                  Be Happy
                </li>
              </ul>
            )}
          </li>
          <li className="relative group m-4">
            <div
              className="cursor-pointer"
              onClick={() => toggleMenu("Empresas")}
            >
              Empresas
            </div>
            {menuOpen === "Empresas" && (
              <ul className="sub-menu absolute left-0 mt-4 p-2 bg-white border rounded-lg shadow-lg text-black w-44 font-normal">
                <li className="py-1  hover:bg-gray-200 cursor-pointer ">
                  Productos
                </li>
              </ul>
            )}
          </li>
          <li className="relative group m-4">
            <div
              className="cursor-pointer"
              onClick={() => toggleMenu("Preguntas frecuentes")}
            >
              Preguntas frecuentes
            </div>
            {menuOpen === "Preguntas frecuentes" && (
              <ul className="sub-menu absolute left-0 mt-4 p-2 bg-white border rounded-lg shadow-lg  text-black w-44  font-normal">
                <li className="py-1  hover:bg-gray-200 cursor-pointer">
                  Lista de precios
                </li>
                <li className="py-1  hover:bg-gray-200 cursor-pointer">
                  Envios
                </li>
                <li className="py-1  hover:bg-gray-200 cursor-pointer">
                  Formas de pago
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div className="flex items-center md:hidden">
        <div className=" text-xl">
          <i
            onClick={() => toggleRmenu()}
            className="fa-solid fa-bars pr-4 cursor-pointer "
          ></i>
        </div>
        <div
          className={`menu-abierto absolute ${condicional} left-0 w-full h-full bg-black`}
        ></div>
      </div>
    </div>
  );
};

export default Menu;
