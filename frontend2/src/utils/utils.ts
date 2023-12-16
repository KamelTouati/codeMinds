import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { UserRole } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isAdmin(userRole: string) {
  return userRole === UserRole.ADMIN;
}
export function isTeacher(userRole: string) {
  return userRole === UserRole.TEACHER;
}
export function isStuff(userRole: string) {
  return userRole === UserRole.STUFF;
}
export function isStudent(userRole: string) {
  return userRole === UserRole.STUDENT;
}

export function redirectWithRole(userRole: string) {
  if (isAdmin(userRole)) {
    return "/admin";
  } else if (isTeacher(userRole)) {
    return "/teacher";
  } else if (isStuff(userRole)) {
    return "/maintenance";
  } else if (isStudent(userRole)) {
    return "/student";
  }

  return "/login";
}
