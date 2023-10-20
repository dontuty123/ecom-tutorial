import { renderWithProviders } from "src/utils/test-utils";
import ProductList from ".";
import { screen } from "@testing-library/react";

const mockProductList = [
  {
    id: "1",
    img: "https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/455359/item/goods_75_455359.jpg?width=750",

    category: "ao",
    name: "Áo Thun Nam ngắn tay An Phước - ATH000695 - An Phước - Pierre Cardin | Phong cách thời trang",
    desc: "[HCM]ÁO THUN NAM CỔ BẺ TAY NGẮN 5 MÀU ĐƠN GIÃN SANG TRỌNG DỄ MẶC VỚI NHIỀU TRANG PHỤC 01",
    sold: 2,

    price: 200000,
    inStock: 15,
  },
  {
    id: "2",
    img: "https://vn-live-01.slatic.net/p/66d0bff0c7875b58eb83bd16f768072e.jpg",

    category: "ao",
    name: "[HCM]ÁO THUN NAM CỔ BẺ TAY NGẮN 5 MÀU ĐƠN GIÃN SANG TRỌNG DỄ MẶC VỚI NHIỀU TRANG PHỤC 01",
    desc: "ÁO THUN NAM CỔ BẺ TAY NGẮN 5 MÀU ĐƠN GIÃN SANG TRỌNG DỄ MẶC VỚI NHIỀU TRANG PHỤC THOÁNG MÁT CỰC ĐỈNH",
    sold: 1.2,

    price: 1900040,
    inStock: 15,
  },
];

test("Render ProductList", () => {
  renderWithProviders(<ProductList />);

  const render = screen.getByRole("render");
  expect(render).toBeInTheDocument;
});

test("Render với list sản phẩm", () => {
  renderWithProviders(<ProductList />, {
    preloadedState: {
      productReducer: {
        products: mockProductList,
      },
    },
  });

  const renderName = screen.getAllByRole("name");
  expect(renderName).toHaveLength(mockProductList.length);
});

test("Render với 1 sản phẩm", () => {
  renderWithProviders(<ProductList />, {
    preloadedState: {
      productReducer: {
        products: [mockProductList[0]],
      },
    },
  });

  const renderName = screen.getByRole("name");
  expect(renderName.textContent).toBe(mockProductList[0].name);
});
