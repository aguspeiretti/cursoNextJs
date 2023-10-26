import { useState } from "react";

function MyAccordionMenu() {
  const [menuOpen, setMenuOpen] = useState(null);

  const toggleMenu = (menu) => {
    if (menuOpen === menu) {
      // Si el menú ya está abierto, ciérralo
      setMenuOpen(null);
    } else {
      // Si el menú está cerrado, ábrelo
      setMenuOpen(menu);
    }
  };

  return (
    <ul className="flex-col w-full h-full items-center">
      <li className="relative group mt-10 w-full m-0">
        <div
          className="cursor-pointer flex justify-center  text-2xl"
          onClick={() => toggleMenu("Colegios")}
        >
          Colegios
        </div>
        {menuOpen === "Colegios" && (
          <ul className="sub-menu w-full flex-colum justify-center left-0 mt-4 p-2 bg-white border rounded-lg shadow-lg text-black  font-normal">
            <li className="py-1 mt-2 transition hover:bg-gray-200 cursor-pointer flex justify-center">
              Jockey Club
            </li>
            <li className="py-1 mt-2 transition hover:bg-gray-200 cursor-pointer text-xl flex justify-center">
              Niños Argentinos
            </li>
            <li className="py-1 mt-2 transition hover:bg-gray-200 cursor-pointer text-xl flex justify-center">
              Monjas Azules
            </li>
            <li className="py-1 mt-2 transition hover:bg-gray-200 cursor-pointer text-xl flex justify-center">
              Victorino
            </li>
            <li className="py-1  transition hover:bg-gray-200 cursor-pointer text-xl flex justify-center">
              Be Happy
            </li>
          </ul>
        )}
      </li>
      <li className="relative group mt-10 w-full m-0">
        <div
          className="cursor-pointer flex justify-center  text-2xl"
          onClick={() => toggleMenu("Empresas")}
        >
          Empresas
        </div>
        {menuOpen === "Empresas" && (
          <ul className="sub-menu w-full flex-colum justify-center left-0 mt-4 p-2 bg-white border rounded-lg shadow-lg text-black  font-normal">
            <li className="py-1  hover-bg-gray-200 cursor-pointer text-xl flex justify-center ">
              Productos
            </li>
          </ul>
        )}
      </li>
      <li className="relative group mt-10 w-full m-0">
        <div
          className="cursor-pointer flex justify-center text-2xl"
          onClick={() => toggleMenu("Preguntas frecuentes")}
        >
          <p> Preguntas frecuentes</p>
        </div>
        {menuOpen === "Preguntas frecuentes" && (
          <ul className="sub-menu w-full flex-colum justify-center left-0 mt-4 p-2 bg-white border rounded-lg shadow-lg text-black  font-normal">
            <li className="py-1  hover-bg-gray-200 cursor-pointer text-xl flex justify-center">
              Lista de precios
            </li>
            <li className="py-1  hover-bg-gray-200 cursor-pointer text-xl flex justify-center">
              Envios
            </li>
            <li className="py-1  hover-bg-gray-200 cursor-pointer text-xl flex justify-center">
              Formas de pago
            </li>
          </ul>
        )}
      </li>
    </ul>
  );
}

export default MyAccordionMenu;
