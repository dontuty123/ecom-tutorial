/** @format */

import { screen } from "@testing-library/react";
import Footer from ".";
import "@testing-library/jest-dom";
import { renderWithProviders } from "src/utils/test-utils";

test("Render Cart Route", () => {
  renderWithProviders(<Footer />);
  const cartElement = screen.getByText(/Tất cả các quyền được bảo lưu/i);
  expect(cartElement).toBeInTheDocument();
});
