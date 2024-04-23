import Image from "next/image";
import MobileMockup3 from "../../assets/pictures/mobileMockup3.jpg";
import React from "react";
import { LuRocket } from "react-icons/lu";
import { Button } from "../ui/button";

export const HighlightedCTA2 = () => {
  return (
    <div className="flex items-start justify-between bg-[#F2BFAF] gap-[60px] rounded-[20px] my-[60px]">
      <div className="flex flex-col items-start justify-center w-[500px] mx-[60px]">
        <div className="text-[50px] font-bold mt-[60px]">
          Get Landing Page UI Kit Today!
        </div>
        <div className="text-[21px] mt-5">
          Break the Figma limits and explore the endless possibilities with
          Anima.
        </div>
        <Button
          variant={"default"}
          className="rounded-2xl font-medium bg-[#009379] mt-10 mb-[40px] w-[221px] h-[60px]"
        >
          <LuRocket size={18} className="mr-2" />
          Get Started
        </Button>
      </div>
      <Image
        src={MobileMockup3}
        alt="MobileMockup3"
        style={{ objectFit: "cover" }}
        className="w-[578px] h-[434px] rounded-[20px]"
      />
    </div>
  );
};
