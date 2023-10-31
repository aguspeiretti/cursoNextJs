import Image from "next/image";
import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import Search from "./Search";

const Nav = () => {
  return (
    <div className="flex items-center justify-between w-full bg-zinc-900 h-14 p-4 font-mont font-extrabold italic text-white shadow-xl bottom ">
      <div className=" w-1/5 ml-4">
        <Link href={"/"}>
          <Image
            src={"/logosoloblanco.png"}
            width={40}
            height={40}
            alt="logo"
          />
        </Link>
      </div>
      <div className="mx-auto">
        <Menu />
      </div>
      <div className="search w-1/5 mr-4 flex justify-end ">
        <Search />
      </div>
    </div>
  );
};

export default Nav;
