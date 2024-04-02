import React from "react";

export const VideoGSD = () => {
  return (
    <div className=" w-full md:items-start md:justify-between md:space-x-8 mb-10 lg:mb-28 flex-wrap flex md:flex-nowrap ">
      <div className=" w-full md:h-[25vw] lg:w-[45%] lg:h-[23vw] md:w-[50%] h-[50vw] flex items-center md:mt-2 ">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/rNjUDw5E6tY?autoplay=true"
          title="CyberLogitec ONE final101818 1"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="md:w-[55%] md:mt-0 w-full ml-0 mt-4 ">
        <div className=" text-[#130a3d] font-normal w-[100%] text-3xl lg:text-5xl lg:w-[90%] md:w-[90%]  ">
          Create a Global Support Hub with
        </div>
        <div className=" my-2 text-[#3bc4e2] w-[100%]   text-3xl lg:text-5xl  lg:w-[80%] md:w-[90%]  ">
          Global Service Desk
        </div>
        <div className=" md:w-[95%]  text-base  w-[100%] lg:w-[80%] lg:text-xl   ">
          We play the roles as the support frontiers and the representatives of
          the IT support. The Global Service Desk is the center where customers
          (e.g. employees or other stakeholders) can approach for help from
          their IT service providers. Regardless of whatever the assistance is
          being provided, the goal of our Global Service Desk is to deliver
          high-quality service to customers in the timely manner.
        </div>
      </div>
    </div>
  );
};
