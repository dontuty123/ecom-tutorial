/** @format */

import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "src/redux/store";
import Footer from ".";
import "@testing-library/jest-dom";

test("Render Cart Route", () => {
  render(
    <BrowserRouter>
      <Provider store={store}>
        <Footer />
      </Provider>
    </BrowserRouter>
  );
  const cartElement = screen.getByText(/Tất cả các quyền được bảo lưu/i);
  expect(cartElement).toBeInTheDocument();
});
