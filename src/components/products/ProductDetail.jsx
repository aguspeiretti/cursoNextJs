import { products } from "@/data/productsMock";
import { useParams } from "next/navigation";

const ProductDetail = ({ slug }) => {
  const product = products.find((item) => item.slug === slug);
  console.log(product);
  return (
    <div className="bg-zinc-700 w-9/12 h-5/6 text-white ">
      <div className="w-full h-full flex flex-wrap">
        <div className="w-1/2 h-2/3 bg-white ">
          <img src="" alt="foto" />
        </div>
        <div className="w-1/2 h-2/3 bg-slate-400 p-8">
          <h1 className="font-semibold text-xl pb-8">{product.title}</h1>
          <h3 className="font-semibold text-xl pb-6">
            Precio: ${product.price}
          </h3>
          <p>contador</p>
          <p>selector talles</p>
          <button className="w-2/6 h-8 rounded-xl bg-white text-zinc-800">
            Agregar al carrito
          </button>
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
