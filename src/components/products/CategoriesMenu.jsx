"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

const links = [
  { label: "Todos", href: "/colegios/Todos" },
  { label: "Jockey", href: "/colegios/Jockey" },
  { label: "Ninos-argentinos", href: "/colegios/Ninos-argentinos" },
  { label: "Monjas-azules", href: "/colegios/Monjas-azules" },
  { label: "Victorino", href: "/colegios/Victorino" },
  { label: "Be-happy", href: "/colegios/Be-happy" },
];

const CategoriesMenu = () => {
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

export default CategoriesMenu;
