import React from "react";
import { Link } from "react-router-dom";
import logo from "/images/logo.png";

import { useSelector, useDispatch } from "react-redux";
import { RiHome6Line } from "react-icons/ri";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoIosArrowForward } from "react-icons/io";
import { useLocation } from "react-router-dom";

function Sidebar(props) {
  //   const user = useSelector((state) => state.auth.user)
  const dispatch = useDispatch();
  const location = useLocation();
  let user = {
    firstName: "AHmed",
    lastName: "Samer ",
    email: "ahmed@samer.com",
    password: "ahmedsamer",
    profileImage: null,
    role: "ADMIN",
    groupId: null,
    modules: [],
  };
  return user ? (
    <>
      <aside
        id="default-sidebar"
        class="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 overflow-y-auto"
        aria-label="Sidebar"
      >
        <div className="bg-[#F2F6FF] flex flex-col gap-6 p-6">
          <Link to="/" className="flex flex-col items-center">
            <img src={logo} className="h-8 mr-3" alt="Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              CodeMinds
            </span>
          </Link>

          <div className="flex flex-col gap-4">
            {user.role === "ADMIN" ? (
              <Link
                href="/dashboard"
                className="flex flex-row items-center gap-2 rounded-xl font-semibold w-full text-md pl-4 pr-6 py-2 bg-[#D9D9D9]/20"
              >
                <img src="/images/home.svg" alt="" />
                <span>Dashboard</span>
                <IoIosArrowForward />
              </Link>
            ) : null}
            <Link
              href="/announcements"
              className="flex flex-row gap-2 w-full rounded-xl px-4 font-semibold py-2 bg-[#D9D9D9]/20"
            >
              <img src="/images/teacher.svg" alt="" />
              Meeting Minutes
            </Link>
            <Link
              href="/modules"
              className="flex flex-row gap-2 w-full rounded-xl px-4 font-semibold py-2 bg-[#D9D9D9]/20"
            >
              <img src="/images/teacher.svg" alt="" />
              Students
            </Link>

            <Link
              href="/profile"
              className="flex flex-row gap-2 w-full rounded-xl px-4 font-semibold py-2 bg-[#D9D9D9]/20"
            >
              <img src="/images/teacher.svg" alt="" />
              Teachers
            </Link>

            <Link
              href="/schedule"
              className="flex flex-row gap-2 rounded-xl w-full px-4 font-semibold py-2 bg-[#D9D9D9]/20"
            >
              <img src="/images/bank.svg" alt="" />
              Anouncements
            </Link>
            <Link
              href="/schedule"
              className="flex flex-row gap-2 rounded-xl w-full px-4 font-semibold py-2 bg-[#D9D9D9]/20"
            >
              <img src="/images/setting.svg" alt="" />
              Settings and profile
            </Link>
            <Link
              href="/schedule"
              className="flex flex-row gap-2 rounded-xl w-full px-4 font-semibold py-2 bg-[#D9D9D9]/20"
            >
              <img src="/images/chart-square.svg" alt="" />
              Schedule
            </Link>
            <Link
              href="/schedule"
              className="flex flex-row gap-2 rounded-xl w-full px-4 font-semibold py-2 bg-[#D9D9D9]/20"
            >
              <img src="/images/setting.svg" alt="" />
              Report a problem
            </Link>
          </div>
          <Link
            href="/schedule"
            className="flex flex-row gap-2 rounded-xl w-full px-4 font-semibold py-2 bg-[#D9D9D9]/20"
          >
            <img src="/images/bank.svg" alt="" />
            Features
            <span class="inline-flex items-center justify-center h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
              New
            </span>
          </Link>
        </div>
      </aside>
    </>
  ) : null;
}

export default Sidebar;
