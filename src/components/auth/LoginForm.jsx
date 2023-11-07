"use client";

import Image from "next/image";
import React, { useState } from "react";
import { useAuthContext } from "../context/AuthContext";

export const LoginForm = () => {
  const { registerUser, loginUser } = useAuthContext();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="w-full h-full bg-zinc-700">
        <div className="w-full h-12 flex justify-center items-center text-2xl text-white uppercase font-extrabold italic">
          <h1>Login</h1>
        </div>

        <div className="flex w-full justify-center items-center  ">
          <form
            className="flex flex-col w-1/2 h-full  items-center "
            onSubmit={handleSubmit}
          >
            <input
              className="w-1/2 h-10 rounded-2xl pl-8 mt-8"
              type="email"
              name="email"
              value={values.email}
              placeholder="Email"
              onChange={handleChange}
            />
            <input
              className="w-1/2 h-10 rounded-2xl pl-8 mt-8"
              type="password"
              name="password"
              value={values.password}
              placeholder="Password"
              onChange={handleChange}
            />
            <div className="flex w-full justify-center ">
              <button
                onClick={() => registerUser(values)}
                className="w-24 p-2 h-8 bg-orange-500 rounded-xl text-md mt-6 flex items-center justify-center text-white mr-10 "
              >
                Registrarme
              </button>
              <button
                onClick={() => loginUser(values)}
                className="w-24 p-2 h-8 bg-orange-500 rounded-xl text-md mt-6 flex items-center justify-center text-white "
              >
                Ingresar
              </button>
            </div>
          </form>
          <div className="w-1/2 h-full flex justify-start items-center mt-20 flex-col ">
            <Image
              src={"/logoaku.png"}
              width={400}
              height={400}
              alt="logoAkumal"
            />
            <p className="text-white mt-10 text-2xl">
              Logueate para ingresar al panel de administrador
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
