import React from "react";
import { FaUserAlt } from "react-icons/fa";

const Card = ({ name, description }) => {
  return (
    <div
      data-aos="slide-up"
      className="max-w-sm bg-color4 border border-gray-200 rounded-lg shadow flex flex-col items-center justify-center p-4"
    >
      <div className="rounded-xl text-white bg-[#4318FF] flex items-center justify-center p-4">
        <FaUserAlt />
      </div>
      <div className="p-5">
        <a href="#">
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-color7">
            {name}
          </h5>
        </a>
        <p className="mb-3 font-normal font-semibold text-[#68769F]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default Card;
