"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import BotonEliminar from "../BotonEliminar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const ProductTable = () => {
  // Creamos un estado para guardar los items y otro para indicar si están cargados
  const [items, setItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Usamos useEffect para hacer el fetch cuando el componente se monta
  useEffect(() => {
    fetch(`http://${process.env.VERCEL_URL}/api/routes.products/Todos`, {
      cache: "no-store",
      next: {
        tags: ["products"],
      },
    })
      .then((r) => r.json())
      .then((data) => {
        // Actualizamos el estado con los datos y cambiamos isLoaded a true
        setItems(data);
        setIsLoaded(true);
      });
  }, []);

  // Si los datos no están cargados, podemos devolver null o algún componente de carga
  if (!isLoaded) {
    return null;
    // o return <Loading />;
  }

  // Si los datos están cargados, podemos ordenarlos y renderizar el componente normalmente
  const sortedItems = items.sort((a, b) => a.type.localeCompare(b.type));

  return (
    <div className="w-full ">
      <h1 className="w-full h-12 flex justify-start pl-10 items-center text-lg text-zinc-700 uppercase font-extrabold italic">
        Listado de productos
      </h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="px-4 py-2 text-left">Título</th>
            <th className="px-4 py-2 text-left">Slug</th>
            <th className="px-4 py-2 text-left">Tipo</th>
            <th className="px-4 py-2 text-left">Precio</th>
            <th className="px-4 py-2 text-left">En Stock</th>
            <th className="px-4 py-2 text-left">Imagen</th>
            <th className="px-4 py-2 ">Panel</th>
          </tr>
        </thead>
        <tbody>
          {sortedItems.map((product, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-200" : "bg-white h-10"}
            >
              <td className="px-4 py-2">{product.title}</td>
              <td className="px-4 py-2">{product.slug}</td>
              <td className="px-4 py-2">{product.type}</td>
              <td className="px-4 py-2 text-center">{product.price}</td>
              <td className="px-4 py-2 text-center">{product.inStock}</td>
              <td className="px-4 py-2">
                <img width={50} src={product.image} alt={product.title} />
              </td>
              <td className="flex h-20 justify-around items-center ">
                <Link href={`/admin/edit/${product.slug}`}>
                  <button className="w-8 h-8 text-center bg-orange-500 rounded-lg  text-white text-sm  ">
                    <FontAwesomeIcon icon={faPencil} />
                  </button>
                </Link>
                <BotonEliminar slug={product.slug} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
