"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomCard from "../CustomCard";
import { MdBusiness } from "react-icons/md";
import { FaHashtag, FaHandHoldingUsd } from "react-icons/fa";
// import { BsCreditCard } from "react-icons/bs";
import { MdOutlinePointOfSale } from "react-icons/md";
import { MdOutlinePayments } from "react-icons/md";
import { PiMoney } from "react-icons/pi";
import { RiWirelessChargingFill } from "react-icons/ri";
import { MdCreditScore } from "react-icons/md";
import { LuBookOpenCheck } from "react-icons/lu";







import {  } from "react-icons/fa";


const productLinks = [
  { label: "Banking", desc: "Business and personal banking accounts" },
  { label: "Credit", desc: "Business and individuals" },
  { label: "Payments", desc: "Accept payments from anywhere" },
  { label: "Business Management", desc: "Easy business management & reports" },
];
const bankingLinks = [
  {
    label: "Business Account",
    desc: "Get a free bank account to power your business",
    icon: MdBusiness,
  },
  {
    label: "USSD",
    desc: "Dial *5573# for easy offline banking",
    icon: FaHashtag,
  },
];
const creditLinks = [
  {
    label: "Working Capital Loans",
    desc: "Flexible loans that let your business grow",
    icon: FaHandHoldingUsd,
  },
  {
    label: "Overdraft",
    desc: "Keep your business going even when money is low",
    icon: MdOutlinePayments,
    commingSoon: true
  },
  {
    label: "Salary Advance",
    desc: "Provide salary advance for your employees",
    icon: PiMoney,
    commingSoon: true
  },
];
const paymentLinks = [
  {
    label: "POS Terminals",
    desc: "Accept card and transfer payments ",
    icon: MdOutlinePointOfSale,
  },
  {
    label: "Web Payment (Monnify)",
    desc: "Collect web payments with ease using Monnify",
    icon: RiWirelessChargingFill
,
  },
];
const bizMgtLinks = [
  {
    label: "Expense Cards",
    desc: "Get a secure card for your business expenses",
    icon: MdCreditScore,
  },
  {
    label: "Bookkeeping",
    desc: "Manage your business finances with ease and efficiency",
    icon: LuBookOpenCheck,
    commingSoon: true
  },
];
export const ProductNav = () => {
  const [selectedCard, setSelectedCard] = useState<number>(0);

  const handleCardHover = (cardNumber: number) => {
    setSelectedCard(cardNumber);
  };

  return (
    <>
      <div className="w-[80%] max-w-[780px] rounded-xl bg-white shadow-md pt-10 p-8 grid grid-cols-2 gap-5  mx-auto ">
        <div className=" flex flex-col gap-2">
          {productLinks.map((link, index) => (
            <div
              key={link.label}
              className={`p-2 ps-4 w-full rounded-lg ${
                selectedCard === index ? "bg-[#e7f6fe]" : "" // Apply background color if selected
              }`}
              onMouseEnter={() => handleCardHover(index)}
              //   onMouseLeave={() => setSelectedCard(-1)}
            >
              <h6 className="text-[#031335] text-xl leading-[140%]">
                {link.label}
              </h6>
              <p className="text-[#3e588e] font-medium text-[12px]">
                {link.desc}
              </p>
            </div>
          ))}
        </div>
        <div>
         
          {selectedCard === 0 && (
            <div className="flex flex-col gap-4">
              {bankingLinks.map((link) => (
                <div key={link.label}>
                  <CustomCard
                    heading={link.label}
                    text={link.desc}
                    icon={link.icon}
                  />
                </div>
              ))}
            </div>
          )}
          {selectedCard === 1 && (
             <div className="flex flex-col gap-4">
             {creditLinks.map((link) => (
               <div key={link.label}>
                 <CustomCard
                   heading={link.label}
                   text={link.desc}
                   icon={link.icon}
                   commingSoon={link.commingSoon}

                                    />
               </div>
             ))}
           </div>
          )}
          {selectedCard === 2 && (
             <div className="flex flex-col gap-4">
             {paymentLinks.map((link) => (
               <div key={link.label}>
                 <CustomCard
                   heading={link.label}
                   text={link.desc}
                   icon={link.icon}
                   
                 />
               </div>
             ))}
           </div>
          )}
          {selectedCard === 3 && (
             <div className="flex flex-col gap-4">
             {bizMgtLinks.map((link) => (
               <div key={link.label}>
                 <CustomCard
                   heading={link.label}
                   text={link.desc}
                   icon={link.icon}
                   commingSoon={link.commingSoon}

                 />
               </div>
             ))}
           </div>
          )}
        </div>
        {/* #0357ee  #c4e9fd*/}
      </div>
    </>
  );
};
