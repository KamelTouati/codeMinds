import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Toaster } from "react-hot-toast";
import ReduxProvider from "./redux/provider";

function App() {
  return (
    <>
      <ReduxProvider>
        <RouterProvider router={router} />
        <Toaster position="bottom-center" reverseOrder={false} />
      </ReduxProvider>
    </>
  );
}

export default App;
