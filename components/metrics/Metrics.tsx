import React from "react";

export const Metrics = () => {
  const metrics = [
    {
      id: 1,
      Size: "10k+",
      description: "Website launched",
    },
    {
      id: 2,
      Size: "931k+",
      description: "Projects created with Anima",
    },
    {
      id: 3,
      Size: "240k+",
      description: "New users joined Anima",
    },
    {
      id: 4,
      Size: "12k+",
      description: "Teams used Anima",
    },
  ];
  return (
    <div className="flex flex-col items-center py-[120px]">
      <div className="flex flex-col items-center justify-center gap-5">
        <div className="text-[38px] font-bold">Our Metrics Tell the Story</div>
        <div className="text-base font-normal">
          Our metrics component gives you the inside scoop on your success and
          helps you stay on top of your game in style.
        </div>
      </div>

      <div className="grid grid-cols-4 grid-rows-1 gap-[30px] mt-[60px]">
        {metrics.map((metric) => {
          return (
            <div
              key={metric.id}
              className="flex flex-col items-center justify-center bg-white rounded-t-[20px] px-4 py-12 border border-b-[#F2BFAF] border-b-4 border-x-0 border-t-0"
            >
              <div className="text-[38px] font-bold ">{metric.Size}</div>
              <div className="mt-[5px]">{metric.description} </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
