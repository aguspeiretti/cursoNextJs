"use client";
import React, { useState } from "react";
import MyAccordionMenu from "./MyAccordionMenu";
import Link from "next/link";

const Menu = () => {
  return (
    <div className="flex">
      <div className="hidden md:block">
        <ul className="flex">
          <Link href={"/colegios/Todos"}>
            <li className="relative group m-4">
              <div className="cursor-pointer">Colegios</div>
            </li>
          </Link>
          {/* <li className="relative group m-4">
            <div className="cursor-pointer">Empresas</div>
          </li> */}
          <Link href={"/ListasDePrecio/Jockey"}>
            <li className="relative group m-4">
              <div className="cursor-pointer">Listas de precios</div>
            </li>{" "}
          </Link>
          <Link href={"/contacto/contacto"}>
            <li className="relative group m-4">
              <div className="cursor-pointer">Contacto</div>
            </li>
          </Link>
        </ul>
      </div>
      <div className="flex items-center ">
        <div className=" text-xl md:hidden">
          <i className="fa-solid fa-bars pr-4 cursor-pointer  font-bold  "></i>
        </div>
      </div>
    </div>
  );
};

export default Menu;
