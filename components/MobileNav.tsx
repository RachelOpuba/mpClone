"use client";
import { useState } from "react";
import Link from "next/link";
import { GoChevronDown } from "react-icons/go";
import { Button } from "@nextui-org/react";
import CustomCard from "./CustomCard";
import { MdBusiness } from "react-icons/md";
import { FaHashtag, FaHandHoldingUsd } from "react-icons/fa";
// import { BsCreditCard } from "react-icons/bs";
import { MdOutlinePointOfSale } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import { PiMoney } from "react-icons/pi";
import { RiWirelessChargingFill } from "react-icons/ri";
import { MdCreditScore } from "react-icons/md";
import { LuBookOpenCheck } from "react-icons/lu";
import { FaLaptopCode } from "react-icons/fa6";
import { MobileSignin } from "./navigation/MobileSignin";

type ButtonType = "banking" | "payments" | "credits" | "management";
const buttonData = [
  { label: "Banking", type: "banking" },
  { label: "Credits", type: "credits" },
  { label: "Payments", type: "payments" },
  { label: "Business Management", type: "management" },
];

const bankingLinks = [
  {
    label: "Business Account",
    desc: "Get a free bank account to power your business",
    icon: <MdBusiness className="text-gray-600" />,
  },
  {
    label: "USSD",
    desc: "Dial *5573# for easy offline banking",
    icon: <FaHashtag className="text-gray-600" />,
  },
];
const creditLinks = [
  {
    label: "Working Capital Loans",
    desc: "Flexible loans that let your business grow",
    icon: <FaHandHoldingUsd className="text-gray-600" />,
  },
  {
    label: "Overdraft",
    desc: "Keep your business going even when money is low",
    icon: <MdOutlinePayments className="text-gray-600" />,
    commingSoon: true,
  },
  {
    label: "Salary Advance",
    desc: "Provide salary advance for your employees",
    icon: <PiMoney className="text-gray-600" />,
    commingSoon: true,
  },
];
const paymentLinks = [
  {
    label: "POS Terminals",
    desc: "Accept card and transfer payments ",
    icon: <MdOutlinePointOfSale className="text-gray-600" />,
  },
  {
    label: "Web Payment (Monnify)",
    desc: "Collect web payments with ease using Monnify",
    icon: <RiWirelessChargingFill className="text-gray-600" />,
  },
];
const bizMgtLinks = [
  {
    label: "Expense Cards",
    desc: "Get a secure card for your business expenses",
    icon: <MdCreditScore className="text-gray-600" />,
  },
  {
    label: "Bookkeeping",
    desc: "Manage your business finances with ease and efficiency",
    icon: <LuBookOpenCheck className="text-gray-600" />,
    commingSoon: true,
  },
];

const companyLinks = [
  {
    label: "Culture",
    icon: <MdBusiness className="text-gray-600" />,
  },

  {
    label: "Careers",
    icon: <FaLaptopCode className="text-gray-600" />,
  },

  {
    label: "Press",
    icon: <FaHashtag className="text-gray-600" />,
  },
];

const MobileNav = () => {
  const [activeButton, setActiveButton] = useState<ButtonType>("banking");
  const [toggle, setToggle] = useState<boolean>(true);
  const [toggleCompany, setToggleCompany] = useState<boolean>(true);

  const handleButtonClick = (buttonName: any) => {
    setActiveButton(buttonName);
  };

  return (
    <>
      <div className="w-full bg-primary-darkBlue h-[calc(100vh-90px)] overflow-auto absolute top-[80px] block lg:hidden px-5 overflow-y-scroll">
        <div className="flex flex-col gap-5">
          <div>
            <div
              onClick={() => setToggle(!toggle)}
              className="text-white flex items-center pt-5"
            >
              <p className="font-semibold">Products</p>
              <GoChevronDown
                className={`text-[20px] ${toggle ? "" : "rotate-180"}`}
              />
            </div>
            {toggle && (
              <div className="flex flex-col  pt-4 pb-3">
                <div className="flex  gap-4 mb-4 text-white min-w-[500px]">
                  {buttonData.map((button) => (
                    <Button
                      key={button.type}
                      variant="bordered"
                      size="sm"
                      className={`border font-semibold rounded-[30px] text-[#FFFFFFB2] ${
                        activeButton === button.type
                          ? " border-[#0357ee]"
                          : "border-gray-700  "
                      }`}
                      onClick={() => handleButtonClick(button.type)}
                    >
                      {button.label}
                    </Button>
                  ))}
                </div>
                <div className="flex flex-col  text-white">
                  {activeButton === "banking" && (
                    <div className="flex flex-col gap-4">
                      {bankingLinks.map((link) => (
                        <div key={link.label} className="flex gap-6">
                          <div className="h-[34px] w-[34px] flex justify-center items-center  rounded-full bg-[#c4e9fd]">
                            {link.icon}
                          </div>
                          <div className="flex flex-col">
                            <h6 className={`font-semibold  text-white text-sm`}>
                              {link.label}
                            </h6>
                            <p className="text-[12px]">{link.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeButton === "credits" && (
                    <div className="flex flex-col gap-4">
                      {creditLinks.map((link) => (
                        <div key={link.label} className="flex gap-6">
                          <div className="h-[34px] w-[34px] flex justify-center items-center  rounded-full bg-[#c4e9fd]">
                            {link.icon}
                          </div>
                          <div className="flex flex-col">
                            <h6 className={`font-semibold  text-white text-sm`}>
                              {link.label}
                            </h6>
                            <p className="text-[12px]">{link.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeButton === "payments" && (
                    <div className="flex flex-col gap-4">
                      {paymentLinks.map((link) => (
                        <div key={link.label} className="flex gap-6">
                          <div className="h-[34px] w-[34px] flex justify-center items-center  rounded-full bg-[#c4e9fd]">
                            {link.icon}
                          </div>
                          <div className="flex flex-col">
                            <h6 className={`font-semibold  text-white text-sm`}>
                              {link.label}
                            </h6>
                            <p className="text-[12px]">{link.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                  {activeButton === "management" && (
                    <div className="flex flex-col gap-4">
                      {bizMgtLinks.map((link) => (
                        <div key={link.label} className="flex gap-6">
                          <div className="h-[34px] w-[34px] flex justify-center items-center  rounded-full bg-[#c4e9fd]">
                            {link.icon}
                          </div>
                          <div className="flex flex-col">
                            <h6 className={`font-semibold  text-white text-sm`}>
                              {link.label}
                            </h6>
                            <p className="text-[12px]">{link.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          <div className="">
            <div
              onClick={() => setToggleCompany(!toggleCompany)}
              className="text-white flex items-center pb-4"
            >
              <p className="font-semibold">Company</p>
              <GoChevronDown
                className={`text-[20px] ${toggleCompany ? "" : "rotate-180"}`}
              />
            </div>
            {toggleCompany && (
              <div>
                <div className="flex flex-col gap-4">
                  {companyLinks.map((link) => (
                    <div key={link.label} className="flex gap-6">
                      <div className="h-[34px] w-[34px] flex justify-center items-center  rounded-full bg-[#c4e9fd]">
                        {link.icon}
                      </div>
                      <h6 className={`font-semibold  text-white text-sm`}>
                        {link.label}
                      </h6>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href={'#'} className="font-semibold  text-white text-lg">About</Link>
          <Link href={'#'} className="font-semibold  text-white text-lg">Contact</Link>
          <Link href={'#'} className="font-semibold  text-white pb-20 text-lg">Blog</Link>
        </div>
        <MobileSignin/>
      </div>
    </>
  );
};

export default MobileNav;
