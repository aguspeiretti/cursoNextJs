export async function generateMetadata({ params, serchparams, parent }) {
  return {
    title: `akumal - ${params.categorias}`,
  };
}

const page = ({ params }) => {
  return (
    <div className="bg-red-500 w-full h-full">
      <main className="w-full h-full">
        <div className="w-full h-12 flex justify-center items-center text-2xl text-white uppercase font-extrabold italic">
          <h1>{params.categorias}</h1>
        </div>
        <div className=" w-full  h-[calc(100%-3rem)] flex" flex>
          <div className=" w-1/6 h-full p-3">
            <div className="w-full h-full  bg-white rounded-md"></div>
          </div>
          <div className=" w-5/6 h-full p-3">
            <div className="w-full h-full  bg-red-400 rounded-md"></div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
