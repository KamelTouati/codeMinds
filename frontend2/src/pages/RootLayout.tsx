import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
/* eslint-disable no-empty-pattern */
interface IProps {}
const RootLayout = ({}: IProps) => {
  return (
    <div className="flex gap-x-3 h-full">
      <Sidebar />
      {/* <aside>side bar</aside> */}
      <Outlet />
    </div>
  );
};
export default RootLayout;
