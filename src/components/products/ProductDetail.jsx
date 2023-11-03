import { useParams } from "next/navigation";
import Counter from "../Counter";
import QtySelector from "./QtySelector";

const ProductDetail = async ({ slug }) => {
  const item = await fetch(`http://localhost:3000/api/routes.product/${slug}`, {
    cache: "no-store",
    next: {
      revalidate: 0,
    },
  }).then((r) => r.json());

  return (
    <div className=" w-9/12 h-5/6 text-white ">
      <div className="w-full h-full flex flex-wrap">
        <div className="w-1/2 h-2/3 flex justify-center items-center  ">
          <img className="w-1/2" src={item.image} alt="foto" />
        </div>
        <div className="w-1/2 h-2/3 p-8">
          <h1 className="font-semibold text-xl pb-8">{item.title}</h1>
          <h3 className="font-semibold text-xl pb-6">Precio: ${item.price}</h3>

          <QtySelector item={item} />
        </div>
        <div className="w-full h-1/3 px-8 ">
          <h1 className="text-lg font-semibold pt-2 pb-8">Descripcion</h1>
          <p className="uppercase">{item.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
