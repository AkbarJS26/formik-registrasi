import React from "react";

const Loading = () => {
  return (
    <div className="flex gap-3 items-center justify-center">
      <div className="inline-block h-6 w-6 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
