'use client'
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { GrLinkNext, GrLinkPrevious } from "react-icons/gr";

const imageNames = [
  "/biz-1.png",
  "/biz-2.png",
  "/biz-3.png",
  "/biz-4.png",
  "/biz-5.png",
  "/biz-6.png",
  "/biz-7.png",
  "/biz-8.png",
];


export default function HeroSlider() {
  // const ref = useRef<Slider>(null);
	// const handleNextSlide = () => {
	// 	ref?.current?.slickNext();
	// };

	// const handlePrevSlide = () => {
	// 	ref?.current?.slickPrev();
	// };
   
    const settings = {
			dots: false,
			infinite: true,
			speed: 5000,
			slidesToShow: 5,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000,
			cssEase: "linear",

			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
						infinite: true,
						dots: false,
					},
				},
				{
					breakpoint: 800,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 2,
						initialSlide: 2,
					},
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					},
				},
			],
		};
  return (
    <>
      <div className="w-full bg-[#f3f6fb] z-[9999]  ">
        <div className="mx-0 xl:mx-[55px] px-4 xl:px-[25px] flex flex-col items-center ">
          <div className=" py-8 rounded-[24px] shadow-xl mb-4  mt-[-80px] xl:mt-[-100px] gb-white z-40 bg-white max-w-[1320px] w-full  mx-auto">
            <div className=" grid gird-cols-1 lg:grid-cols-[2fr_1fr] xl:grid-cols-[1.6fr_1fr] justify-items-start lg:justify-items-center pe-4 xl:pe-6 pb-3 xl:pb-5">
              <div className="ps-4 lg:ps-[50px] xl:ps-[100px] grid grid-cols-1 lg:grid-cols-2 gap-2 xl:gap-3 items-center">
                <h2 className="text-2xl xl:text-4xl text-[#092256] font-semibold leading-[125%]">
                  Businesses that Count On Us
                </h2>
                <p className="text-sm xl:text-base text-[#3e588e] font-medium tracking-[-.048rem] leading-[148%] pe-0 xl:pe-5 py-4 lg:py-0">
                  Join over{" "}
                  <strong className="text-[#0357ee]">2 million</strong>{" "}
                  successful business owners who trust Moniepoint for all their
                  business needs.
                </p>
              </div>
              <div className="w-full hidden lg:flex justify-end ">
                <p className="font-bold transparent-text text-[100px] tracking-[-.576rem] ">
                  2m+
                </p>
              </div>
            </div>
            
            <div className="">
            <Slider {...settings}  >
              {imageNames.map((imageName, index) => (
                <div key={index} className="px-2 md:px-3 ">
                  <div className="shadow-md  rounded-lg border flex justify-center items-center gap-4 py-0 xl:py-2">

                    <Image src={imageName} alt="Business Logo" width={200} height={200} />
                    
                  </div>
                  
                
                </div>
              ))}
              </Slider>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}
