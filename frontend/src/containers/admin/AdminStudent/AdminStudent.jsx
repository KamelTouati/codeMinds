import React from "react";
import Student from "./components/Student";
import { Sidebar, NavbarAuth } from "../../../components";
import { Link } from "react-router-dom";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
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
      <NavbarAuth />
      <Sidebar />
      <div class="p-4 sm:ml-64">
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

export default AdminStudent;
