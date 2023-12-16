/* eslint-disable no-empty-pattern */
interface IProps {}

// import React from "react";
import { Link } from "react-router-dom";
// import logo from "/images/logo.png";
// import { NavbarAuth, Sidebar } from "../components";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const DashboardMeetingMinutes = () => {
  return (
    <>

      <div className="p-4 w-full">
        <div className="flex flex-col w-[80%] mx-auto">
          <div className="my-4 flex justify-between items-center">
            <h1 className="text-2xl font-semibold">Meeting Minutes</h1>
            {/* <h1 className="text-md text-gray-600">Last two weeks</h1> */}
            <div className="flex my-5">
              <button
                type="button"
                className="buttonStyle2 flex items-center gap-4 bg-[#5A3FE0] font-medium text-xl py-2 px-5 rounded-xl text-white p-2"
              >
                <span >Add new Meeting Minutes</span>
                <FaRegArrowAltCircleRight />
              </button>
            </div>
          </div>
          <div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Nº
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Ref
                    </th>
                  </tr>
                </thead>
                <tbody>

                  <tr className="bg-white border-b  hover:bg-[#734AE505] ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      1
                    </th>
                    <td className="px-6 py-4 flex items-center gap-2">
                      <img src="/images/image.png" alt="" />
                      <div className="flex flex-col">
                        <span className="text-black font-semibold">
                          Mathilda Bell
                        </span>
                        <span>Created At 13 December 2023</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-red-500">
                      <div className="flex gap-2 items">
                        <img
                          className="w-[20px]"
                          src="/images/pdf.svg"
                          alt=""
                        />
                        PV-S1.pdf
                      </div>
                    </td>
                  </tr>



                  <tr className="bg-white border-b  hover:bg-[#734AE505] ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      2
                    </th>
                    <td className="px-6 py-4 flex items-center gap-2">
                      <img src="/images/image.png" alt="" />
                      <div className="flex flex-col">
                        <span className="text-black font-semibold">
                          Mathilda Bell
                        </span>
                        <span>Created At 13 December 2023</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-red-500">
                      <div className="flex gap-2 items">
                        <img
                          className="w-[20px]"
                          src="/images/pdf.svg"
                          alt=""
                        />
                        PV-S1.pdf
                      </div>
                    </td>
                  </tr>


                  <tr className="bg-white border-b  hover:bg-[#734AE505] ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      3
                    </th>
                    <td className="px-6 py-4 flex items-center gap-2">
                      <img src="/images/image.png" alt="" />
                      <div className="flex flex-col">
                        <span className="text-black font-semibold">
                          Mathilda Bell
                        </span>
                        <span>Created At 13 December 2023</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-red-500">
                      <div className="flex gap-2 items">
                        <img
                          className="w-[20px]"
                          src="/images/pdf.svg"
                          alt=""
                        />
                        PV-S1.pdf
                      </div>
                    </td>
                  </tr>

                  <tr className="bg-white border-b  hover:bg-[#734AE505] ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      4
                    </th>
                    <td className="px-6 py-4 flex items-center gap-2">
                      <img src="/images/image.png" alt="" />
                      <div className="flex flex-col">
                        <span className="text-black font-semibold">
                          Mathilda Bell
                        </span>
                        <span>Created At 13 December 2023</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-red-500">
                      <div className="flex gap-2 items">
                        <img
                          className="w-[20px]"
                          src="/images/pdf.svg"
                          alt=""
                        />
                        PV-S1.pdf
                      </div>
                    </td>
                  </tr>


                  <tr className="bg-white border-b  hover:bg-[#734AE505] ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      5
                    </th>
                    <td className="px-6 py-4 flex items-center gap-2">
                      <img src="/images/image.png" alt="" />
                      <div className="flex flex-col">
                        <span className="text-black font-semibold">
                          Mathilda Bell
                        </span>
                        <span>Created At 13 December 2023</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-red-500">
                      <div className="flex gap-2 items">
                        <img
                          className="w-[20px]"
                          src="/images/pdf.svg"
                          alt=""
                        />
                        PV-S1.pdf
                      </div>
                    </td>
                  </tr>


                  <tr className="bg-white border-b  hover:bg-[#734AE505] ">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      6
                    </th>
                    <td className="px-6 py-4 flex items-center gap-2">
                      <img src="/images/image.png" alt="" />
                      <div className="flex flex-col">
                        <span className="text-black font-semibold">
                          Mathilda Bell
                        </span>
                        <span>Created At 13 December 2023</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-red-500">
                      <div className="flex gap-2 items">
                        <img
                          className="w-[20px]"
                          src="/images/pdf.svg"
                          alt=""
                        />
                        PV-S1.pdf
                      </div>
                    </td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


const MeetingsPage = ({}: IProps) => {
  return <DashboardMeetingMinutes/>;
};
export default MeetingsPage;
