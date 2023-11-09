import ProductDetail from "@/components/products/ProductDetail";
import React from "react";
import "../../../../style/backgrounds.css";

const page = ({ params }) => {
  return (
    <div className="detail  w-full h-full flex justify-center items-center z-0">
      <ProductDetail slug={params.products} />
    </div>
  );
};

export default page;
