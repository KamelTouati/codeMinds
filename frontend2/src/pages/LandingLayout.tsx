import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

/* eslint-disable no-empty-pattern */
interface IProps {}
const LandingLayout = ({}: IProps) => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};
export default LandingLayout;
