import React from "react";

const Background = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden select-none pointer-events-none">
      <img
        src="blob1.svg"
        className="w-[600px] h-[400px] absolute top-[50%] left-[10%] -translate-x-1/2 -translate-y-1/2 blur-[200px]"
        alt=""
      />
      <img
        src="blob2.svg"
        className="w-[590px] h-[600px] absolute top-[40%] left-[70%] -translate-x-[70%] -translate-y-[20%] blur-[200px]"
        alt=""
      />
      <img
        src="blob3.svg"
        className="w-[590px] h-[500px] absolute top-[10%] left-[90%] -translate-x-[30%] -translate-y-[60%] blur-[200px]"
        alt=""
      />
      <img
        src="blob4.svg"
        className="w-[590px] h-[500px] absolute top-[10%] left-[50%] -translate-x-[50%] -translate-y-[50%] blur-[200px]"
        alt=""
      />
    </div>
  );
};

export default Background;
