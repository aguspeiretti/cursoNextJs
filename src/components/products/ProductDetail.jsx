import { useParams } from "next/navigation";
import Counter from "../Counter";
import QtySelector from "./QtySelector";
import Image from "next/image";

const ProductDetail = async ({ slug }) => {
  const item = await fetch(`http://localhost:3000/api/routes.product/${slug}`, {
    cache: "no-store",
    next: {
      revalidate: 0,
    },
  }).then((r) => r.json());

  return (
    <div className=" w-full h-full text-white  bg-black bg-opacity-80 ">
      <div className="w-full h-full flex flex-wrap justify-center items-center  ">
        <div className="w-3/6 h-full  flex flex-col justify-center items-center ">
          <div className="w-full h-full flex justify-center items-center   ">
            <Image src={item.image} width={400} height={300} loading="lazy"  alt="foto" />
          </div>
        </div>
        <div className="w-3/6 h-5/6 p-8  bg-black bg-opacity-90 text-white rounded-lg">
          <h1 className="font-semibold text-xl pb-8">{item.title}</h1>
          <div className="w-full h-20  ">
            <p className="uppercase">{item.description}</p>
          </div>
          <h3 className="font-semibold text-xl pb-6">Precio: ${item.price}</h3>

          <QtySelector item={item} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
