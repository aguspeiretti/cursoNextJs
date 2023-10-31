import { products } from "@/data/productsMock.js";
import ProductCard from "./ProductCard";

const ProductList = ({ categoria }) => {
  const items =
    categoria === "Todos"
      ? products
      : products.filter((item) => item.type === categoria);

  return (
    <div className="w-full h-full flex flex-wrap justify-center pt-4 ">
      {items.map((item) => (
        <ProductCard item={item} />
      ))}{" "}
    </div>
  );
};

export default ProductList;
