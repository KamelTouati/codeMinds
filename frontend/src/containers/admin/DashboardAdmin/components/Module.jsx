import React from "react";

const Module = ({ image, module_name, resp_teacher }) => {
  return (
    <div className="bg-[#F8FBFF] flex justify-between items-center p-4 rounded-xl border border-gray-200">
      <div className="flex gap-4">
        <div>
          <img className="w-[100px]" src={image} alt="" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold">{module_name}</h1>
          <h1 className="font-semibold">
            Responsable Teacher : <br />
            <span className="font-normal">{resp_teacher}</span>
          </h1>
        </div>
      </div>
      <div class="progress-bar">
        <progress
          value={75}
          min={0}
          max={100}
          style={{ visibility: "hidden", height: 0, width: 0 }}
        >
          75%
        </progress>
      </div>
    </div>
  );
};

export default Module;
