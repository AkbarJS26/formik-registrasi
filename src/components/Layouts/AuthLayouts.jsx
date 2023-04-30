import { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import FormRegister from "../Fragments/FormRegister";
import ModalSuccess from "../Fragments/ModalSuccess";

const AuthLayouts = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [loader, setLoader] = useState(false);

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const formik = useFormik({
    initialValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .required("Username harap di isi")
        .min(3, "Username harus memiliki setidaknya 3 karakter")
        .max(10, "Username maksimal terdiri dari 10 karakter"),
      email: Yup.string()
        .required("Email harap di isi")
        .email("Harap memasuki email yang valid"),
      password: Yup.string()
        .required("Password harap di isi")
        .min(8, "Password harus minimal 8 Karakter")
        .max(16, "Password harus maximal 16 Karakter")
        .matches(/.*[a-z].*/, "Password harus terdiri setidaknya 1 huruf kecil")
        .matches(
          /.*[A-Z].*/,
          "Password harus terdiri setidaknya 1 huruf kapital"
        )
        .matches(
          /.*[!@#$%^&*()\-=_+[\]{};':"\\|,.<>\/?].*/,
          "Password setidaknya harus memiliki simbol khusus"
        )
        .matches(/.*\d.*/, "Password setidaknya harus memiliki angka"),
      confirmPassword: Yup.string()
        .required("Confirm Password harap di isi")
        .oneOf([Yup.ref("password")], "Password belum sesusai"),
    }),

    onSubmit: () => {
      setLoader(true);
      setTimeout(() => {
        setShowSuccessMessage(true);
        setLoader(false);
      }, 1500);
    },
  });
  const formInputClass =
    "border-2 border-gray-300 py-3 px-6 rounded-full w-full mt-2 focus:outline-blue-500";

  const formInputClassUserName = `${formInputClass} ${
    formik.touched.userName && formik.errors.userName
      ? "border-red-500"
      : "border-gray-300"
  }`;

  const formInputClassEmail = `${formInputClass} ${
    formik.touched.email && formik.errors.email
      ? "border-red-500"
      : "border-gray-300"
  }`;

  const formInputClassPassword = `${formInputClass} ${
    formik.touched.password && formik.errors.password
      ? "border-red-500"
      : "border-gray-300"
  }`;

  const formInputClassConfirmPassword = `${formInputClass} ${
    formik.touched.confirmPassword && formik.errors.confirmPassword
      ? "border-red-500"
      : "border-gray-300"
  }`;
  return (
    <>
      {showSuccessMessage ? (
        <ModalSuccess />
      ) : (
        <>
          <h1 className="text-3xl font-bold">Registrasi</h1>
          <FormRegister
            classUserName={formInputClassUserName}
            classEmail={formInputClassEmail}
            classPassword={formInputClassPassword}
            classConfirmPassword={formInputClassConfirmPassword}
            formikConfig={formik}
            inputRef={inputRef}
            formikSubmit={formik.handleSubmit}
            formikTouchedUserName={formik.touched.userName}
            formikErrorsUserName={formik.errors.userName}
            formikTouchedEmail={formik.touched.email}
            formikErrorsEmail={formik.errors.email}
            formikTouchedPassword={formik.touched.password}
            formikErrorsPassword={formik.errors.password}
            formikTouchedConfirmPassword={formik.touched.confirmPassword}
            formikErrorsConfirmPassword={formik.errors.confirmPassword}
            formikHandleBlur={formik.handleBlur}
            formikHandleChange={formik.handleChange}
            inputClass={formInputClass}
            loader={loader}
          />
        </>
      )}
    </>
  );
};

export default AuthLayouts;
