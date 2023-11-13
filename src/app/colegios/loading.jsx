import Image from "next/image";

const loading = () => {
  return (
    <div className=" w-full h-full flex bg-zinc-800 justify-center items-center overflow-hidden ">
      <Image
        src={"/logosoloblanco.png"}
        width={60}
        height={60}
        alt="logo-carga"
        className="animate-bounce "
        style={{ width: "auto", height: "auto" }}
      />
    </div>
  );
};

export default loading;
