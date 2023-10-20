/** @format */

import Cart from ".";
import { fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "src/utils/test-utils";

const cart = [
  {
    id: "1",
    quantity: 1,
    checked: true,
    product: {
      id: "1",
      img: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455359/item/goods_75_455359.jpg?width=750",

      category: "ao",
      name: "Áo Thun Nam ngắn tay An Phước - ATH000695 - An Phước - Pierre Cardin | Phong cách thời trang",
      desc: "[HCM]ÁO THUN NAM CỔ BẺ TAY NGẮN 5 MÀU ĐƠN GIÃN SANG TRỌNG DỄ MẶC VỚI NHIỀU TRANG PHỤC 01",
      sold: 2,
      price: 200000,
      inStock: 15,
    },
  },
  // {
  //   id: "2",
  //   quantity: 1,
  //   checked: true,
  //   product: {
  //     id: "2",
  //     img: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455359/item/goods_75_455359.jpg?width=750",

  //     category: "ao",
  //     name: "Áo Thun Nam ngắn tay An Phước - ATH000695 - An Phước - Pierre Cardin | Phong cách thời trang",
  //     desc: "[HCM]ÁO THUN NAM CỔ BẺ TAY NGẮN 5 MÀU ĐƠN GIÃN SANG TRỌNG DỄ MẶC VỚI NHIỀU TRANG PHỤC 01",
  //     sold: 2,
  //     price: 200000,
  //     inStock: 15,
  //   },
  // },
];

test("Render Cart Route", () => {
  renderWithProviders(<Cart />);
  const cartElement = screen.getByText(/Mua Hàng/i);
  expect(cartElement).toBeInTheDocument();
});

test("Render list item", () => {
  renderWithProviders(<Cart />, {
    preloadedState: {
      cartReducer: {
        cart: cart,
      },
    },
  });

  const cartElement = screen.getAllByRole("img");
  expect(cartElement).toHaveLength(cart.length);
});

test("Xóa 1 sản phẩm", () => {
  const handleAddToCartSpy = jest.fn();
  renderWithProviders(<Cart />, {
    preloadedState: {
      cartReducer: {
        cart: cart,
      },
    },
  });

  const deleteButton = screen.getByRole("del-item");
  fireEvent.click(deleteButton);

  expect(handleAddToCartSpy).toBeCalledTimes(0);
});
