/** @format */

import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./../../redux/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import PostList from ".";

test("Render List Route", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <PostList />;
      </Provider>
    </BrowserRouter>
  );
  const cartElement = screen.getByText(/Danh sách Bài viết/i);
  expect(cartElement).toBeInTheDocument();
});
