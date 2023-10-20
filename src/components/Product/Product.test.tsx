/** @format */

import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Product from "./index";
import { renderWithProviders } from "src/utils/test-utils";

const mockData = {
  id: "1",
  img: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455359/item/goods_75_455359.jpg?width=750",

  category: "ao",
  name: "Áo Thun Nam ngắn tay An Phước - ATH000695 - An Phước - Pierre Cardin | Phong cách thời trang",
  desc: "[HCM]ÁO THUN NAM CỔ BẺ TAY NGẮN 5 MÀU ĐƠN GIÃN SANG TRỌNG DỄ MẶC VỚI NHIỀU TRANG PHỤC 01",
  sold: 2,

  price: 200000,
  inStock: 15,
};

const mockDataInit = {
  id: "",
  img: "",

  category: "",
  name: "",
  desc: "",
  sold: 0,

  price: 0,
  inStock: 0,
};

test("Render trang Product", () => {
  renderWithProviders(<Product product={mockData} />);
  const titleElement = screen.getByText(/₫/i);
  expect(titleElement).toBeInTheDocument();
});

test("Tên của sản phẩm nên đươc hiển thị đúng khi truyền data", () => {
  renderWithProviders(<Product product={mockData} />);

  const titleElement = screen.getByText(`${mockData.name}`);
  expect(titleElement).toBeInTheDocument();
});

test("Product undefined", () => {
  renderWithProviders(<Product product={mockDataInit} />);

  const titleElement = screen.getByRole("name");
  expect(titleElement.ariaValueText).toBeUndefined();
});
