/** @format */

import "./assets/App.css";
import { Route, Routes, useRoutes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

function App() {
  return (
    <div>
      <Routes>
        {/* ProductList */}
        <Route
          path="/"
          element={
            <MainLayout>
              <ProductList />
            </MainLayout>
          }
        />

        {/* ProductDetail */}
        <Route
          path="/product/:id"
          element={
            <MainLayout>
              <ProductDetail />
            </MainLayout>
          }
        />

        {/* Cart */}
        <Route
          path="/cart"
          element={
            <MainLayout>
              <Cart />
            </MainLayout>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
