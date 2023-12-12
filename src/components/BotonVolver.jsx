"use client";
import React from "react";
import { useRouter } from "next/navigation";

const BotonVolver = () => {
  const router = useRouter();

  return (
    <button
      className="flex items-center bg-orange-600 p-2 text-sm font-normal rounded-lg"
      onClick={() => router.back()}
    >
      <p className="mr-2">Volver</p>
      <i class="fa-solid fa-reply-all"></i>
    </button>
  );
};

export default BotonVolver;
