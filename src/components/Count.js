import React from "react";

const Count = ({ counter }) => {
  return (
    <div className='text-2xl font-bold' id='counterResult'>
      {counter}
    </div>
  );
};

export default Count;
