"use client";
import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import { db, storage } from "@/app/firebase/config";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const createProduct = async (values, file) => {
  const storageRef = ref(storage, values.slug);
  const fileSnapshot = await uploadBytes(storageRef, file, {
    contentType: "image/jpeg",
  });

  const fileUrl = await getDownloadURL(fileSnapshot.ref);

  const docRef = doc(db, "products", values.slug);
  return setDoc(docRef, { ...values, image: fileUrl }).then(() =>
    console.log("producto agregado")
  );
};

const Create = () => {
  const [values, setValues] = useState({
    title: "",
    slug: "",
    type: "",
    price: 0,
    inStock: 0,
    description: "",
  });

  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const imageFile = e.target.files[0];
    setFile(imageFile);
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createProduct(values, file);
  };

  return (
    <div className="w-full h-full bg-zinc-700">
      <div className="w-full h-full bg-zinc-700">
        <div className="w-full h-12 flex justify-center items-center text-2xl text-white uppercase font-extrabold italic">
          <h1>Crear Producto</h1>
        </div>

        <div className="flex w-full h-full ">
          <form
            className="flex flex-col w-1/2 h-full mt-20 items-center"
            onSubmit={handleSubmit}
          >
            <label className="text-white">Slug: </label>
            <input
              className="w-1/2 h-10 rounded-2xl pl-8"
              type="text"
              value={values.slug}
              required
              name="slug"
              placeholder="Slug"
              onChange={handleChange}
            />

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
              onChange={handleFileChange}
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

export default Create;
