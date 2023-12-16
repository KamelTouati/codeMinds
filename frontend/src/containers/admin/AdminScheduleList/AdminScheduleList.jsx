import React from "react";
import { Link } from "react-router-dom";
import logo from "/images/logo.png";
import { NavbarAuth, Sidebar } from "../../../components";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Schedule } from "./Schedule";

const AdminScheduleList = () => {
  const ScheduleList = [
    {
      title: "First Semester Schedule(2cs)",
      date: "12 august 2021",
      creator: "NOUARA",
      description:
        "A schedule for the `2nd year` group `2` students which covers the modules : AI, Data science , English  , Networking , Enterpreunership , Data Analysis and ",
    },
    {
      title: "Second Semester Schedule(2cs)",
      date: "12 august 2021",
      creator: "NOUARA",
      description:
        "A schedule for the `2nd year` group `2` students which covers the modules : AI, Data science , English  , Networking , Enterpreunership , Data Analysis and ",
    },
    {
      title: "First Semester Schedule(1cp)",
      date: "12 august 2021",
      creator: "NOUARA",
      description:
        "A schedule for the `2nd year` group `2` students which covers the modules : AI, Data science , English  , Networking , Enterpreunership , Data Analysis and ",
    },
  ];
  return (
    <>
      <NavbarAuth />
      <Sidebar />
      <div class="p-4 sm:ml-64">
        <div className="flex flex-col">
          <div className="my-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold">Meeting Minutes</h1>
            {/* <h1 className="text-md text-gray-600">Last two weeks</h1> */}
            <div className="flex my-5">
              <Link
                to="/login"
                type="button"
                className="buttonStyle2 flex items-center gap-4 text-white p-2"
              >
                Add new Meeting Minutes
                <FaRegArrowAltCircleRight />
              </Link>
            </div>
          </div>
          <div>
            <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" class="px-6 py-3">
                      Found Schedules
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {ScheduleList.map((item, index) => (
                    <Schedule
                      key={index}
                      title={item.title}
                      date={item.date}
                      creator={item.creator}
                      description={item.description}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminScheduleList;
