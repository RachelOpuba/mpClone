'use client'
import { useState } from 'react';
import Link from 'next/link';
import { GoChevronDown } from "react-icons/go";
import {Button} from "@nextui-org/react";



type ButtonType = 'banking' | 'payments' | 'credits' | 'management';
const buttonData = [
    { label: 'Banking', type: 'banking' },
    { label: 'Payments', type: 'payments' },
    { label: 'Credits', type: 'credits' },
    { label: 'Business Management', type: 'management' },
  ];


const MobileNav = () => {
    const [activeButton, setActiveButton] = useState<ButtonType>('banking');

    const handleButtonClick = (buttonName: any) => {
        setActiveButton(buttonName);
      };

  return (
    <>
        <div className='w-full bg-primary-darkBlue h-[calc(100vh-90px)] overflow-auto absolute top-[80px] block lg:hidden px-5'>
            <div className='text-white flex items-center pt-5'>
                <p className='font-semibold'>Products</p>
                <GoChevronDown className='text-[20px]'/>
            </div>        
            <div className="flex flex-col  pt-4 pb-3">
                <div className="flex  gap-4 mb-4 text-white">
                    {buttonData.map((button) => (
                        <Button
                        key={button.type}
                        variant="bordered"
                        size="sm"
                        className={`border font-semibold rounded-[30px] text-[#FFFFFFB2] ${
                            activeButton === button.type ? ' border-[#0357ee]' : 'border-gray-700  '
                        }`}
                        onClick={() => handleButtonClick(button.type)}
                        >
                        {button.label}
                        </Button>
                    ))}
                </div>
                <div className="flex flex-col  text-white">
                    {activeButton === 'banking' && (
                    <>
                        <Link href="/banking/page1">Banking Page 1</Link>
                        <Link href="/banking/page2">Banking Page 2</Link>
                        <Link href="/banking/page3">Banking Page 3</Link>
                    </>
                    )}
                    {activeButton === 'payments' && (
                    <>
                        <Link href="/payments/page1">Payments Page 1</Link>
                        <Link href="/payments/page2">Payments Page 2</Link>
                    </>
                    )}
                    {activeButton === 'credits' && (
                    <div>
                        <Link href="/credits/page1">Credits Page 1</Link>
                        <Link href="/credits/page2">Credits Page 2</Link>
                    </div>
                    )}
                    {activeButton === 'management' && (
                    <>
                        <Link href="/management/page1">Management Page 1</Link>
                        <Link href="/management/page2">Management Page 2</Link>
                    </>
                    )}
                </div>
            </div>
            </div>
    </>
  )
}

export default MobileNav