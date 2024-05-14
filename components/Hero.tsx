import Image from "next/image";
import React from "react";
import { Button } from "@nextui-org/react";
import { CiSettings } from "react-icons/ci";
import { IoArrowForwardSharp } from "react-icons/io5";


export default function Hero() {
  return (
    <>
    <div className="bg-[#f3f6fb] w-full">
      <main style={{clipPath: "ellipse(120% 70% at 50% 30%)"}} className="bg-primary-darkBlue pb-[150px] lg:pb-[180px]  xl:pb-[300px] w-full pt-[70px] lg:pt-[100px] xl:pt-[120px] z-10">
        <div className=" grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] xl:grid-cols-[1fr_1.3fr]  gap-8  w-full max-w-[1320px] mx-auto px-0 md:px-4 ">
            {/* <div></div> */}
          <div className=" text-white flex flex-col items-center lg:items-start justify-center pt-[100px] ps-0  md:ps-3">
            <div className="bg-[#3e588e] text-[#f9fafb] py-3 px-3 md:px-3 xl:px-4 flex items-center gap-1 md:gap-3 rounded-full w-auto max-w-[360px] xl:max-w-[420px]">
              <CiSettings className="text-2xl" />
              <p className="text-[#f9fafb] text-[11px] md:text-xs xl:text-sm ">National Inclusive Payment Initiative Award by CBN</p>
            </div>
            <div className="py-6 xl:py-8 px-4 md:px-0">
              <h1 className=" text-[#fff] leading-[125%] text-[20px] md:text-[30px] lg:text-[40px] xl:text-[50px] font-semibold text-center lg:text-start">
                Simple solutions to <strong className="text-[#c4e9fd]">power your business </strong>
              </h1>
            </div>
            <div className="px-4 md:px-0">
                <p className="fornt-medium leading-[139.6%] tracking-[-.06rem] text-[#c3c9d5] max-w-[540px] text-base xl:text-[20px] text-center lg:text-start px-2 md:px-0">Collect payments, access loans and manage operations with a business banking solution that meets all your needs.</p>
            </div>
            <div className="mt-[36px]">
              <Button color="primary" endContent={<IoArrowForwardSharp  className="font-bold text-xl "/>} className="bg-[#0357ee] rounded-xl py-5 xl:py-[28px] px-4 xl:px-6 text-sm xl:text-base ">
                Open an Account
              </Button>
            </div>
          </div>
          <div className="hidden lg:block absolute right-0 top-30">
            <Image src={'/hero-sub.png'} alt="Hero image" height={771} width={769} style={{ objectPosition: "right" }} className="    object-contain xl:object-cover bg-center bg-no-repeat h-[500px] lg:h-[550px] xl:h-[660px] w-[480px] lg:w-[520px] xl:w-[769px]"/>
          </div>
        </div>
      </main>
    </div>
    </>
  );
}
