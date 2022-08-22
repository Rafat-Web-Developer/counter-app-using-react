import React, { useState } from "react";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(() => count + 1);
  };
  const decrement = () => {
    setCount(() => count - 1);
  };

  return (
    <div class='w-screen h-screen p-10 bg-gray-100 text-slate-700'>
      <h1 class='text-amber-600 max-w-md mx-auto text-center text-2xl font-bold'>
        Counter Application Using React JS
      </h1>

      <div class='max-w-md mx-auto mt-10 space-y-5'>
        <div class='drop-shadow-lg p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow'>
          <div class='text-2xl font-bold' id='counterResult'>
            {count}
          </div>
          <div class='flex space-x-3'>
            <Button handler={() => increment()} btnClass='bg-green-400 '>
              Increment
            </Button>
            <Button handler={() => decrement()} btnClass='bg-red-400 '>
              Decrement
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
