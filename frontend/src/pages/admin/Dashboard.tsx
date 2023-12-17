/* eslint-disable no-empty-pattern */
// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "/images/logo.png";
// import { NavbarAuth, Sidebar } from "../../../components";
// import Card from "./components/Card";
// import Module from "./components/Module";

import { CircularProgressbar } from 'react-circular-progressbar';
import { PiBooks } from "react-icons/pi";

import 'react-circular-progressbar/dist/styles.css';



const Card = ({ year, nmbr_student, progress_module, finished }:any) => {

  return (
    <>
      <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow ">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {year}
          </h5>
        </a>
        <div className="flex gap-2">

          <div className="max-w-24 max-h-24">
            <CircularProgressbar
              value={75}
              text={`${75}%`}
              className="w-24 h-24"
              />
            
          </div>
          <div>
            <p className="mb-3 font-medium text-lg text-gray-900 ">
              {nmbr_student} Students
            </p>
            <p className="mb-3 font-normal text-gray-700 ">
              {progress_module} Modules in progress
            </p>
            <p className="mb-3 font-normal text-gray-700 ">
              {finished} finished
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const Module = ({ image, module_name, resp_teacher }:any) => {
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
      <div className="max-w-24 max-h-24">
            <CircularProgressbar
              value={75}
              text={`${75}%`}
              className="w-24 h-24"
              />
            
          </div>
    </div>
  );
};
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
      image: "/images/placeHolder.png",
      module_name: "Data Science",
      resp_teacher: "Chemseddine Berbeugue",
      progress: "10",
    },
    {
      image: "/images/placeHolder.png",
      module_name: "Data Science",
      resp_teacher: "Chemseddine Berbeugue",
      progress: "10",
    },
    {
      image: "/images/placeHolder.png",
      module_name: "Data Science",
      resp_teacher: "Chemseddine Berbeugue",
      progress: "10",
    },
    {
      image: "/images/placeHolder.png",
      module_name: "Data Science",
      resp_teacher: "Chemseddine Berbeugue",
      progress: "10",
    },
  ];

  return (
    <>
      <div className="p-4 ">
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
    </>
  );
};



interface IProps {}
const DashboardPage = ({}: IProps) => {
  return <DashboardAdmin />;
};
export default DashboardPage;
