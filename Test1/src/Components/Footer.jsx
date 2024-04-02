import { FacebookFilled, YoutubeFilled } from "@ant-design/icons";
import React from "react";

export const Footer = () => {
  return (
    <div className="w-full h-[150px] border-t-2  flex md:justify-between items-center  justify-center flex-col-reverse md:flex-row">
      <div className="flex md:ml-20 space-x-5 mt-5 md:mt-0">
        <FacebookFilled className="text-4xl text-[#888888] transition-all duration-[0.2s] cursor-pointer hover:text-blue-400" />

        <YoutubeFilled className="text-4xl text-[#888888] transition-all duration-[0.2s] cursor-pointer hover:text-red-500" />
      </div>
      <div className="flex md:mr-32 space-x-5 flex-col space-y-3 md:flex-row md:space-y-0">
        <div className="text-[#262626] text-sm hover:text-blue-500 cursor-pointer transition-all duration-[0.2s] font-semibold ">
          CONTACT US
        </div>
        <div className="text-[#262626] text-sm hover:text-blue-500 cursor-pointer transition-all duration-[0.2s] font-semibold">
          JOIN US
        </div>
      </div>
    </div>
  );
};
