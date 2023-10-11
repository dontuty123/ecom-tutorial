/** @format */

import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import ProductDetail from ".";

const product = {
  id: "1",
  img: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455359/item/goods_75_455359.jpg?width=750",
  category: "ao",
  name: "Áo Thun Nam ngắn tay An Phước - ATH000695 - An Phước - Pierre Cardin | Phong cách thời trang",
  desc: "[HCM]ÁO THUN NAM CỔ BẺ TAY NGẮN 5 MÀU ĐƠN GIÃN SANG TRỌNG DỄ MẶC VỚI NHIỀU TRANG PHỤC 01",
  sold: 2,
  price: 200000,
  inStock: 15,
};

test("Render product detail Route", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <ProductDetail />;
      </Provider>
    </BrowserRouter>
  );

  waitFor(() => {
    const productElement = screen.getByText(/Thêm vào giỏ hàng/i);
    expect(productElement).toBeInTheDocument();
  });
});

test("Render list post", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <ProductDetail />;
      </Provider>
    </BrowserRouter>
  );

  waitFor(() => {
    const productElement = screen.getByText(product.id);
    expect(productElement).toBe(product.id);
  });
});

test("Nhập số lượng vào ô input", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <ProductDetail />;
      </Provider>
    </BrowserRouter>
  );

  waitFor(() => {
    const getInputNumber = screen.getByPlaceholderText(1);
    const testValue = 100;

    fireEvent.change(getInputNumber, { target: { value: testValue } });
    expect(getInputNumber).toBe(testValue);
  });
});

test("Ô input chỉ nhận giá trị số", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <ProductDetail />;
      </Provider>
    </BrowserRouter>
  );

  waitFor(() => {
    const getInputNumber = screen.getByRole("input_number");
    const testValue = "123123123";

    fireEvent.change(getInputNumber, { target: { value: testValue } });
    expect(getInputNumber).toBe(testValue);
  });
});

test("test function handleAddToCart", () => {
  const handleAddToCartSpy = jest.fn();
  render(
    <BrowserRouter>
      <Provider store={store}>
        <ProductDetail />
      </Provider>
    </BrowserRouter>
  );

  const addToCart = screen.getByRole("addToCart");
  fireEvent.click(addToCart);
  expect(handleAddToCartSpy).toBeDefined();
});

test("test function handleReviewContentChange", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <ProductDetail />
      </Provider>
    </BrowserRouter>
  );

  const testValue = "test value";

  const handleReviewContentChange = screen.getByPlaceholderText(
    "Nội dung bài đánh giá"
  );
  fireEvent.change(handleReviewContentChange, { target: { value: testValue } });
  expect(handleReviewContentChange.textContent).toBe(testValue);
});

test("test function handleReviewTitleChange", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <ProductDetail />
      </Provider>
    </BrowserRouter>
  );

  const testValue = "test value";

  const handleReviewTitleChange = screen.getByRole("danhgia");
  fireEvent.change(handleReviewTitleChange, { target: { value: testValue } });

  expect(handleReviewTitleChange).toHaveValue(testValue);
});

test("test function handleAddToCart", () => {
  const handleSubmitReviewSpy = jest.fn();
  render(
    <BrowserRouter>
      <Provider store={store}>
        <ProductDetail />
      </Provider>
    </BrowserRouter>
  );

  const submitReview = screen.getByRole("submitReview");
  fireEvent.click(submitReview);
  expect(handleSubmitReviewSpy).toBeDefined();
});
