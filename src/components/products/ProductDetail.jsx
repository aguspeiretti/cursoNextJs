import { products } from "@/data/productsMock";
import { useParams } from "next/navigation";
import Counter from "../Counter";
import QtySelector from "./QtySelector";

const ProductDetail = ({ slug }) => {
  const product = products.find((item) => item.slug === slug);

  return (
    <div className=" w-9/12 h-5/6 text-white ">
      <div className="w-full h-full flex flex-wrap">
        <div className="w-1/2 h-2/3 flex justify-center items-center">
          <img src="" alt="foto" />
        </div>
        <div className="w-1/2 h-2/3 p-8">
          <h1 className="font-semibold text-xl pb-8">{product.title}</h1>
          <h3 className="font-semibold text-xl pb-6">
            Precio: ${product.price}
          </h3>

          <QtySelector item={product} />
        </div>
        <div className="w-full h-1/3 px-8 ">
          <h1 className="text-lg font-semibold pt-2 pb-8">Descripcion</h1>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
