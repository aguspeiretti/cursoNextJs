import React from "react";
import "../../../style/backgrounds.css";

import CategoriesMenuListas from "@/components/listas/CategoriesMenuListas";
import ListaPrecios from "@/components/listas/ListaPrecios";

const ListasDePrecio = ({ params }) => {
  return (
    <div className=" todos bg-zinc-800 w-full h-full">
      <main className="w-full h-full">
        <div className="w-full h-12 flex justify-center items-center text-2xl text-white uppercase font-extrabold italic">
          <h1>{params.categorias}</h1>
        </div>
        <div className=" w-full  h-[calc(100%-3rem)] flex" flex>
          <div className=" w-1/6 h-full p-3">
            <div className="w-full h-full  bg-gray-200 rounded-md flex flex-col  p-8">
              <h1 className="mb-10 text-xl font-bold text-zinc-700">
                Colegios
              </h1>
              <CategoriesMenuListas />
            </div>
          </div>
          <div className=" w-5/6 h-full p-3">
            <div className="barra w-full h-full  bg-zinc-700  bg-opacity-70 rounded-md overflow-y-scroll">
              <ListaPrecios categoria={params.categorias} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ListasDePrecio;
