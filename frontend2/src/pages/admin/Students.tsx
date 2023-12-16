/* eslint-disable no-empty-pattern */
interface IProps {}


// import React from "react";
// import Student from "./components/Student";
// import { Sidebar, NavbarAuth } from "../../../components";
// import { Link } from "react-router-dom";
// import { FaRegArrowAltCircleRight } from "react-icons/fa";


const Student = ({ student_image, student_name, student_level }:any) => {
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


const AdminStudent = () => {
  const students = [
    {
      student_image: "/images/image.png",
      student_name: "Zermache Moncef",
      student_level: "2cs student"
    },
    {
      student_image: "/images/image.png",
      student_name: "Zermache Moncef",
      student_level: "2cs student"
    },
  ];
  return (
    <>

      <div className="p-4 sm:ml-64">
        <div className="flex flex-col">
          <div>
            <h1 className="text-xl font-semibold my-4">Students</h1>
          </div>
          <div className="flex flex-col gap-4">
            {students.map((item, index) => (
              <Student
                key={index}
                student_image={item.student_image}
                student_name={item.student_name}
                student_level={item.student_level}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

// export default AdminStudent;

const StudentsPage = ({}: IProps) => {
  return (
  <AdminStudent/>);
};
export default StudentsPage;
