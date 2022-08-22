import React, { useState } from "react";
import Counter from "./Counter";
import States from "./States";

const initialCounter = [
  {
    id: 1,
    count: 0,
  },
  {
    id: 2,
    count: 0,
  },
];

const CounterMaster = () => {
  const [state, setState] = useState(initialCounter);

  const totalCount = () => {
    return state.reduce((total, counter) => total + counter.count, 0);
  };

  const increment = (id) => {
    const updatedCounter = state.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count + 1,
        };
      }
      return { ...c };
    });

    setState(updatedCounter);
  };

  const decrement = (id) => {
    const updatedCounter = state.map((c) => {
      if (c.id === id) {
        return {
          ...c,
          count: c.count - 1,
        };
      }
      return { ...c };
    });
    setState(updatedCounter);
  };

  return (
    <div className='max-w-md mx-auto mt-10 space-y-5'>
      {state.map(({ id, count }) => (
        <Counter
          key={id}
          id={id}
          counterValue={count}
          handlerIncrement={increment}
          handlerDecrement={decrement}
        />
      ))}
      <States totalCount={totalCount()} />
    </div>
  );
};

export default CounterMaster;
