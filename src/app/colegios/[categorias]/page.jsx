import CategoriesMenu from "@/components/products/CategoriesMenu";
import ProductList from "@/components/products/ProductList";
import "../../../style/backgrounds.css";

export async function generateMetadata({ params, serchparams, parent }) {
  return {
    title: `akumal - ${params.categorias}`,
  };
}

const Page = ({ params }) => {
  return (
    <div className=" todos bg-zinc-800 w-full h-full">
      <main className="w-full h-full">
        <div className="w-full h-12 flex justify-center items-center text-2xl text-white uppercase font-extrabold italic">
          <h1>{params.categorias}</h1>
        </div>
        <div className=" w-full  h-[calc(100%-3rem)] flex">
          <div className=" w-1/6 h-full p-3">
            <div className="w-full h-full  bg-gray-200 rounded-md flex flex-col  p-8">
              <h1 className="mb-10 text-xl font-bold text-zinc-700">
                Colegios
              </h1>
              <CategoriesMenu />
            </div>
          </div>
          <div className=" w-5/6 h-full p-3">
            <div className="barra w-full h-full  bg-zinc-700  bg-opacity-70 rounded-md overflow-y-scroll">
              {/* <ProductList categoria={params.categorias} /> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Page;
