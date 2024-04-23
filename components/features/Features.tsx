import React from "react";
import FeatureIcon1 from "../../assets/pictures/featureicon1.jpg";
import FeatureIcon2 from "../../assets/pictures/featureicon2.jpg";
import FeatureIcon3 from "../../assets/pictures/featureicon3.jpg";
import { FaArrowRight } from "react-icons/fa6";
import Image from "next/image";
import { Button } from "../ui/button";

export const Features = () => {
  const features = [
    {
      featureNo: 1,
      featureIcon: FeatureIcon1,
      heading: "Fast building",
      description:
        "Tailor Anima's Landing Page UI Kit to your unique style and brand with customizable components, in no time!",
    },
    {
      featureNo: 2,
      featureIcon: FeatureIcon2,
      heading: "Responsive Design",
      description:
        "Tailor Anima's Landing Page UI Kit to your unique style and brand with customizable components, in no time!",
    },
    {
      featureNo: 3,
      featureIcon: FeatureIcon3,
      heading: "No Code Needed",
      description:
        "Tailor Anima's Landing Page UI Kit to your unique style and brand with customizable components, in no time!",
    },
  ];

  return (
    <div className="flex flex-col py-[120px] items-center">
      <div className="text-center">
        <div className="text-[38px] font-bold">Features</div>
        <div className="text-base font-normal mt-5">
          These are just a few features you’ll get using Anima Landing Page Ui
          Kit.
        </div>
      </div>

      <div className="grid grid-cols-3 grid-rows-1 gap-[30px] mt-[60px]">
        {features.map((feature) => {
          return (
            <div
              key={feature.featureNo}
              className="flex flex-col items-center bg-white w-[370px] rounded-[20px] py-10"
            >
              <Image
                src={feature.featureIcon}
                alt="FeatureIcons"
                sizes="82px"
              />
              <div className="text-[28px] font-semibold mt-[30px]">
                {feature.heading}
              </div>
              <div className="text-base font-normal text-center mt-6">
                {feature.description}
              </div>
              <Button
                variant={"link"}
                className="text-[#009379] text-base font-semibold gap-2 mt-[30px]"
              >
                Learn More
                <FaArrowRight />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
