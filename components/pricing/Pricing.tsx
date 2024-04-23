import Image from "next/image";
import React from "react";
import Check from "../../assets/pictures/Check.jpg";
import { LuRocket } from "react-icons/lu";
import { Button } from "../ui/button";

export const Pricing = () => {
  const pricings = [
    {
      id: 1,
      type: "Free",
      price: 0,
      description: "Best for Small Teams or Individuals.",
    },
    {
      id: 2,
      type: "Professional",
      price: 19,
      description: "Ideal for Growing Companies.",
    },
    {
      id: 3,
      type: "EnterPrise",
      price: 49,
      description: "Ultimate for Enterprise Solutions.",
    },
  ];

  return (
    <div className="flex flex-col items-center py-[120px]">
      <div className="flex flex-col items-center justify-center">
        <div className="text-[38px] font-bold">Pick Your Perfect Plan</div>
        <div>
          Find the perfect plan for your business with our flexible pricing
          options.
        </div>
      </div>

      <div className="grid grid-cols-3 grid-rows-1 gap-[30px] mt-[60px]">
        {pricings.map((pricing) => {
          return (
            <div
              key={pricing.id}
              className={`${
                pricing.id === 3
                  ? "flex flex-col items-start justify-center rounded-[20px] py-10 px-[30px] drop-shadow bg-[#009379] "
                  : "flex flex-col items-start justify-center rounded-[20px] py-10 px-[30px] drop-shadow bg-white"
              }`}
            >
              <div className="text-[21px] font-normal mb-[6px]">
                {pricing.type}
              </div>
              <div className="flex gap-2 items-center mb-[6px]">
                <h1 className="text-[50px] font-bold">${pricing.price}</h1>
                <div className="font-bold">/ month</div>
              </div>
              <div className="mb-6">{pricing.description} </div>
              <div className="flex flex-col gap-y-4">
                <div className="flex items-center gap-2">
                  <Image src={Check} alt="Check" />
                  <div>Write feature details here</div>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={Check} alt="Check" />
                  <div>Write feature details here</div>
                </div>
                <div className="flex items-center gap-2">
                  <Image src={Check} alt="Check" />
                  <div>Write feature details here</div>
                </div>
              </div>
              <Button
                variant={"default"}
                size={"lg"}
                className={`${
                  pricing.id === 3
                    ? "text-[#009379] rounded-2xl text-center font-medium bg-white mt-[30px] w-full"
                    : "text-[#009379] rounded-2xl text-center font-medium bg-[#E5F4F2] mt-[30px] w-full"
                }`}
              >
                <LuRocket size={18} className="mr-2" />
                Get Started
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
