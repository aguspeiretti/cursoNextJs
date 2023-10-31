"use client"
import React, { useState } from "react";

const Counter = ({max ,quantity , setCounter}) => {


  const handleCounterplus =()=>{
    if (quantity < max) {
        setCounter(quantity +1)}
  }
  const handleCounterRest =()=>{
    if(quantity > 0)
    setCounter(quantity -1)
  }

  return (
    <>
    <h4 className="mb-4">Cantidad:</h4>
    <div className="flex gap-3">
      <button className=" w-8 h-6 flex justify-center items-center rounded-md bg-orange-600" onClick={handleCounterRest}>-</button>
      <p>{quantity}</p>
      <button className="w-8 h-6 flex justify-center items-center  rounded-md bg-orange-600" onClick={handleCounterplus}>+</button>
    </div>
    </>
  );
};

export default Counter;
