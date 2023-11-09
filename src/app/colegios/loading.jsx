import Image from "next/image";

const loading = () => {
  return (
    <div className=" w-full h-full flex bg-zinc-800 justify-center items-center overflow-hidden ">
      <Image
        src={"/logosoloblanco.png"}
        width={100}
        height={100}
        alt="logo-carga"
        className="animate-bounce  "
      />
    </div>
  );
};

export default loading;
