import React from "react";
import { BiChalkboard } from "react-icons/bi";
import { Button } from "../ui/button";
import { LuRocket } from "react-icons/lu";

export const Navbar = () => {
  return (
    <div className="flex px-[50px] py-[20px] justify-between items-center">
      <div className="flex items-center">
        <BiChalkboard size={24} className="mr-1" />
        <div className="text-[17px] font-bold">Landing</div>
        <div className="text-[17px] font-medium">Page</div>
      </div>

      <div className="flex gap-6 items-center">
        <div className="font-medium text-[#009379] mr-[26px]">Contact</div>
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
  );
};
