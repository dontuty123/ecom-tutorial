/** @format */

import { render, screen } from "@testing-library/react";
import Cart from ".";
import { Provider } from "react-redux";
import { store } from "./../../redux/store";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { cart } from "src/mockdata/cart";

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
