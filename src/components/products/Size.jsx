import React from "react";

const talles = [
  "2",
  "4",
  "6",
  "8",
  "10",
  "12",
  "14",
  "16",
  "S",
  "M",
  "L",
  "XL",
  "XXL",
];

const Size = () => {
  return (
    <div className="w-full flex flex-col ">
      <h4 className="mb-4">Talle:</h4>
      <div className="flex">
        {" "}
        {talles.map((talle) => (
          <div
            className="w-8 h-8 bg-slate-200 text-black flex mr-2 rounded-lg justify-center items-center"
            key={talle}
          >
            {talle}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Size;
