import Image from "next/image";

const loading = () => {
  return (
    <div className=" w-full h-screen flex bg-zinc-800 justify-center items-center  ">
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
