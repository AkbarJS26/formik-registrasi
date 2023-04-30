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
      <h1 className="mt-10 text-center font-semibold text-4xl">Yeaayy!!</h1>
      <p className="text-center mt-5">Selamat Registrasi Kamu Berhasil😊</p>
    </>
  );
};

export default ModalSuccess;
