/** @format */

import Cart from ".";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./../../redux/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

const cart = [
  {
    id: "0",
    name: "Áo",
    quantity: 1,
    price: 10000,
    img: "https://mayaothundongphuc.com.vn/wp-content/uploads/2020/03/%C3%81o-thun-nam-c%E1%BB%95-tr%C3%B2n.jpg",
  },
];

test("Render Cart Route", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Cart />;
      </Provider>
    </BrowserRouter>
  );
  const cartElement = screen.getByText(/Mua Hàng/i);
  expect(cartElement).toBeInTheDocument();
});

test("Render list item", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Cart />;
      </Provider>
    </BrowserRouter>
  );

  const cartElement = screen.getAllByRole("img");
  expect(cartElement).toHaveLength(cart.length);
});

// test("clicking remove button should trigger handleRemoveFromCart", () => {
//   const mockData = [
//     {
//       id: "1",
//       name: "Product 1",
//       price: 100,
//       quantity: 2,
//       img: "image-1.jpg",
//     },
//   ];

//   render(
//     <BrowserRouter>
//       <Provider store={store}>
//         <Cart />;
//       </Provider>
//     </BrowserRouter>
//   );

//   mockData.forEach((item) => {
//     const removeButton = screen.getByRole("del-item");
//     fireEvent.click(removeButton);
//     expect(removeButton).toHaveBeenCalledWith(item.id);
//   });
// });
