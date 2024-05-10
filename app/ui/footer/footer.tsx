"use client";
import { useState } from "react";
import Modal from "@/components/Modal";
import { SelectCountry } from "@/components/navigation/SelectCountry";
import Image from "next/image";
import Link from "next/link";
import { GoChevronDown } from "react-icons/go";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

const footerLinks = [
  {
    label: "For Business",
    links: [
      { text: "Business Account", href: "/business-account" },
      { text: "Point of Sale Terminal", href: "/pos-terminal" },
      { text: "Loan", href: "/working-capital-loans" },
      { text: "Expense Card", href: "/expense-card" },
    ],
  },
  {
    label: "For Personal",
    links: [
      { text: "Instant Debit Card", href: "/instant-debit-card" },
      { text: "Personal Account", href: "/personal-account" },
      { text: "Payment", href: "/payment" },
    ],
  },
  {
    label: "Company",
    links: [
      { text: "About Us", href: "/about" },
      { text: "Culture", href: "/culture" },
      { text: "Join Our Team", href: "/careers" },
      { text: "Press & Media", href: "/press" },
      { text: "Contact Us", href: "/contact" },
    ],
  },
  {
    label: "Resources",
    links: [
      { text: "Moniepoint Blog", href: "/blog" },
      { text: "Help Centre", href: "/help" },
      { text: "Learning Centre", href: "/learning" },
      { text: "Whistleblower Policy", href: "/whistleblower-policy" },
      { text: "IMS Policy", href: "/ims-policy" },
    ],
  },
];

const socialMediaLinks = [
  { icon: <FaTwitter className="text-[#777c85] text-lg" />, href: "#" },
  { icon: <FaFacebook className="text-[#777c85] text-lg" />, href: "#" },
  { icon: <FaInstagram className="text-[#777c85] text-lg" />, href: "#" },
  { icon: <FaYoutube className="text-[#777c85] text-lg" />, href: "#" },
  { icon: <FaLinkedin className="text-[#777c85] text-lg" />, href: "#" },
];

export default function Footer() {
  const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <footer className="w-full bg-[#030b1d] flex justify-center">
      <div className="w-full max-w-[1320px] px-5 py-10 flex flex-col mx-auto">
        <div className="flex flex-col">
          <div>
            <Link href={"#"}>
              <Image
                src={"/logo-mfb-white.svg"}
                height={34}
                width={137}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.7fr] gap-10 lg:gap-[96px] pb-10">
            <div className="flex flex-col">
              <p className="text-[#FFFFFF] text-opacity-70  font-medium leading-[157.1%] text-sm mt-4">
                Moniepoint Microfinance Bank Limited is authorised and regulated
                by the Central Bank of Nigeria to offer banking services.
                Deposits are insured by the Nigerian Deposit Insurance
                Corporation (NDIC).
              </p>
              <div className="mt-[48px] flex gap-2 md:gap-5">
                <div className="flex justify-center items-center gap-2 bg-[#020711] p-2 md:p-3 rounded-xl">
                  <Image
                    src={"/apple.svg"}
                    width={40}
                    height={40}
                    alt="Apple"
                    className="w-[20px] h-[20px] lg:-w-[40px] lg:h-[40px]"
                  />
                  <div className="text-white">
                    <p className="font-medium text-[10px] lg:text-xs ">
                      Get it on
                    </p>
                    <p className="font-semibold text-sm">App Store</p>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-2 bg-[#020711] p-3 rounded-xl">
                  <Image
                    src={"/playstore.svg"}
                    width={40}
                    height={40}
                    alt="Apple"
                    className="w-[20px] h-[20px] lg:-w-[40px] lg:h-[40px]"
                  />
                  <div className="text-white">
                    <p className="font-medium text-[10px] lg:text-xs">
                      Get it on
                    </p>
                    <p className="font-semibold text-sm">Google Play</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2  md:grid-cols-4 gap-6 text-[#fff] font-medium text-sm ">
              {footerLinks.map((item, index) => (
                <div key={index} className="pb-4 md:pb-0">
                  <h4 className="font-bold pb-3">{item.label}</h4>
                  <ul className="flex flex-col gap-3">
                    {item.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.href}
                          className="text-[#FFFFFF] text-opacity-70 "
                        >
                          {link.text}{" "}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.7fr] gap-10 lg:gap-[96px] pb-10">
            <div className="text-[#FFFFFF] text-opacity-70 leading-[146.6%] font-medium tracking-[-.008rem] text-sm">
              <p>Plot 7A, Block 4, </p>
              <p> Admirality Road,</p>
              <p> Lekki Phase 1, Lagos State.</p>
            </div>
            <div className="flex justify-between items-center   w-full ">
              <div className="flex flex-col">
                <p className="text-white text-sm pb-4">Connect with us </p>

                <div className="flex gap-1">
                  {socialMediaLinks.map((socialMedia, index) => (
                    <Link
                      key={index}
                      href={socialMedia.href}
                      className="w-[32px] h-[32px] rounded-full bg-[#1d2434] flex justify-center items-center "
                    >
                      {socialMedia.icon}
                    </Link>
                  ))}
                </div>
              </div>
              <div
                onClick={() => setShowModal(true)}
                className="flex  cursor-pointer items-center h-full gap-1 pt-8 md:pt-0"
              >
                <Image
                  src={"/nig.svg"}
                  width={24}
                  height={24}
                  alt="Nigeria flag"
                />
                <p className="text-[#FFFFFF] text-opacity-70 ">Nigeria</p>
                <GoChevronDown className="text-[20px]" />
              </div>
            </div>
            <div></div>
          </div>
          <div className="border-t border-[#BDD7EE] border-opacity-15 ">
            <div className="pt-3 flex flex-col md:flex-row justify-between md:items-center items-start w-full font-medium text-[#FFFFFF] text-opacity-40 text-sm pb-20">
              <p>Copyright © 2023, Moniepoint</p>
              <div className="flex gap-[50px] items-center justify-between w-full md:w-auto pt-5 md:pt-0">
                <Link href={"#"}>Privacy Policy</Link>
                <Link href={"#"}>Cookie Policy</Link>
              </div>
            </div>
            <p className="text-[13px] leading-[195.1%] font-medium text-[#FFFFFF] text-opacity-40">
              © 2023. Moniepoint is a bank with its services provided by
              Moniepoint MFB Limited and duly licensed by the Central Bank of
              Nigeria. Unauthorised reproduction or redistribution of
              copyrighted materials on this website and Moniepoint&apos;s digital
              media pages is strictly prohibited. By clicking on some of the
              links above, you will leave Moniepoint&apos;s website and be directed
              to a third-party website. The privacy practices of those third
              parties may differ from those of Moniepoint. We recommend you
              review the privacy statements of those third-party websites, as
              Moniepoint is not responsible for those third parties&apos;s privacy or
              security practices. Additional disclosures can be found in the
              resources section of our website.
            </p>
          </div>
        </div>
      </div>
      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <SelectCountry onClose={() => setShowModal(false)} />
      </Modal>
    </footer>
  );
}
