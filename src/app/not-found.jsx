"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="bg-red-500 w-full h-full flex flex-col justify-center items-center">
      <div className="w-full h-2/4 flex justify-center items-center">
        <Image src="/logoaku.png" width={200} height={200} alt="logo" />
      </div>
      <div className="w-full h-2/4 flex flex-col items-center ">
        <p className="text-2xl text-center">
          ERROR-404 <br /> Página no encontrada <br /> Disculpe las molestias
        </p>
        <button
          onClick={() => router.back()}
          className="bg-white p-2 rounded-md mt-4"
        >
          Volver
        </button>
      </div>
    </div>
  );
};

export default NotFound;
