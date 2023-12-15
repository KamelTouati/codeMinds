import { Outlet } from "react-router-dom";

/* eslint-disable no-empty-pattern */
interface IProps {}

const LoginPage = ({}: IProps) => {
  return (
    <div>
      Layout
      <Outlet />
    </div>
  );
};
export default LoginPage;
