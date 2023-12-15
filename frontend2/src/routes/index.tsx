import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import ErrorHandler from "../components/errors/ErrorHander";
import PageNotFound from "../components/errors/PageNotFound";
import LandingPage from "../pages/Landing";
import DashboardPage from "../pages/admin/Dashboard";
import CookieService from "../services/CookieService";
import { TOKEN_KEY } from "../data";
import LandingLayout from "../pages/LandingLayout";
import RootLayout from "../pages/RootLayout";
import AnnouncementPage from "../pages/shared/Announcement";
import MeetingsPage from "../pages/shared/Meetings";
import StudentsPage from "../pages/admin/Students";
import TeachersPage from "../pages/admin/Teachers";
import SchedulePage from "../pages/student/Schecule";
import StudentModulesPage from "../pages/student/Modules";
import TeacherModulesPage from "../pages/teacher/Modules";
import ChatPage from "../pages/teacher/Chat";
import SettingsAndProfilePage from "../pages/shared/SettingsAndProfile";
import ReportProblemPage from "../pages/teacher/ReportProblem";

const token = CookieService.get(TOKEN_KEY);
const isLoggedIn = token ? true : false;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute isAllowed={!isLoggedIn} redirectTo="/dashboard">
        <LandingLayout />
      </ProtectedRoute>
    ),
    errorElement: <ErrorHandler />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute isAllowed={isLoggedIn} redirectTo="/login">
        <RootLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      {
        path: "anouncements",
        element: <AnnouncementPage />,
      },
      {
        path: "meetings",
        element: <MeetingsPage />,
      },
      {
        path: "students",
        element: <StudentsPage />,
      },
      {
        path: "teachers",
        element: <TeachersPage />,
      },
      {
        path: "schedule",
        element: <SchedulePage />,
      },
      {
        path: "schedule/teacher/:id",
        element: <SchedulePage />,
      },
      {
        path: "schedule/group/:id",
        element: <SchedulePage />,
      },
      {
        path: "schedule/create",
        element: <SchedulePage />,
      },
    ],
  },
  {
    path: "/student",
    element: (
      <ProtectedRoute isAllowed={isLoggedIn} redirectTo="/login">
        <RootLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "modules",
        element: <StudentModulesPage />,
      },
      {
        path: "modules/:id",
        element: <StudentModulesPage />,
      },
      {
        path: "schedule",
        element: <StudentModulesPage />,
      },
    ],
  },
  {
    path: "/teacher",
    element: (
      <ProtectedRoute isAllowed={isLoggedIn} redirectTo="/login">
        <RootLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <MeetingsPage />,
      },
      {
        path: "modules",
        element: <TeacherModulesPage />,
      },
      {
        path: "chat",
        element: <ChatPage />,
      },
      {
        path: "announcements",
        element: <AnnouncementPage />,
      },
      {
        path: "schedule",
        element: <SchedulePage />,
      },
      {
        path: "settings-profile",
        element: <SettingsAndProfilePage />,
      },
      {
        path: "settings-profile",
        element: <ReportProblemPage />,
      },
    ],
  },
  {
    path: "/stuff",
    element: (
      <ProtectedRoute isAllowed={isLoggedIn} redirectTo="/login">
        <RootLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <AnnouncementPage />,
      },
      {
        path: "settings-profile",
        element: <SettingsAndProfilePage />,
      },
      {
        path: "announcements",
        element: <AnnouncementPage />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
