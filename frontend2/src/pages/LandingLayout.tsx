import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

/* eslint-disable no-empty-pattern */
interface IProps {}
const LandingLayout = ({}: IProps) => {
  return (  
    <div className="w-full h-full">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
export default LandingLayout;
