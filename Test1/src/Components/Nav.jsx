import { Button, Dropdown, Image } from "antd";
import React from "react";
import { BarsOutlined, DownOutlined, ProfileFilled } from "@ant-design/icons";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

export const Nav = () => {
  const solutions = [
    {
      key: "0",
      label: (
        <a
          target="_blank"
          className="underline font-bold text-base hover:text-[#3bc4e2] z-20"
        >
          Overview
        </a>
      ),
    },
    {
      key: "1",
      label: (
        <a target="_blank" className="ml-5 text-base">
          Forwarding
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a target="_blank" className="ml-5 text-base">
          Container Tracking
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a target="_blank" className="ml-5 text-base">
          Shipping
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a target="_blank" className="ml-5  text-base">
          Factory
        </a>
      ),
    },
  ];
  const services = [
    {
      key: "0",
      label: (
        <a target="_blank" className="underline text-base font-bold">
          Overview
        </a>
      ),
    },
    {
      key: "1",
      label: (
        <a target="_blank" className="ml-5 text-base">
          Software Development
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a target="_blank" className="ml-5 text-base">
          Quality Assurance{" "}
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a target="_blank" className="ml-5 text-base">
          Global Service Desk
        </a>
      ),
    },
  ];
  const careers = [
    {
      key: "0",
      label: (
        <a target="_blank" className="underline text-base font-bold">
          Overview
        </a>
      ),
    },
    {
      key: "1",
      label: (
        <a target="_blank" className="ml-5 text-base">
          Experienced Hire
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a target="_blank" className="ml-5 text-base">
          Fresher Training Program
        </a>
      ),
    },
  ];

  let navMenu = useRef();

  const [isClick, setIsClick] = useState(false);
  const click = () => {
    isClick ? setIsClick(false) : setIsClick(true);
  };

  useEffect(() => {
    let event = (e) => {
      if (!navMenu.current.contains(e.target)) {
        setIsClick(false);
      }
    };
    document.addEventListener("click", event);
    return () => {
      document.removeEventListener("click", event);
    };
  });
  return (
    <div ref={navMenu}>
      <div className="w-full h-[70px] bg-[#03204c] flex  items-center fixed top-0 z-50">
        <div className="w-[22vw] sm:w-[15vw] md:w-[15%] lg:w-[13%] xl:w-[10%] 2xl:w-[6%] h-full flex items-center md:justify-center ml-6 sm:ml-8 lg:ml-[5rem] cursor-pointer">
          <img src="/CLT_Logo-W.png" alt="CLT_Logo" />
        </div>
        <div className="w-[55%] md:w-[60%] xl:w-[65%] 2xl:w-[70%] h-full  items-center justify-center md:space-x-3 lg:space-x-6 hidden md:flex ">
          <Dropdown menu={{ items: solutions }} placement="bottomLeft">
            <div className="text-lg text-white font-bold  cursor-pointer hover:text-[#3bc4e2] transition-all">
              Solutions
              <DownOutlined className="text-xs ml-1" />
            </div>
          </Dropdown>
          <Dropdown menu={{ items: services }} placement="bottomLeft">
            <div className="text-lg text-white font-bold  cursor-pointer hover:text-[#3bc4e2] transition-all">
              Services
              <DownOutlined className="text-xs ml-1" />
            </div>
          </Dropdown>
          <Dropdown menu={{ items: careers }} placement="bottomLeft">
            <div className="text-lg text-white font-bold cursor-pointer hover:text-[#3bc4e2] transition-all">
              Careers
              <DownOutlined className="text-xs ml-1" />
            </div>
          </Dropdown>

          <div className="text-lg text-white font-bold cursor-pointer hover:text-[#3bc4e2] transition-all">
            About Us
          </div>
        </div>
        <div
          className="md:w-[20%]  h-full 
         items-center  md:justify-center hidden md:flex"
        >
          <div className="w-[12vw] lg:w-[9vw] xl:w-[8vw] min-[1536px]:w-[7vw]">
            <div className="w-full cursor-pointer  py-[6px] bg-white text-center rounded-lg text-[#03205d] font-semibold hover:bg-[#3bc4e2] hover:text-white transition-all">
              Contact Us
            </div>
          </div>
        </div>
        {/* Box for mobile  */}
        <div className="w-[66vw] min-[500px]:w-[68vw] sm:w-[74vw] flex h-full items-center justify-end md:hidden ">
          {isClick ? (
            <BarsOutlined
              className="text-white text-2xl rotate-90 transition-all	"
              onClick={click}
            />
          ) : (
            <BarsOutlined
              className="text-white text-2xl transition-all	"
              onClick={click}
            />
          )}
        </div>
      </div>
      {/* Dropdown for mobile */}
      {isClick ? (
        <div className="bg-[#03204c] w-full h-[200px] fixed top-16 md:hidden transition-all ">
          <div className="w-[20%] px-5 py-2 ">
            <div className="w-[23vw] sm:w-[16vw] max-[380px]:w-[32vw] ">
              <div className="w-full cursor-pointer   py-[6px] bg-[#3bc4e2] text-center rounded-lg text-white font-semibold  hover:scale-110 transition-all">
                Contact Us
              </div>
            </div>
          </div>
          <div className="w-full h-[65%] flex flex-col   justify-between  px-[7vw]  ">
            <Dropdown menu={{ items: solutions }} placement="bottomLeft">
              <div className=" text-white font-bold  cursor-pointer hover:text-[#3bc4e2] transition-all flex justify-between">
                Solutions
                <DownOutlined className="text-xs ml-1" />
              </div>
            </Dropdown>
            <Dropdown menu={{ items: services }} placement="bottomLeft">
              <div className=" text-white font-bold  cursor-pointer hover:text-[#3bc4e2] transition-all flex justify-between">
                Services
                <DownOutlined className="text-xs ml-1" />
              </div>
            </Dropdown>
            <Dropdown menu={{ items: careers }} placement="bottomLeft">
              <div className=" text-white font-bold cursor-pointer hover:text-[#3bc4e2] transition-all flex justify-between">
                Careers
                <DownOutlined className="text-xs ml-1" />
              </div>
            </Dropdown>

            <div className=" text-white font-bold cursor-pointer hover:text-[#3bc4e2] transition-all flex justify-between">
              About Us
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-[#03204c] w-full h-[0px] fixed top-16 md:hidden transition-all"></div>
      )}
    </div>
  );
};
