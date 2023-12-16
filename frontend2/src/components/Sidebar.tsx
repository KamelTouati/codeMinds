import { NavLink } from "react-router-dom";
import logo from "/images/logo.png";

import CookieService from "../services/CookieService";
import {
  ADMIN_SIDE_ELEMENTS,
  STUDENT_SIDE_ELEMENTS,
  STUFF_SIDE_ELEMENTS,
  TEACHER_SIDE_ELEMENTS,
  USER_ROLE_KEY,
} from "../data";
import { isAdmin, isStudent, isTeacher } from "../utils/utils";

function Sidebar() {
  const userRole = CookieService.get(USER_ROLE_KEY);

  // Start renders ----------------------------------------------------------------------
  let sideItems;
  if (isAdmin(userRole)) {
    sideItems = ADMIN_SIDE_ELEMENTS;
  } else if (isTeacher(userRole)) {
    sideItems = TEACHER_SIDE_ELEMENTS;
  } else if (isStudent(userRole)) {
    sideItems = STUDENT_SIDE_ELEMENTS;
  } else {
    sideItems = STUFF_SIDE_ELEMENTS;
  }

  const renderSideBar = sideItems.map((elm) => {
    return (
      <NavLink
        key={elm.title}
        to={elm.link}
        className="flex flex-row gap-2 w-full rounded-xl px-4 font-semibold py-2 bg-[#D9D9D9]/20"
        end
      >
        <img src={elm.image} alt={elm.title} />
        {elm.title}
      </NavLink>
    );
  });

  return (
    <div className="bg-[#F2F6FF] h-screen flex flex-col gap-6 p-6">
      <NavLink to="/" className="flex flex-col items-center">
        <img src={logo} className="h-8 mr-3" alt="Logo" />
        <span className="self-center text-2xl font-semibold whitespace-nowrap ">
          CodeMinds
        </span>
      </NavLink>

      <div className="flex flex-col gap-4">{renderSideBar}</div>
      <NavLink
        to="/admin/schedule"
        className="flex flex-row gap-2 rounded-xl w-full px-4 font-semibold my-20 py-2 bg-[#D9D9D9]/20"
      >
        <img src="/images/bank.svg" alt="" />
        Features
        <span className="inline-flex items-center justify-center h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
          New
        </span>
      </NavLink>
    </div>
  );
}

export default Sidebar;
