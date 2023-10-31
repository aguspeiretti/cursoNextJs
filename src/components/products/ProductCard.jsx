import Link from "next/link";

const ProductCard = ({ item }) => {
  return (
    <div className="w-72 h-80 bg-white mr-2 mb-2 flex  flex-col items-center justify-center">
      <img className="h-1/2" src={item.image} alt="productImage" />
      <h3>{item.title}</h3>
      <Link href={`/colegios/detail/${item.slug}`}>
        <button className="w-3/3 p-2 h-8 bg-orange-500 rounded-xl text-xs mt-6">
          Ver producto
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
