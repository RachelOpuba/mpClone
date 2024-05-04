"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GoChevronDown } from "react-icons/go";
import { Button } from "@nextui-org/react";
import { FiArrowRight } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import MobileNav from "@/components/MobileNav";
import { ProductNav } from "@/components/navigation/ProductNav";
import { CompanyNav } from "@/components/navigation/CompanyNav";
import Modal from "@/components/navigation/Modal";
import { SelectCountry } from "@/components/navigation/SelectCountry";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("business");
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <div
        className={`bg-primary-darkBlue h-[140px] lg:h-[90px] w-[100vw] flex justify-center lg:items-center`}
      >
        <nav className="w-full max-w-[1320px] hidden lg:flex justify-between  mx-auto font-medium px-4">
          <div className="flex justify-center  items-center gap-3 xl:gap-4">
            <Link href={"#"}>
              <Image
                src={"/logo-mfb-white.svg"}
                height={34}
                width={137}
                alt="Logo"
              />
            </Link>
            <Link
              href="/"
              onClick={() => setActiveLink("business")}
              className={`text-white text-sm xl:text-base  ${
                activeLink === "business"
                  ? "bg-opacity-20 bg-white rounded-[150px] px-2 xl:px-3 py-1 xl:py-2"
                  : ""
              }`}
            >
              Business
            </Link>
            <Link
              href="/personal"
              onClick={() => setActiveLink("personal")}
              className={`text-white ${
                activeLink === "personal"
                  ? "bg-opacity-20 bg-white rounded-[150px]px-2 xl:px-3 py-1 xl:py-2"
                  : ""
              }`}
            >
              Personal
            </Link>
          </div>
          <div>
            <div className="flex  items-center gap-3 xl:gap-6 text-white h-full text-sm xl:text-base">
              <div className="flex items-center h-full gap-[6px] me-1 xl:me-3 group ">
                <Link href={"/products"} className="">
                  Products
                </Link>
                <GoChevronDown className="text-[20px]" />
                <div className="hidden group-hover:flex  w-full absolute  left-0 top-[65px] transition ease-in duration-1000">
                  <ProductNav />
                </div>
              </div>
              <div className="flex items-center h-full gap-[6px] me-1 xl:me-4 group">
                <Link href={"/products"}>Company</Link>
                <GoChevronDown className="text-[20px]" />
                <div className="hidden group-hover:flex  w-full absolute  left-0 top-[65px]">
                  <CompanyNav />
                </div>
              </div>
              <Link href={"/products"}>About</Link>
              <Link href={"/products"}>Contact</Link>
              <Link href={"/products"}>Blog</Link>
              <div className="ms-8">
                <Button
                  endContent={<FiArrowRight className="text-lg" />}
                  radius="full"
                  className="bg-[#c4e9fd] text-sm: xl:text-base gap-1 px-3 py-1 xl:py-2"
                >
                  Sign in
                </Button>
              </div>
              <div
                onClick={() => setShowModal(true)}
                className="flex  cursor-pointer items-center h-full gap-1"
              >
                <Image
                  src={"/nig.svg"}
                  width={24}
                  height={24}
                  alt="Nigeria flag"
                />
                <GoChevronDown className="text-[20px]" />
              </div>
            </div>
          </div>
        </nav>

        {mobileMenu ? (
          <div className="flex lg:hidden flex-col w-full">
            <div className="flex lg:hidden justify-between items-center p-5">
              <Image
                src={"/logo-mfb-white.svg"}
                height={34}
                width={137}
                alt="Logo"
              />
              <div>
                <div className="flex items-center gap-2">
                  <p className="text-white font-semibold">Menu</p>
                  <div className="flex justify-center items-center rounded-full border border-blue-200 border-opacity-20 h-[33px] w-[33px]">
                    <IoClose
                      onClick={() => setMobileMenu(!mobileMenu)}
                      className="text-white text-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            {mobileMenu && <MobileNav />}
          </div>
        ) : (
          <div className="flex lg:hidden flex-col w-full">
            <div className="flex lg:hidden h-[60px] w-full mt-o">
              <div
                className={`text-white w-1/2 border-red-500 h-full flex justify-center items-center  ${
                  activeLink === "business" ? " bg-[#092256] " : ""
                }`}
              >
                <Link
                  href={"/"}
                  onClick={() => setActiveLink("business")}
                  className="w-full flex justify-center"
                >
                  Business
                </Link>
              </div>
              <div
                className={`text-white w-1/2 h-full flex justify-center items-center  ${
                  activeLink === "personal" ? " bg-[#092256]   " : ""
                }`}
              >
                <Link
                  href={"/personal"}
                  onClick={() => setActiveLink("personal")}
                  className="w-full flex justify-center"
                >
                  Personal
                </Link>
              </div>
            </div>
            <div className="flex lg:hidden justify-between items-center p-5">
              <Image
                src={"/logo-mfb-white.svg"}
                height={34}
                width={137}
                alt="Logo"
              />
              <div>
                <div className="flex items-center gap-2">
                  {/* <p className='text-white font-semibold'>Menu</p> */}
                  {/* <div className='flex justify-center items-center rounded-full border border-blue-200 border-opacity-20 h-[33px] w-[33px]'>
                    <IoClose  className='text-white text-2xl'/>
                  </div> */}
                </div>
                <div className="flex justify-center items-center rounded-full border border-blue-200 border-opacity-20 h-[33px] w-[33px]">
                  <IoMenu
                    onClick={() => setMobileMenu(!mobileMenu)}
                    className="text-white text-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
          <SelectCountry onClose={() => setShowModal(false)} />
        </Modal>
      </div>
    </>
  );
}
