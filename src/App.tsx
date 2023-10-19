/** @format */
import { ToastContainer, toast } from "react-toastify";
import useRouteElement from "./useRouteElement";

function App() {
  const routeElement = useRouteElement();
  toast.clearWaitingQueue();

  return (
    <div>
      {routeElement}
      <ToastContainer autoClose={1000} limit={1} />
    </div>
  );
}

export default App;
