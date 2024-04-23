import React from "react";
import Photo1 from "../../assets/pictures/ProfileImagePlaceholder1.jpg";
import Photo2 from "../../assets/pictures/ProfileImagePlaceholder2.jpg";
import Photo3 from "../../assets/pictures/ProfileImagePlaceholder3.jpg";
import { FaTwitter } from "react-icons/fa";
import { IoBasketballOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

export const Team = () => {
  const team = [
    {
      id: 1,
      photo: Photo1,
      name: "Sara K.",
      title: "UX Designer",
    },
    {
      id: 2,
      photo: Photo2,
      name: "Micheal M.",
      title: "Lead Designer",
    },
    {
      id: 3,
      photo: Photo3,
      name: "Lauren L.",
      title: "Product Designer",
    },
  ];

  return (
    <div className="flex flex-col items-center py-[120px]">
      <div className="flex flex-col items-center justify-center">
        <div className="text-[38px] font-bold">Meet our team</div>
        <div className="mt-5">
          Get to know the faces behind the scenes and learn about the values
          that drive us.
        </div>
      </div>

      <div className="grid grid-cols-3 grid-rows-1 gap-[30px] mt-[60px]">
        {team.map((member) => {
          return (
            <div
              key={member.id}
              className="flex flex-col items-center bg-white rounded-[20px] drop-shadow-md"
            >
              <Image
                src={member.photo}
                alt="Photo"
                style={{ objectFit: "cover" }}
                className="w-[370px] h-[278px] "
              />

              <div className="flex flex-col items-center justify-center border w-full border-[#D8D8D8] border-x-0 border-t-0">
                <div className="text-[21px] font-semibold mt-[20px] mx-[30px]">
                  {member.name}
                </div>
                <div className="mt-[6px] mb-[20px] mx-[30px]">
                  {member.title}
                </div>
              </div>

              <div className="flex gap-4 items-center mb-[30px] mt-[20px]">
                <div className="bg-[#E5F4F2] p-2 rounded-full">
                  <FaInstagram size={32} />
                </div>
                <div className="bg-[#E5F4F2] p-2 rounded-full">
                  <IoBasketballOutline size={32} />
                </div>
                <div className="bg-[#E5F4F2] p-2 rounded-full">
                  <FaTwitter size={32} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
