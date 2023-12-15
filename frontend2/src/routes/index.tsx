import { createBrowserRouter } from "react-router-dom";
import LoginPage from "../pages/Login";
import ProtectedRoute from "../components/auth/ProtectedRoute";
import ErrorHandler from "../components/errors/ErrorHander";
import PageNotFound from "../components/errors/PageNotFound";
import AppLayout from "../pages/AppLayout";
import LandingPage from "../pages/Landing";
import DashboardLayout from "../pages/dashboard/DashboardLayout";
import DashboardPage from "../pages/dashboard/Dashboard";

const isLoggedIn = true;
const userData: { email: string } | null = isLoggedIn
  ? { email: "moncef@estin.dz" }
  : null;

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorHandler />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: "login",
        element: (
          <ProtectedRoute isAllowed={!isLoggedIn} redirectTo="/contribute">
            <LoginPage />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/dashbord",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      //   {
      //     path: "think-in-react",
      //     element: <ThinkInReact />,
      //   },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

export default router;
