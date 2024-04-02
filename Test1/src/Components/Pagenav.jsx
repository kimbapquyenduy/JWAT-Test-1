import React from "react";

export const Pagenav = () => {
  return (
    <div className=" flex items-center flex-col mt-6  lg:items-start">
      <p className=" w-fit text-xl text-[#03204c] cursor-pointer  transition-all ease-linear hover:text-[#418fee]">
        Previous page
      </p>
      <p className=" w-fit text-4xl text-[#3bc4e2] cursor-pointer hover:text-[#2d90a7] transition-all ease-linear text-center">
        Quality Assurance
      </p>
    </div>
  );
};
