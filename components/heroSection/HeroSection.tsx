import Image from "next/image";
import React from "react";
import MobileMockup from "../../assets/pictures/mobileMockup.jpg";
import { Button } from "../ui/button";
import { LuRocket } from "react-icons/lu";

export const HeroSection = () => {
  return (
    <div className="py-32 flex justify-between items-center">
      <div className="w-1/2">
        <div className="text-6xl font-bold leading-tight">
          Create Engaging Landing Pages
        </div>
        <div className="mt-6 text-lg">
          Build beautiful landing pages in record time with Anima’s Landing Page
          UI kit for Figma. No code required!
        </div>
        <div className="flex gap-5 mt-10">
          <Button
            variant={"outline"}
            size={"lg"}
            className="rounded-2xl font-medium text-[#009379] bg-[#E5F4F2]"
          >
            How it works
          </Button>

          <Button
            variant={"default"}
            size={"lg"}
            className="rounded-2xl font-medium bg-[#009379]"
          >
            <LuRocket size={18} className="mr-2" />
            Get Started
          </Button>
        </div>
      </div>

      <div>
        <Image
          src={MobileMockup}
          alt="MobileMockup"
          style={{ objectFit: "cover" }}
        />
      </div>
    </div>
  );
};
