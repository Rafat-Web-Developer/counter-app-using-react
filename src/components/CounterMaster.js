import React from "react";
import Counter from "./Counter";

const CounterMaster = () => {
  return (
    <div class='w-screen h-screen p-10 bg-gray-100 text-slate-700'>
      <h1 class='text-amber-600 max-w-md mx-auto text-center text-2xl font-bold'>
        Counter Application Using React JS
      </h1>

      <div class='max-w-md mx-auto mt-10 space-y-5'>
        <Counter />
        <Counter />
      </div>
    </div>
  );
};

export default CounterMaster;
