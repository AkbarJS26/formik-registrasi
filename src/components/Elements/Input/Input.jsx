import React, { forwardRef } from "react";

export const Input = forwardRef(
  ({ type, name, placeholder, className, handleBlur, handleChange }, ref) => {
    return (
      <>
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          className={className}
          onBlur={handleBlur}
          onChange={handleChange}
        />
      </>
    );
  }
);
