/** @format */
import { ToastContainer } from "react-toastify";
import useRouteElement from "./useRouteElement";

function App() {
  const routeElement = useRouteElement();

  return (
    <div>
      {routeElement}
      <ToastContainer autoClose={1000} />
    </div>
  );
}

export default App;
