import { Link } from "react-router-dom";
import Button from "../ui/Button";

const PageNotFound = () => {
  return (
    <div className="fixed inset-0 flex  items-center justify-center">
      <div className="flex flex-col items-center space-y-4 md:space-y-4">
        <h1 className="text-[12rem] leading-none font-bold text-primary ">
          404
        </h1>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">
            <span className="text-red-600">Oops!</span> Page not found
          </h2>
          <p className="text-md md:text-xl font-normal text-white text-center max-w-2xl">
            The Page you're looking for doesn't exist.
          </p>
        </div>

        <Button width="w-fit">
          <Link to={"/"}>Go Home</Link>
        </Button>
      </div>
    </div>
  );
};
export default PageNotFound;
