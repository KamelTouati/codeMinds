import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
/* eslint-disable no-empty-pattern */
interface IProps {}
const RootLayout = ({}: IProps) => {
  return (
    <div className="flex gap-x-3 min-h-full">
      <div className="basis-[30%] bg-red-300">
        <Sidebar />
      </div>
      <div className="basis-full">
        <Outlet />
      </div>
    </div>
  );
};
export default RootLayout;
