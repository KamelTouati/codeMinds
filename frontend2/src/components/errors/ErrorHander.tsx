import { Link, useLocation } from "react-router-dom";
import Button from "../ui/Button";
import { Ban } from "lucide-react";

interface IProps {
  statusCode?: number;
  title?: string;
}

const ErrorHandler = ({ statusCode = 500, title = "Server Error" }: IProps) => {
  const location = useLocation();

  const { pathname } = location;

  return (
    <div className="fixed inset-0 flex  items-center justify-center">
      <div className="flex flex-col items-center space-y-4 md:space-y-6">
        <div className="bg-red-300 rounded-full p-3">
          <Ban className="text-red-400 w-32 h-32 md:w-40 md:h-40" />
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          {statusCode} - {title}
        </h2>
        <p className="text-md md:text-xl font-normal text-white text-center max-w-2xl">
          Oops something went wrong.. Try to refresh this page or feel free to
          contact us if the problem persists.
        </p>

        <div className="flex gap-x-2">
          <Button width="w-fit">
            {/* reloadDocument permit to renavigate to page and also reload the document */}
            <Link to={"/"} reloadDocument>
              Home
            </Link>
          </Button>
          <Button width="w-fit">
            {/* reloadDocument permit to renavigate to page and also reload the document */}
            <Link to={pathname} reloadDocument>
              Refresh
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ErrorHandler;
