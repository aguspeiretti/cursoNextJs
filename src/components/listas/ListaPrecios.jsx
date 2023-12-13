import React from "react";

const ListaPrecios = async ({ categoria }) => {
  const items = await fetch(
    `http://${process.env.VERCEL_URL}/api/routes.products/${categoria}`,
    {
      cache: "no-store",
      next: {
        tags: ["products"],
      },
    }
  ).then((r) => r.json());

  return (
    <div className="w-full h-full">
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="uppercase">
            <th className="px-4 py-2 text-left">Título</th>
            <th className="px-4 py-2 text-center">Precio</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr
              key={item.slug}
              className={index % 2 === 0 ? "bg-gray-300" : "bg-white h-10"}
            >
              <td className="px-4 py-2">{item.title}</td>
              <td className="px-4 py-2 text-center">$ {item.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaPrecios;
