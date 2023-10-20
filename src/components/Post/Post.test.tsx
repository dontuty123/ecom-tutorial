/** @format */

import { screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Post from "./index";
import { renderWithProviders } from "src/utils/test-utils";

test("Render trang post list", () => {
  renderWithProviders(<Post />);
  const titleElement = screen.getByRole("title");
  expect(titleElement.textContent).toBe("Chi tiết Bài viết");
});

test("Tên của bài viết nên đươc hiển thị đúng khi có data", () => {
  renderWithProviders(<Post />);

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

test("Tên của bài viết không hiển thị khi không có data", () => {
  renderWithProviders(<Post />);

  const mockData = [{ review: "", name: "" }];

  waitFor(
    () => {
      mockData.forEach((item) => {
        const reviewElement = screen.getByRole("item-review");
        const titleElement = screen.getByRole("item-name");
        expect(titleElement).toBe(item.name);
        expect(reviewElement).toBe(item.review);
      });
    },
    { timeout: 1000 }
  );
});

test("Tên của bài viết không hiển thị khi không có data", () => {
  renderWithProviders(<Post />);

  const mockData = [{}];

  waitFor(
    () => {
      mockData.forEach(() => {
        const reviewElement = screen.getByRole("item-review");
        const titleElement = screen.getByRole("item-name");
        expect(titleElement).not.toBeInTheDocument();
        expect(reviewElement).not.toBeInTheDocument();
      });
    },
    { timeout: 1000 }
  );
});
