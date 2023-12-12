"use client";
import React, { useState, useEffect } from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db, storage } from "@/app/firebase/config";
import Swal from "sweetalert2";
import BotonVolver from "../BotonVolver";

const updateProduct = async (slug, values) => {
  const docRef = doc(db, "products", slug);
  return updateDoc(docRef, {
    title: values.title,
    description: values.description,
    inStock: Number(values.inStock),
    price: Number(values.price),
    type: values.type,
  }).then(() => {
    console.log("Producto actualizado");
  });
};

const EditForm = ({ item }) => {
  const [values, setValues] = useState({
    title: "",
    type: "",
    price: 0,
    inStock: 0,
    description: "",
  });

  useEffect(() => {
    // Al cargar el componente, establecer los valores iniciales
    setValues({
      title: item.title || "",
      type: item.type || "",
      price: item.price || 0,
      inStock: item.inStock || 0,
      description: item.description || "",
    });
  }, [item]);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct(item.slug, values);
    Swal.fire({
      toast: true,
      icon: "success",
      title: "Producto modificado",
      animation: false,
      position: "top-right",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
    });
  };

  return (
    <div className="w-full h-full bg-zinc-700 overflow-hidden">
      <div className="w-full h-full bg-zinc-700">
        <div className="w-1/2 h-12 flex justify-center items-center text-2xl text-white uppercase font-extrabold italic">
          <h1>Modificar Producto</h1>
          <div className="absolute right-10">
            <BotonVolver />
          </div>
        </div>

        <div className="flex w-full h-full ">
          <form
            className="flex flex-col w-1/2 h-full mt-20 items-center"
            onSubmit={handleSubmit}
          >
            <label className="text-white">Titulo: </label>
            <input
              className="w-1/2 h-10 rounded-2xl pl-8"
              type="text"
              value={values.title}
              required
              name="title"
              placeholder="Title"
              onChange={handleChange}
            />
            <label className="text-white">Tipo: </label>
            <input
              className="w-1/2 h-10 rounded-2xl pl-8"
              type="text"
              value={values.type}
              required
              name="type"
              placeholder="Tipo"
              onChange={handleChange}
            />
            <label className="text-white">Precio: </label>
            <input
              className="w-1/2 h-10 rounded-2xl pl-8"
              type="number"
              value={values.price}
              required
              name="price"
              placeholder="Precio"
              onChange={handleChange}
            />
            <label className="text-white">Stock: </label>
            <input
              className="w-1/2 h-10 rounded-2xl pl-8"
              type="number"
              value={values.inStock}
              required
              name="inStock"
              placeholder="Stock"
              onChange={handleChange}
            />
            <label className="text-white">Descripcion: </label>
            <input
              className="w-1/2 h-10 rounded-2xl pl-8"
              type="text"
              value={values.description}
              required
              name="description"
              placeholder="Descripcion"
              onChange={handleChange}
            />
            <label className="text-white">Imagen: </label>
            <input
              className="w-1/2 h-10 rounded-2xl pl-8"
              type="file"
              name="image"
            />
            <button
              className="w-24 p-2 h-8 bg-orange-500 rounded-xl text-md mt-6 flex items-center justify-center text-white "
              type="submit"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditForm;
