import { useState } from "react";
import { Button } from "@nextui-org/react";
import { GrLinkNext } from "react-icons/gr";
import Image from "next/image";
import { GoChevronDown } from "react-icons/go";
import Modal from "../Modal";
import { SelectCountry } from "./SelectCountry";


export const MobileSignin = () => {
    const [showModal, setShowModal] = useState<boolean>(false);

  return (
    <>
      <div className="fixed bottom-0  right-0 w-full bg-[#020e26]  p-5 flex gap-5 ">
        <div className="flex gap-5 w-full flex-1">
          <Button color="primary" endContent={<GrLinkNext />} className="w-full bg-[#0357ee] py-2">
            Sign in
          </Button>
        </div>
        <div className="bg-[#FFFFFF] rounded-3xl bg-opacity-5  ">
        <div
                onClick={() => setShowModal(true)}
                className="flex justify-center cursor-pointer items-center h-full gap-2 p-2 px-3"
              >
                <div>
                <Image
                  src={"/nig.svg"}
                  width={24}
                  height={24}
                  alt="Nigeria flag"
                />
                </div>
                <div>
                <GoChevronDown className="text-[20px] text-white text-xlg" />
                </div>
              </div>

        </div>
        <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
          <SelectCountry onClose={() => setShowModal(false)} />
        </Modal>
      </div>
    </>
  );
};
