import { ILoginInput, ISideBarItem } from "../utils/types";

export const LOGIN_FORM: ILoginInput[] = [
  {
    name: "email",
    placeholder: "Email address",
    type: "text",
  },
  {
    name: "password",
    placeholder: "Password",
    type: "password",
  },
];

export const TOKEN_KEY = "token";
export const USER_ROLE_KEY = "userRole";

export const STUDENT_SIDE_ELEMENTS: ISideBarItem[] = [
  {
    title: "Modules",
    image: "/images/bank.svg",
    link: "/student/modules",
  },
  {
    title: "Anouncements",
    image: "/images/bank.svg",
    link: "/student/announcements",
  },
  {
    title: "Schedule",
    image: "/images/chart-square.svg",
    link: "/student/schedule",
  },
  {
    title: "Settings and profile",
    image: "/images/bank.svg",
    link: "/student/profile",
  },
];

export const ADMIN_SIDE_ELEMENTS: ISideBarItem[] = [
  {
    title: "Dashboard",
    image: "/images/bank.svg",
    link: "/admin",
  },
  {
    title: "Meeting Minutes",
    image: "/images/bank.svg",
    link: "/admin/cps",
  },
  {
    title: "Students",
    image: "/images/bank.svg",
    link: "/admin/students",
  },
  {
    title: "Teachers",
    image: "/images/bank.svg",
    link: "/admin/teachers",
  },
  {
    title: "Anouncements",
    image: "/images/bank.svg",
    link: "/admin/announcements",
  },
  {
    title: "Settings and profile",
    image: "/images/bank.svg",
    link: "/admin/profile",
  },
  {
    title: "Schedule",
    image: "/images/chart-square.svg",
    link: "/admin/schedule",
  },
];
export const TEACHER_SIDE_ELEMENTS: ISideBarItem[] = [
  {
    title: "Meeting Minutes",
    image: "/images/bank.svg",
    link: "/teacher",
  },
  {
    title: "Modules",
    image: "/images/bank.svg",
    link: "/teacher/modules",
  },
  {
    title: "Chat",
    image: "/images/bank.svg",
    link: "/teacher/chat",
  },
  {
    title: "Anouncements",
    image: "/images/bank.svg",
    link: "/teacher/announcements",
  },
  {
    title: "Schedule",
    image: "/images/chart-square.svg",
    link: "/teacher/schedule",
  },
  {
    title: "Settings and profile",
    image: "/images/bank.svg",
    link: "/teacher/profile",
  },
  {
    title: "Report a problem",
    image: "/images/bank.svg",
    link: "/teacher/problem",
  },
];

export const STUFF_SIDE_ELEMENTS: ISideBarItem[] = [
  {
    title: "Anouncements",
    image: "/images/bank.svg",
    link: "/maintenance",
  },
  {
    title: "Settings and profile",
    image: "/images/bank.svg",
    link: "/maintenance/profile",
  },
  {
    title: "Report a problem",
    image: "/images/bank.svg",
    link: "/maintenance/problems",
  },
];
