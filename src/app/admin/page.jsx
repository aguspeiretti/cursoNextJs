import ProductTable from "@/components/admin/ProductTable";
import Link from "next/link";
import React from "react";

const Admin = () => {
  return (
    <div>
      <div className="w-full flex items-center pr-1 ">
        <h1 className="w-full h-12 flex justify-start pl-10 items-center text-2xl text-zinc-900 uppercase font-extrabold italic">
          Panel Administrador
        </h1>
        <Link href={"/admin/create"}>
          <button className="w-24 p-2 h-8 bg-orange-500 rounded-xl text-sm  flex items-center justify-center text-white mt-10 mr-200">
            <p>Crear nuevo</p>
          </button>
        </Link>
      </div>
      <ProductTable />
    </div>
  );
};

export default Admin;
