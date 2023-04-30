import React from "react";

const Button = ({ type, children }) => {
  return (
    <button
      className="bg-blue-600 w-full rounded-full text-white py-3 hover:bg-blue-700 font-bold"
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
