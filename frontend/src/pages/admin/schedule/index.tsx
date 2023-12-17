// import React from "react";
import { Link } from "react-router-dom";
// import logo from "/images/logo.png";
// import { NavbarAuth, Sidebar } from "../../../components";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
// import { Schedule } from "./Schedule";
import Select from "react-select";
import { IScheduleItem } from "../../../utils/types";

const Schedule = ({ title, date, creator, description }: IScheduleItem) => {
  return (
    <Link to="/admin/schedule/static">
      <tr className="bg-white border-b  hover:bg-gray-50 ">
        <td className="px-6 py-4 flex items-center gap-2">
          <div className="flex flex-col">
            <span className="text-black font-semibold">{title}</span>
            <span>{date}</span>
            <span>created by Secretaire {creator}</span>
          </div>
        </td>
        <td className="px-6 py-4">
          <div className="flex gap-2 items">
            <span>{description}</span>
          </div>
        </td>
      </tr>
    </Link>
  );
};

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

  const singleOptions = [
    { value: "Tari", label: "Tari" },
    { value: "Elmir", label: "Elmir" },
  ];

  const singleStyles = {
    control: (styles) => ({
      ...styles,
      paddingTop: "4px",
      paddingBottom: "4px",
      // borderColor:"#00000000",
      // borderRight:"solid 1px #00000055",
      // borderRadius:"0px",
      // paddingRight:"10px",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "#0146B1dd",
      fontWeight: 600,
      fontSize: "20px",
      paddingLeft: "6px",
    }),
  };

  const customTheme = (theme) => {
    return {
      ...theme,
      colors: {
        ...theme.colors,
        primary25: "#E4EEFC",
        primary: "#0146B1",
      },
    };
  };

  const multiStyles = {
    control: (styles) => ({
      ...styles,
      paddingTop: "4px",
      paddingBottom: "4px",
    }),
    multiValue: (styles) => {
      return {
        ...styles,
        backgroundColor: "#E4EEFC",
        borderRadius: "20px",
        paddingLeft: "16px",
        // paddingTop: "4px",
        paddingRight: "6px",
        // paddingBottom: "4px",
        padding: "2px",
        color: "#0146B1",
        fontWeight: 600,
        flex: "0 0 auto",
      };
    },
    multiValueLabel: (styles) => {
      return {
        ...styles,
        color: "#0146B1",
      };
    },
    valueContainer: (styles) => ({
      ...styles,
      overflowX: "scroll",
      paddingLeft: "12px",
      flexWrap: "unset",
      "::-webkit-scrollbar": {
        display: "none",
      },
    }),
    multiValueRemove: (styles) => {
      return {
        ...styles,
        color: "#0146B1",
        cursor: "pointer",
        ":hover": {
          color: "#0146B199",
        },
      };
    },
  };

  // page of the schedules search

  const schedules = [
    {
      id: "bokaskodkaspd",
      title: "2cs First Semester",
      date: "12 december 2023",
      creator: "Secretaire Nokdsa",
      modules: [
        "Data Science",
        "AI",
        "Software Engineering",
        "Database Engineering",
      ],
      year: "2cs",
      group: "G1",
    },
    {
      id: "bokaskodkaspd",
      title: "2cs second Semester",
      date: "12 december 2023",
      creator: "Secretaire Nokdsa",
      modules: [
        "Data Science",
        "AI",
        "Software Engineering",
        "Database Engineering",
      ],
      year: "2cs",
      group: "G1",
    },
    {
      id: "bokaskodkaspd",
      title: "1cs First Semester",
      date: "12 december 2023",
      creator: "Secretaire Nokdsa",
      modules: [
        "Data Science",
        "AI",
        "Software Engineering",
        "Database Engineering",
      ],
      year: "1cs",
      group: "G1",
    },
  ];

  return (
    <>
      <div className="p-4 px-12 m-4 mt-12 border-[1px] shadow-sm mih-h-[80%]">
        <div className="flex flex-col gap-4 ">
          <div className="my-4 flex justify-between items-center border-b-[1px] pb-12">
            <h1 className="text-3xl font-bold">Meeting Minutes</h1>
            {/* <h1 className="text-md text-gray-600">Last two weeks</h1> */}
            <div className="flex my-5">
              <Link
                to="/login"
                type="button"
                className="bg-[#5A3FE0] rounded-xl flex flex-row items-center gap-4 text-xl text-white font-semibold px-4 py-2 w-fit"
              >
                Add new Meeting Minutes
                <FaRegArrowAltCircleRight />
              </Link>
            </div>
          </div>

          <div className="flex flex-row justify-between w-full mb-12 pb-12 border-b-[1px]">
            {/* Teacher Select */}
            <div className=" mx-8 flex flex-row gap-3 items-center text-lg ">
              <span className="font-semibold">Teachers: </span>
              <div className="w-[70%]">
                <Select
                  onChange={(e) => null}
                  options={singleOptions}
                  theme={customTheme}
                  styles={singleStyles}
                  // isSearchable
                  autoFocus
                  placeholder="All"
                  className="w-full"
                  defaultValue={"TALENT"}
                />
              </div>
            </div>

            {/* Year Select */}
            <div className="w-[35%] mx-8 flex flex-row items-center gap-3 text-lg">
              <span className="font-semibold">Study Year:</span>
              <div className="w-[55%] mx-8">
                <Select
                  placeholder="Any"
                  onChange={() => null}
                  noOptionsMessage={() => "No matches found ."}
                  theme={customTheme}
                  isSearchable
                  isMulti
                  className="w-full hide-scrollbar"
                  options={singleOptions}
                  styles={multiStyles}
                />
              </div>
            </div>
            {/* Sort By */}
            <div className="w-[30%] mx-8 flex flex-row gap-3 items-center text-lg ">
              <span className="font-semibold">Sort By: </span>
              <div className="w-[70%]">
                <Select
                  onChange={(e) => null}
                  options={singleOptions}
                  theme={customTheme}
                  styles={singleStyles}
                  // isSearchable
                  // autoFocus
                  className="w-full"
                  defaultValue={{ value: "NEWEST", label: "Newest" }}
                />
              </div>
            </div>
          </div>

          <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
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
