"use client";

import React, { useState } from "react";

export const ContactForm = () => {
  const [values, setValues] = useState({
    email: "",
    text: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    await fetch(`http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/routes.contact/`, {
      method: "POST",
      body: JSON.stringify(values),
    });
  };

  return (
    <>
      <div className="w-full h-full ">
        <div className="w-full h-12 flex justify-center items-center text-2xl text-white uppercase font-extrabold italic">
          <h1>Dejanos tu consulta</h1>
        </div>

        <div className="flex w-full h-full">
          <form
            className="flex flex-col w-1/2 h-full mt-20 items-center"
            onSubmit={handleSubmit}
          >
            <input
              className="w-1/2 h-10 rounded-2xl pl-8"
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
            />
            <textarea
              className="mt-10 w-2/3 h-1/2 rounded-2xl pl-8 pt-4"
              required
              type="text"
              name="text"
              placeholder="Escribi tu mensaje"
              onChange={handleChange}
            />
            <button
              className="w-24 p-2 h-8 bg-sky-900 rounded-xl text-md mt-6 flex items-center justify-center text-white "
              type="submit"
            >
              Enviar
            </button>
          </form>
          <div className="w-1/2 h-full flex justify-start items-center mt-20 flex-col "></div>
        </div>
      </div>
    </>
  );
};
