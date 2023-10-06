/** @format */

import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Post from "./index";
import { Provider } from "react-redux";
import { store } from "./../../redux/store";
import { BrowserRouter } from "react-router-dom";

test("Render trang post list", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Post />
      </Provider>
    </BrowserRouter>
  );
  const titleElement = screen.getByText(/Chi tiết Bài viết/i);
  expect(titleElement).toBeInTheDocument();
});

test("Tên của bài viết nên đươc hiển thị đúng", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Post />
      </Provider>
    </BrowserRouter>
  );

  const mockData = [
    { name: "name1", review: "review123" },
    { name: "name2", review: "review123" },
    { name: "name3", review: "review123" },
  ];

  waitFor(
    () => {
      mockData.forEach((item) => {
        const reviewElement = screen.getByText(item.review);
        const titleElement = screen.getByText(item.name);
        expect(titleElement).toBeInTheDocument();
        expect(reviewElement).toBeInTheDocument();
      });
    },
    { timeout: 1000 }
  );
});
