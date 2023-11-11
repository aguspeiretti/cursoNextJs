import Image from "next/image";
import Link from "next/link";

const ProductCard = ({ item }) => {
  return (
    <div className="w-72 h-80 bg-gray-200 mr-2 mb-2 flex  flex-col items-center justify-center rounded-md shadow-lg shadow-orange-400/20">
     <div className="w-2/3 h-1/2  flex justify-center items-center">
     <Image src={item.image} width={120} height={200} loading="lazy"	style={{objectFit: "contain"}} alt={item.name} />
     </div>
      <h3 className="px-6 pt-4">{item.title}</h3>
      <Link href={`/colegios/detail/${item.slug}`}>
        <button className="w-3/3 p-2 h-8 bg-sky-900 rounded-xl text-xs mt-6 text-white">
          Ver producto
        </button>
      </Link>
    </div>
  );
};

export default ProductCard;
