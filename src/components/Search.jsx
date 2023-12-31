"use client";

import React, { useState } from "react";
import SideCart from "./SideCart";
import { useAuthContext } from "./context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

const Search = () => {
  const [sideOpen, setSideOpen] = useState(false);

  const { logout, user } = useAuthContext();

  const handleMenuSide = () => {
    setSideOpen(!sideOpen);
  };
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
        <FontAwesomeIcon
          icon={faHeart}
          style={{ padding: "10px", cursor: "pointer" }}
        />
        <FontAwesomeIcon
          onClick={handleMenuSide}
          icon={faBagShopping}
          style={{ padding: "10px", cursor: "pointer" }}
        />
        {user.logged ? (
          <button
            className="p-1 bg-red-600 text-sm font-normal rounded-lg ml-4"
            onClick={logout}
          >
            Logout
          </button>
        ) : null}
      </div>
      <SideCart handleMenu={handleMenuSide} sideOpen={sideOpen} />
    </div>
  );
};

export default Search;
