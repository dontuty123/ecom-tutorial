/** @format */

import { useRoutes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { Suspense, lazy } from "react";

const ProductList = lazy(() => import("./pages/ProductList"));
const ProductDetail = lazy(() => import("./pages/ProductDetail"));
const Cart = lazy(() => import("./pages/Cart"));
const PostList = lazy(() => import("./pages/PostList"));
const Post = lazy(() => import("./components/Post"));

export default function useRouteElement() {
  const routeElements = useRoutes([
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          path: "",
          element: (
            <Suspense>
              <ProductList />
            </Suspense>
          ),
        },
        {
          path: "product/:id",
          element: (
            <Suspense>
              <ProductDetail />
            </Suspense>
          ),
        },
        {
          path: "/cart",
          element: (
            <Suspense>
              <Cart />
            </Suspense>
          ),
        },
        {
          path: "/post",
          element: (
            <Suspense>
              <PostList />
            </Suspense>
          ),
        },
        {
          path: "/post/category/:category",
          element: (
            <Suspense>
              <PostList />
            </Suspense>
          ),
        },
        {
          path: "/post/:id",
          element: (
            <Suspense>
              <Post />,
            </Suspense>
          ),
        },
        {
          path: "/post/:product/:id",
          element: (
            <Suspense>
              <Post />,
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return routeElements;
}
