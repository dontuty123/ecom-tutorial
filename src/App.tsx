/** @format */

import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { ToastContainer } from "react-toastify";

const ProductList = lazy(() => import("./pages/ProductList"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Cart = lazy(() => import("./pages/Cart"));
const PostList = lazy(() => import("./pages/PostList"));
const Post = lazy(() => import("./components/Post"));

function App() {
  return (
    <div>
      <Routes>
        {/* ProductList */}
        <Route
          path="/"
          element={
            <MainLayout>
              <Suspense>
                <ProductList />
              </Suspense>
            </MainLayout>
          }
        />

        {/* ProductDetail */}
        <Route
          path="/product/:id"
          element={
            <MainLayout>
              <Suspense>
                <ProductDetail />
              </Suspense>
            </MainLayout>
          }
        />

        {/* Cart */}
        <Route
          path="/cart"
          element={
            <MainLayout>
              <Suspense>
                <Cart />
              </Suspense>
            </MainLayout>
          }
        />

        {/* Post */}
        <Route
          path="/post"
          element={
            <MainLayout>
              <Suspense>
                <PostList />
              </Suspense>
            </MainLayout>
          }
        />
        <Route
          path="/post/category/:category"
          element={
            <MainLayout>
              <Suspense>
                <PostList />
              </Suspense>
            </MainLayout>
          }
        />
        <Route
          path="/post/:id"
          element={
            <MainLayout>
              <Suspense>
                <Post />
              </Suspense>
            </MainLayout>
          }
        />
        <Route
          path="/post/:product/:id"
          element={
            <MainLayout>
              <Suspense>
                <Post />
              </Suspense>
            </MainLayout>
          }
        />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
