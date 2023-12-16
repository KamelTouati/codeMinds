import React from "react";

const Student = ({ student_image, student_name, student_level }) => {
  return (
    <div className="bg-[#F8FBFF] flex justify-between items-center p-4 rounded-xl border border-gray-200">
      <div className="flex gap-4">
        <div>
          <img className="w-[100px]" src={student_image} alt="" />
        </div>
        <div className="flex flex-col">
          <h1 className="text-xl font-bold">{student_name}</h1>
          <h1 className="text-lg font-normal">{student_level}</h1>
        </div>
      </div>
    </div>
  );
};

export default Student;
