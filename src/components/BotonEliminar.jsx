"use client";
import React from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "@/app/firebase/config";
import Swal from "sweetalert2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

const deleteProduct = async ({ slug }) => {
  const result = await Swal.fire({
    title: "¿Estás seguro?",
    text: "Esta acción eliminará el producto de forma permanente.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Sí, eliminarlo",
    cancelButtonText: "Cancelar",
  });

  if (result.isConfirmed) {
    const docRef = doc(db, "products", slug);
    await deleteDoc(docRef);
    console.log("Producto eliminado:", slug);
    Swal.fire("Eliminado", "El producto ha sido eliminado.", "success");
  } else {
    console.log("Eliminación cancelada.");
  }
};

const BotonEliminar = (slug) => {
  return (
    <button
      onClick={() => deleteProduct(slug)}
      className=" w-8 h-8  bg-orange-500 rounded-lg text-sm   text-white  "
    >
      <FontAwesomeIcon icon={faTrashCan} />
    </button>
  );
};

export default BotonEliminar;
