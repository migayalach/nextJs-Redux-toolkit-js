"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "@/redux/features/counterSlice";

const ButtonCounter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector((state) => state.counter.counter);
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="border border-gray-300 p-8 rounded-md">
        <h1 className="text-3xl font-bold mb-4">Total: {counterValue}</h1>
        <div>
          <button
            className="bg-green-500 hover:bg-green-700 transition duration-700 text-white font-bold py-2 px-4 rounded-lg w-32 h-10"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
        </div>
        <div className="mt-4">
          <button
            className="bg-red-500 hover:bg-blue-700 transition duration-700 text-white font-bold py-2 px-4 rounded-lg w-32 h-10"
            onClick={() => dispatch(decrement())}
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default ButtonCounter;
