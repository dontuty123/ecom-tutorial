import { fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderWithProviders } from "src/utils/test-utils";
import Header from ".";
import { CartType } from "src/types/cart.type";

const mockCart: CartType[] = [
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
  {
    id: "2",
    quantity: 2,
    checked: true,
    product: {
      id: "2",
      img: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455359/item/goods_75_455359.jpg?width=750",

      category: "ao",
      name: "Áo Thun Nam ngắn tay An Phước - ATH000695 - An Phước - Pierre Cardin | Phong cách thời trang",
      desc: "[HCM]ÁO THUN NAM CỔ BẺ TAY NGẮN 5 MÀU ĐƠN GIÃN SANG TRỌNG DỄ MẶC VỚI NHIỀU TRANG PHỤC 01",
      sold: 2,
      price: 200000,
      inStock: 15,
    },
  },
];

test("Render Header", () => {
  renderWithProviders(<Header />);
  const headerElement = screen.getByText(/Blog review sản phẩm/i);
  expect(headerElement).toBeInTheDocument();
});

test("giá trị input thay đổi khi nhập liệu", () => {
  renderWithProviders(<Header />);
  const testValue = "hello";

  const headerSearchInput = screen.getByRole("searchInput");
  fireEvent.change(headerSearchInput, { target: { value: testValue } });
  expect(headerSearchInput).toHaveValue(testValue);
});

test("Số lượng sản phẩm trong cart nên được hiển thị đúng", () => {
  renderWithProviders(<Header />, {
    preloadedState: {
      cartReducer: { cart: mockCart },
    },
  });

  const headerCartlength = screen.getByRole("numberInCart");
  expect(headerCartlength.textContent).toEqual(mockCart.length.toString());
});
