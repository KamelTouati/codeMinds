import { Outlet } from "react-router-dom";

/* eslint-disable no-empty-pattern */
interface IProps {}
const RootLayout = ({}: IProps) => {
  return (
    <div className="flex gap-x-3">
      <aside>side bar</aside>
      <Outlet />
    </div>
  );
};
export default RootLayout;
