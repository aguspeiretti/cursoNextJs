import Image from "next/image";
import React from "react";
import Menu from "./Menu";

const Nav = () => {
  return (
    <div className="w-full bg-red-500 h-14 flex  items-center p-4 font-mont font-extrabold italic text-white justify-between ">
      <p className="text-lg md:text-2xl">AKUMAL UNIFORMES</p>
      <div>
        <Menu />
      </div>
    </div>
  );
};

export default Nav;
