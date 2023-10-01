/** @format */

import "./assets/App.css";
import { Route, Routes, useRoutes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ProductList from "./pages/ProductList";

function App() {
  const routeElements = useRoutes([
    {
      path: "",
      element: (
        <MainLayout>
          <ProductList />
        </MainLayout>
      ),
    },
  ]);

  return <div>{routeElements}</div>;
}

export default App;
