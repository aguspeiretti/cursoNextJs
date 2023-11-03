"use client";
import React, { useState } from "react";
import MyAccordionMenu from "./MyAccordionMenu";
import Link from "next/link";

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

  const closeMenu = () => {
    setMenuOpen(null);
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
              onMouseOver={() => toggleMenu("Colegios")}
            >
              Colegios
            </div>

            {menuOpen === "Colegios" && (
              <ul
                onMouseLeave={closeMenu}
                className="sub-menu absolute  left-0 mt-4 p-2 bg-white border rounded-lg shadow-lg text-black w-44 font-normal"
              >
                <Link href={"/colegios/Todos"}>
                  <li
                    onClick={closeMenu}
                    className="py-1 transition hover:bg-gray-200 cursor-pointer"
                  >
                    Todos
                  </li>
                </Link>
                <Link href={"/colegios/Jockey"}>
                  <li
                    onClick={closeMenu}
                    className="py-1 transition hover:bg-gray-200 cursor-pointer"
                  >
                    Jockey Club
                  </li>
                </Link>
                <Link href={"/colegios/Ninos-argentinos"}>
                  <li
                    onClick={closeMenu}
                    className="py-1 transition hover:bg-gray-200 cursor-pointer"
                  >
                    Niños Argentinos
                  </li>
                </Link>
                <Link href={"/colegios/Monjas-azules"}>
                  <li
                    onClick={closeMenu}
                    className="py-1 transition hover:bg-gray-200 cursor-pointer"
                  >
                    Monjas Azules
                  </li>
                </Link>
                <Link href={"/colegios/Victorino"}>
                  <li
                    onClick={closeMenu}
                    className="py-1 transition hover:bg-gray-200 cursor-pointer"
                  >
                    Victorino
                  </li>
                </Link>
                <Link href={"/colegios/Be-happy"}>
                  <li
                    onClick={closeMenu}
                    className="py-1 transition hover:bg-gray-200 cursor-pointer"
                  >
                    Be Happy
                  </li>
                </Link>
              </ul>
            )}
          </li>
          <li className="relative group m-4">
            <div
              className="cursor-pointer"
              onMouseOver={() => toggleMenu("Empresas")}
            >
              Empresas
            </div>

            {menuOpen === "Empresas" && (
              <ul
                onMouseLeave={closeMenu}
                className="sub-menu absolute left-0 mt-4 p-2 bg-white border rounded-lg shadow-lg text-black w-44 font-normal"
              >
                <Link href={"/empresas/productos"}>
                  <li
                    onClick={closeMenu}
                    className="py-1  hover:bg-gray-200 cursor-pointer "
                  >
                    Productos
                  </li>
                </Link>
              </ul>
            )}
          </li>
          <li className="relative group m-4">
            <div
              className="cursor-pointer"
              onMouseOver={() => toggleMenu("Preguntas frecuentes")}
            >
              Preguntas frecuentes
            </div>
            {menuOpen === "Preguntas frecuentes" && (
              <ul
                onMouseLeave={closeMenu}
                className="sub-menu absolute left-0 mt-4 p-2 bg-white border rounded-lg shadow-lg  text-black w-44  font-normal"
              >
                <Link href={"/preguntas/lista-de-precios"}>
                  <li
                    onClick={closeMenu}
                    className="py-1  hover:bg-gray-200 cursor-pointer"
                  >
                    Lista de precios
                  </li>
                </Link>
                <Link href={"/preguntas/envios"}>
                  <li
                    onClick={closeMenu}
                    className="py-1  hover:bg-gray-200 cursor-pointer"
                  >
                    Envios
                  </li>
                </Link>
                <Link href={"/preguntas/pagos"}>
                  <li
                    onClick={closeMenu}
                    className="py-1  hover:bg-gray-200 cursor-pointer"
                  >
                    Formas de pago
                  </li>
                </Link>
              </ul>
            )}
          </li>
          <li className="relative group m-4">
            <div
              className="cursor-pointer"
              onMouseOver={() => toggleMenu("Contacto")}
            >
              Contacto
            </div>

            {menuOpen === "Contacto" && (
              <ul
                onMouseLeave={closeMenu}
                className="sub-menu absolute left-0 mt-4 p-2 bg-white border rounded-lg shadow-lg text-black w-44 font-normal"
              >
                <Link href={"/contacto/contacto"}>
                  <li
                    onClick={closeMenu}
                    className="py-1  hover:bg-gray-200 cursor-pointer "
                  >
                    Contacto
                  </li>
                </Link>
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div className="flex items-center ">
        <div className=" text-xl md:hidden">
          <i
            onClick={() => toggleRmenu()}
            className="fa-solid fa-bars pr-4 cursor-pointer  font-bold  "
          ></i>
        </div>
        <div
          className={`menu-abierto absolute ${condicional} left-0 w-full h-[calc(100vh-3.5rem)] bg-zinc-900 `}
        >
          <MyAccordionMenu />
        </div>
      </div>
    </div>
  );
};

export default Menu;
