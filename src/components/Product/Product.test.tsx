/** @format */

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Product from "./index";
import { Provider } from "react-redux";
import { store } from "./../../redux/store";
import { BrowserRouter } from "react-router-dom";

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

test("Render trang Product", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Product product={mockData} />
      </Provider>
    </BrowserRouter>
  );
  const titleElement = screen.getByText(/₫/i);
  expect(titleElement).toBeInTheDocument();
});

test("Tên của sản phẩm nên đươc hiển thị đúng khi truyền data", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Product product={mockData} />
      </Provider>
    </BrowserRouter>
  );

  const titleElement = screen.getByText(`${mockData.name}`);
  expect(titleElement).toBeInTheDocument();
});
