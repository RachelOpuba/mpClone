import { useState } from "react";
import { IoClose } from "react-icons/io5";
import CustomCard from "../CustomCard";
import Image from "next/image";
import Link from "next/link";

const countryLinks = [
  {
    label: "Global",
    img: "global.svg",
  },
  {
    label: "Nigeria",
    img: "nig.svg",
  },
  {
    label: "Kenya",
    img: "ken.svg",
  },
];

type EditOrderProps = {
  onClose: () => void;
};

export const SelectCountry = ({ onClose }: EditOrderProps): JSX.Element => {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>("Nigeria");
  const [prevHoveredCountry, setPrevHoveredCountry] = useState<string | null>(
    "Nigeria"
  );

  const handleMouseEnter = (country: string) => {
    setPrevHoveredCountry(hoveredCountry);
    setHoveredCountry(country);
  };

  const handleMouseLeave = () => {
    setHoveredCountry(prevHoveredCountry || "Nigeria");
    setPrevHoveredCountry(null);
  };

  return (
    <>
      <div className="w-full flex justify-center items-center flex-col h-full pt-20">
        <div className=" w-[95vw] max-w-[450px] flex flex-col p-5 bg-white shadow-lg rounded-xl  ">
          <div className="flex justify-between items-center pb-4">
            <p className="text-[#031335]  text-lg  font-semibold ">
              Select Region/Country
            </p>
            <div className="w-[38px] h-[38px] border rounded-full flex justify-center items-center border-gray-400">
              <IoClose
                className="text-2xl text-[#575c68]   cursor-pointer"
                onClick={onClose}
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            {countryLinks.map((link) => (
              <Link href={'#'}
                key={link.label}
                className={`flex items-center w-full gap-3 group rounded-lg p-4 ${
                  hoveredCountry === link.label ||
                  (prevHoveredCountry === link.label && hoveredCountry !== "Nigeria")
                    ? "bg-[#e6f6fe]"
                    : ""
                }`}
                onMouseEnter={() => handleMouseEnter(link.label)}
                onMouseLeave={handleMouseLeave}
              >
                <Image
                  src={link.img}
                  width={24}
                  height={24}
                  alt={`${link.label} flag`}
                />
                <h6 className="font-semibold">{link.label}</h6>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
