import React from "react";
import { Link } from "react-router-dom";
import logo from "/images/logo.png";
import { NavbarAuth, Sidebar } from "../../../components";
import Card from "./components/Card";
import Module from "./components/Module";

const DashboardAdmin = () => {
  const cards = [
    {
      year: "1st year",
      nmbr_student: "232",
      progress_module: "10",
      finished: "10",
    },
    {
      year: "2nd year",
      nmbr_student: "232",
      progress_module: "10",
      finished: "10",
    },
    {
      year: "3rd year",
      nmbr_student: "232",
      progress_module: "10",
      finished: "10",
    },
    {
      year: "4th year",
      nmbr_student: "232",
      progress_module: "10",
      finished: "10",
    },
    {
      year: "5th year",
      nmbr_student: "232",
      progress_module: "10",
      finished: "10",
    },
    
  ];
  const modules = [
    {
      image: "/images/image.png",
      module_name: "Data Science",
      resp_teacher: "Chemseddine Berbeugue",
      progress: "10",
    },
    {
      image: "/images/image.png",
      module_name: "Data Science",
      resp_teacher: "Chemseddine Berbeugue",
      progress: "10",
    },
    {
      image: "/images/image.png",
      module_name: "Data Science",
      resp_teacher: "Chemseddine Berbeugue",
      progress: "10",
    },
    {
      image: "/images/image.png",
      module_name: "Data Science",
      resp_teacher: "Chemseddine Berbeugue",
      progress: "10",
    },
  ];
  return (
    <>
      <div class="p-4 sm:ml-64">
        <div className="flex flex-col">
          <div className="my-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold">Academic Years Progress</h1>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {cards.map((item, index) => (
              <Card
                key={index}
                year={item.year}
                nmbr_student={item.nmbr_student}
                progress_module={item.progress_module}
                finished={item.finished}
              />
            ))}
          </div>
          <div>
            <h1 className="text-xl font-semibold my-4">Modules Progress</h1>
          </div>
          <div className="flex flex-col gap-4">
            {modules.map((item, index) => (
              <Module
                key={index}
                image={item.image}
                module_name={item.module_name}
                resp_teacher={item.resp_teacher}
                progress={item.progress}
              />
            ))}
          </div>
        </div>
      </div>
      <Sidebar />
    </>
  );
};

export default DashboardAdmin;
