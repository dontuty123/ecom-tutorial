/** @format */
import { ToastContainer } from "react-toastify";
import useRouteElement from "./useRouteElement";

function App() {
  const routeElement = useRouteElement();

  return (
    <div>
      {routeElement}
      <ToastContainer />
    </div>
  );
}

export default App;
