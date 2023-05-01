import React from "react";

const Button = ({ type, children }) => {
  return (
    <button
      className="w-full rounded-full bg-blue-600 py-3 font-bold text-white hover:bg-blue-700"
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
