import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import ErrorHandler from "../components/errors/ErrorHander";
import PageNotFound from "../components/errors/PageNotFound";
import AppLayout from "../pages/AppLayout";
import LandingPage from "../pages/Landing";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import DashboardPage from "../pages/dashboard/Dashboard";
import CookieService from "../services/CookieService";
import { TOKEN_KEY } from "../data";

const token = CookieService.get(TOKEN_KEY);
const isLoggedIn = token ? true : false;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute isAllowed={!isLoggedIn} redirectTo="/dashboard">
        <AppLayout />
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
    path: "/dashboard",
    element: (
      <ProtectedRoute isAllowed={isLoggedIn} redirectTo="/login">
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      //   {
      //     path: "add-techer",
      //     element: <AddTeacherPage />,
      //   },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
