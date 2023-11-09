"use client";
import React, { useState } from "react";

const Counter = ({ max, quantity, setCounter }) => {
  const handleCounterplus = () => {
    if (quantity < max) {
      setCounter(quantity + 1);
    }
  };
  const handleCounterRest = () => {
    if (quantity > 0) setCounter(quantity - 1);
  };

  return (
    <>
      <h4 className="mb-4">Cantidad:</h4>
      <div className="flex gap-3">
        <button
          className=" w-8 h-8 flex justify-center items-center rounded-md bg-sky-900"
          onClick={handleCounterRest}
        >
          -
        </button>
        <p className="flex justify-center items-center">{quantity}</p>
        <button
          className="w-8 h-8 flex justify-center items-center  rounded-md bg-sky-900"
          onClick={handleCounterplus}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Counter;
