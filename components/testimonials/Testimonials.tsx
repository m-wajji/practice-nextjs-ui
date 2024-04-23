import React from "react";
import Photo1 from "../../assets/pictures/Photo1.jpg";
import Photo2 from "../../assets/pictures/Photo2.jpg";
import Photo3 from "../../assets/pictures/Photo3.jpg";
import FilledStar from "../../assets/pictures/StarIcon.jpg";
import EmptyStar from "../../assets/pictures/EmptyStarIcon.jpg";
import Image from "next/image";

export const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      photo: Photo1,
      name: "Sarah K.",
      title: "UX Designer @Brello",
      description:
        "I was looking for a way to streamline my design process and the Anima’s Landing Page UI Kit was a lifesaver! The intuitive design and ease of customisation have saved me hours of time and effort. Highly recommend!",
      noOfStars: 5,
    },
    {
      id: 2,
      photo: Photo2,
      name: "Michael L.",
      title: "Creative Director @Yo",
      description:
        "I was looking for a way to streamline my design process and the Anima’s Landing Page UI Kit was a lifesaver! The intuitive design and ease of customisation have saved me hours of time and effort. Highly recommend!",
      noOfStars: 4,
    },
    {
      id: 3,
      photo: Photo3,
      name: "Lauren M.",
      title: "UI Designer @Boo",
      description:
        "I was looking for a way to streamline my design process and the Anima’s Landing Page UI Kit was a lifesaver! The intuitive design and ease of customisation have saved me hours of time and effort. Highly recommend!",
      noOfStars: 5,
    },
  ];
  return (
    <div className="flex flex-col py-[120px] items-center">
      <div className="flex flex-col items-center justify-center">
        <div className="text-[38px] font-bold">
          Real Stories from Satisfied Customers
        </div>
        <div className="mt-5">
          See how our landing page ui kit is making an impact.
        </div>
      </div>

      <div className="grid grid-cols-3 grid-rows-1 gap-[30px] mt-[60px]">
        {testimonials.map((testimonial) => {
          return (
            <div
              key={testimonial.id}
              className="flex flex-col items-center justify-center bg-white rounded-[20px] py-10 px-[30px]  drop-shadow"
            >
              <Image src={testimonial.photo} alt="Photos" className="mb-4" />
              <div className="text-[21px] font-semibold">
                {testimonial.name}
              </div>
              <div className="text-[14px] text-[#374151] font-normal mt-2 text-center">
                {testimonial.title}
              </div>
              <div className="mt-[30px]">{testimonial.description} </div>
              <div className="flex gap-2 mt-[30px]">
                {[...Array(testimonial.noOfStars)].map(() => {
                  return <Image src={FilledStar} alt="FilledStar" />;
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
