import ProductCard from "./ProductCard";

const ProductList = async ({ categoria }) => {
  const items = await fetch(
    `http://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/routes.products/${categoria}`,
    {
      cache: "no-store",
      next: {
        tags: ["products"],
      },
    }
  ).then((r) => r.json());

  return (
    <div className="w-full h-full flex flex-wrap justify-center pt-4 ">
      {items.map((item) => (
        <ProductCard key={item.slug} item={item} />
      ))}{" "}
    </div>
  );
};

export default ProductList;
