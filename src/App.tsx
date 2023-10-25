/** @format */
import { ToastContainer } from "react-toastify";
import useRouteElement from "./useRouteElement";

function App() {
  const routeElement = useRouteElement();

  return (
    <div>
      {routeElement}
      <ToastContainer autoClose={1000} limit={1} />
    </div>
  );
}

export default App;
