// import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Toaster } from "react-hot-toast";
import ReduxProvider from "./redux/provider";

function App() {
  return (
    <div className="h-full w-full">
      <ReduxProvider>
        <RouterProvider router={router}  />
        <Toaster position="bottom-center" reverseOrder={false} />
      </ReduxProvider>
    </div>
  );
}

export default App;
