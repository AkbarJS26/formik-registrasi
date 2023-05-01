import React from "react";
import iconDone from "../../assets/svg/done.svg";

const ModalSuccess = () => {
  return (
    <>
      <img
        src={iconDone}
        alt="icon check"
        width={150}
        height={150}
        className="mx-auto"
      />
      <h1 className="mt-10 text-center text-4xl font-semibold">Yeaayy!!</h1>
      <p className="mt-5 text-center">Selamat Registrasi Kamu Berhasil😊</p>
    </>
  );
};

export default ModalSuccess;
