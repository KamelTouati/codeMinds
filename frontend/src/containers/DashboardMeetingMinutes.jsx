import React from "react";
import { Link } from "react-router-dom";
import logo from "/images/logo.png";
import { NavbarAuth, Sidebar } from "../components";
import { FaRegArrowAltCircleRight } from "react-icons/fa";

const DashboardMeetingMinutes = () => {
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
                      Nº
                    </th>
                    <th scope="col" class="px-6 py-3">
                      Ref
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      1
                    </th>
                    <td class="px-6 py-4 flex items-center gap-2">
                      <img src="/images/image.png" alt="" />
                      <div className="flex flex-col">
                        <span className="text-black font-semibold">
                          Mathilda Bell
                        </span>
                        <span>Created At 13 December 2023</span>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-red-500">
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
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      2
                    </th>
                    <td class="px-6 py-4 flex items-center gap-2">
                      <img src="/images/image.png" alt="" />
                      <div className="flex flex-col">
                        <span className="text-black font-semibold">
                          Mathilda Bell
                        </span>
                        <span>Created At 13 December 2023</span>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-red-500">
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
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      3
                    </th>
                    <td class="px-6 py-4 flex items-center gap-2">
                      <img src="/images/image.png" alt="" />
                      <div className="flex flex-col">
                        <span className="text-black font-semibold">
                          Mathilda Bell
                        </span>
                        <span>Created At 13 December 2023</span>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-red-500">
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
                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                    <th
                      scope="row"
                      class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      4
                    </th>
                    <td class="px-6 py-4 flex items-center gap-2">
                      <img src="/images/image.png" alt="" />
                      <div className="flex flex-col">
                        <span className="text-black font-semibold">
                          Mathilda Bell
                        </span>
                        <span>Created At 13 December 2023</span>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-red-500">
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

export default DashboardMeetingMinutes;
