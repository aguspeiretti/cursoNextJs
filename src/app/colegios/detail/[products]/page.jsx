import ProductDetail from "@/components/products/ProductDetail";
import React from "react";

const page = ({ params }) => {
  return (
    <div className="bg-zinc-800 w-full h-full flex justify-center items-center">
      <ProductDetail slug={params.products} />
    </div>
  );
};

export default page;
