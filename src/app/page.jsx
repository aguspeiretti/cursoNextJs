import Image from "next/image";

export default function Home() {
  return (
    <div className="barra bg-zinc-800  w-full h-full overflow-y-scroll ">
      <div className=" w-full h-auto pt-8">
        <Image src={"/b1.png"} width={1900} height={600} alt="banner1" />
      </div>
    </div>
  );
}
