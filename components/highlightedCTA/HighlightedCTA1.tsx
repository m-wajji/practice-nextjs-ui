import Image from "next/image";
import React from "react";
import MobileMockup2 from "../../assets/pictures/mobileMockup2.jpg";
import { LuRocket } from "react-icons/lu";
import { Button } from "../ui/button";

export const HighlightedCTA1 = () => {
  return (
    <div className="flex items-center justify-between gap-[60px] py-[120px]">
      <Image
        src={MobileMockup2}
        alt="MobileMockup2"
        style={{ objectFit: "cover" }}
        className="h-[450px] w-[540px]"
      />

      <div className="w-[600px]">
        <div className="text-[50px] font-bold">
          Get Landing Page UI Kit Today!
        </div>
        <div className="text-[21px] font-normal mt-5">
          Break the Figma limits and explore the endless possibilities with
          Anima.
        </div>
        <Button
          variant={"default"}
          size={"lg"}
          className="rounded-2xl font-medium bg-[#009379] mt-10"
        >
          <LuRocket size={18} className="mr-2" />
          Get Started
        </Button>
      </div>
    </div>
  );
};
