import React from "react";

const Button = ({ children, handler, btnClass }) => {
  return (
    <button
      class={`${btnClass} font-bold text-white px-3 py-2 rounded shadow`}
      onClick={handler}>
      {children}
    </button>
  );
};

export default Button;
