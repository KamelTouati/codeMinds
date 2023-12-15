import React from "react";

const AnnouncementComponent = ({
  prof_image,
  prof_name,
  description,
  title,
  date,
}) => {
  return (
    <div className="bg-[#F8FBFF] flex justify-between items-center p-4 rounded-xl border border-gray-200">
      <div className="flex gap-4">
        <div>
          <img className="w-[100px]" src={prof_image} alt="" />
        </div>
        <div className="flex flex-col">
          <div className="flex gap-4 items-center">
            <h1 className="text-3xl font-bold">{prof_name}</h1>
            <h1 className="text-sm font-normal">{date}</h1>
          </div>
          <span className="font-normal">{description}</span>
          <div className="flex justify-between bg-gray-300 rounded-lg p-4 my-2">
            <h1 className="font-semibold">{title}</h1>
            <div className="flex gap-2 items">
              <img className="w-[20px]" src="/images/pdf.svg" alt="" />
              PV-S1.pdf
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementComponent;
