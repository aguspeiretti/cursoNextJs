import { faShirt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { redirect } from "next/navigation";
import Link from "next/link";

const redirectHandler = () => {
  redirect("http://${process.env.VERCEL_URL}/admin/adminPanel");
};

const RediPanel = () => {
  return (
    <div className="w-1/6 h-60 bg-orange-400 m-8 items-center justify-center">
      <Link href={"/admin/adminPanel"}>
        {" "}
        <div className=" flex flex-col w-100% h-60 justify-center text-center text-white ">
          <FontAwesomeIcon icon={faShirt} className="text-3xl" />
          <h3 className="text-xl">Panel de productos</h3>
        </div>
      </Link>
    </div>
  );
};

export default RediPanel;
