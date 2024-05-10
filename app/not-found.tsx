import { Button } from "@nextui-org/react";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <main className="flex justify-center items-center  bg-[#edf8fe] z-10  w-full">
        <div className="py-[100px] flex flex-col justify-center items-center h-full w-full">
          <Button
            color="default"
            className="bg-[#fff0c2] text-lg text-[#092256] font-semibold mt-[100px] rounded-full"
          >
            Page Not Found
          </Button>
          <div className="text-[#030b1d]  text-center px-4 flex flex-col justify-center items-center font-medium">
            <h1 className="text-[36px] lg:text-[45px] xl:text-[50px]  leading-[112%] pt-4">
              Why wasn't this <span className="text-[#0357ee]">page</span>{" "}
              found?
            </h1>
            <p className="py-4  max-w-[500px] lg:max-w-[550px]  xl:max-w-[650px] text-center w-full leading-[156%] text-base lg:text-lg">
              It would seem that the page you’re looking for is out on loan,
              powering dreams for global businesses out there. Let’s find you a
              page that’s still here.
            </p>
          </div>
          <Link href={"/"}>
            <Button color="primary" size="lg" className="bg-[#0357EE]  xl:py-7">
              Return to Homepage
            </Button>
          </Link>
        </div>
      </main>
    </>
  );
}
