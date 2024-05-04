"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomCard from "../CustomCard";
import { MdBusiness } from "react-icons/md";
import { FaHashtag } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa6";



const companyLinks = [
  {
    label: "Culture",
    icon: MdBusiness,
  },
  {
    label: "Careers",
    icon: FaLaptopCode,
  },
  {
    label: "Press",
    icon: FaHashtag,
  },
];

export const CompanyNav = () => {
  const [selectedCard, setSelectedCard] = useState<number>(0);

  const handleCardHover = (cardNumber: number) => {
    setSelectedCard(cardNumber);
  };

  return (
    <>
      <div className="w-[80%] max-w-[300px] rounded-xl bg-white shadow-md  pt-10 p-8  gap-5  ms-[50vw]">
      <div className="flex flex-col gap-4">
              {companyLinks.map((link) => (
                <div key={link.label}>
                    <Link href={'#'}>
                    <CustomCard
                        heading={link.label}
                        icon={link.icon}
                        padding="pt-3"
                    />
                    </Link>
                </div>
              ))}
            </div>        
        <div> 
        </div>
      </div>
    </>
  );
};
