import React from "react";
import Airbnb from "../../assets/pictures/airbnb.jpg";
import Google from "../../assets/pictures/google.jpg";
import Microsoft from "../../assets/pictures/microsoft.jpg";
import Amazon from "../../assets/pictures/amazon.jpg";
import Fedex from "../../assets/pictures/fedEx.jpg";
import Hubspot from "../../assets/pictures/hubspot.jpg";
import Image from "next/image";

export const Logobar = () => {
  const logos = [
    {
      logoNo: 1,
      img: Airbnb,
    },
    {
      logoNo: 2,
      img: Google,
    },
    {
      logoNo: 3,
      img: Microsoft,
    },
    {
      logoNo: 4,
      img: Amazon,
    },
    {
      logoNo: 5,
      img: Fedex,
    },
    {
      logoNo: 6,
      img: Hubspot,
    },
  ];

  return (
    <div className="grid grid-cols-6 grid-row-1 gap-[126px] py-[60px] border border-y-[#D8D8D8] border-x-0">
      {logos.map((logo) => {
        return (
          <div key={logo.logoNo}>
            <Image src={logo.img} alt="Logo" />
          </div>
        );
      })}
    </div>
  );
};
