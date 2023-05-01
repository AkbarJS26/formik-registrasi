import React, { useState } from "react";
import FormInput from "../Elements/Input";
import EyeFill from "../../assets/icons/EyeFill";
import EyeFillSlash from "../../assets/icons/EyeFillSlash";
import Button from "../Elements/Button/Button";
import Loading from "../Elements/Loading/Loading";

const FormRegister = ({
  classUserName,
  classEmail,
  classPassword,
  classConfirmPassword,
  formikSubmit,
  formikTouchedUserName,
  formikErrorsUserName,
  formikTouchedEmail,
  formikErrorsEmail,
  formikTouchedPassword,
  formikErrorsPassword,
  formikTouchedConfirmPassword,
  formikErrorsConfirmPassword,
  inputRef,
  formikHandleBlur,
  formikHandleChange,
  loader,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowPasswordConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };
  return (
    <form onSubmit={formikSubmit} className="mt-10">
      <div className="userName">
        <FormInput
          type="text"
          name="userName"
          placeholder="Masukan Username"
          className={classUserName}
          label="Username*"
          inputRef={inputRef}
          handleBlur={formikHandleBlur}
          handleChange={formikHandleChange}
        />
        {formikTouchedUserName && formikErrorsUserName && (
          <p className="mt-2 text-sm text-red-500">{formikErrorsUserName}</p>
        )}
      </div>
      <div className="email mt-5">
        <FormInput
          type="email"
          name="email"
          placeholder="Masukan Email"
          className={classEmail}
          label="Email*"
          handleBlur={formikHandleBlur}
          handleChange={formikHandleChange}
        />
        {formikTouchedEmail && formikErrorsEmail && (
          <p className="mt-2 text-sm text-red-500">{formikErrorsEmail}</p>
        )}
      </div>
      <div className="password relative mt-5">
        <FormInput
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Masukan Password"
          className={classPassword}
          label="Password*"
          handleBlur={formikHandleBlur}
          handleChange={formikHandleChange}
        />
        {formikTouchedPassword && formikErrorsPassword && (
          <p className="mt-2 text-sm text-red-500">{formikErrorsPassword}</p>
        )}
        {showPassword ? (
          <EyeFillSlash action={toggleShowPassword} />
        ) : (
          <EyeFill action={toggleShowPassword} />
        )}
      </div>
      <div className="confirm relative mt-5">
        <FormInput
          type={showPasswordConfirm ? "text" : "password"}
          name="confirmPassword"
          placeholder="Confirm Password"
          className={classConfirmPassword}
          label="Confirm Password*"
          handleBlur={formikHandleBlur}
          handleChange={formikHandleChange}
        />
        {formikTouchedConfirmPassword && formikErrorsConfirmPassword && (
          <p className="mt-2 text-sm text-red-500">
            {formikErrorsConfirmPassword}
          </p>
        )}
        {showPasswordConfirm ? (
          <EyeFillSlash action={toggleShowPasswordConfirm} />
        ) : (
          <EyeFill action={toggleShowPasswordConfirm} />
        )}
      </div>
      <div className="mt-10">
        <Button type="submit">{loader ? <Loading /> : "Register"}</Button>
      </div>
    </form>
  );
};

export default FormRegister;
