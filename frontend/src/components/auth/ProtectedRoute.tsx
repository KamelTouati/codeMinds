import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface IProps {
  isAllowed: boolean;
  redirectTo: string;
  children: ReactNode;
  data?: unknown;
}

const ProtectedRoute = ({ isAllowed, redirectTo, children, data }: IProps) => {
  //todo : replace & state
  // replace it does replace the last entry of the history-stack  with redirected path
  if (!isAllowed) return <Navigate to={redirectTo} replace state={data} />;

  return children;
};
export default ProtectedRoute;
