import React from "react";
import Label from "./Label";
import { Input } from "./Input";

const FormInput = ({
  type,
  name,
  placeholder,
  className,
  inputRef,
  label,
  handleBlur,
  handleChange,
}) => {
  return (
    <>
      <Label htmlfor={name}>{label}</Label>
      <Input
        type={type}
        name={name}
        placeholder={placeholder}
        className={className}
        ref={inputRef}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
    </>
  );
};

export default FormInput;
