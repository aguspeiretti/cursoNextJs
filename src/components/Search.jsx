import Image from "next/image";
import React from "react";

const Search = () => {
  return (
    <div className="flex ">
      <div className="relative flex items-center mr-5">
        <input
          className="w-32 h-8 rounded-2xl pl-8 text-black text-xs focus:outline-none  "
          type="text"
          placeholder="Buscar..."
        />
        <i
          className="fa-solid fa-magnifying-glass text-slate-500"
          style={{ position: "absolute", left: 8 }}
        ></i>
      </div>
      <div className="flex justify-center items-center mr-4 text-lg">
        <i class="fa-regular fa-heart mr-6"></i>
        <i class="fa-solid fa-bag-shopping"></i>
      </div>
    </div>
  );
};

export default Search;
