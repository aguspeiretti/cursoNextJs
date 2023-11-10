"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const links = [
  { label: "Jockey", href: "/ListasDePrecio/Jockey" },
  { label: "Ninos-argentinos", href: "/ListasDePrecio/Ninos-argentinos" },
  { label: "Monjas-azules", href: "/ListasDePrecio/Monjas-azules" },
  { label: "Victorino", href: "/ListasDePrecio/Victorino" },
  { label: "Be-happy", href: "/ListasDePrecio/Be-happy" },
];

const CategoriesMenuListas = () => {
  const pathname = useParams();

  return (
    <div className="flex flex-col">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className={`${
            pathname.categorias === link.label
              ? "font-semibold text-orange-600  "
              : ""
          }text-lg py-2`}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default CategoriesMenuListas;
