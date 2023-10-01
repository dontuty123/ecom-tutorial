/** @format */

import Product from "../../components/Product";

export default function ProductList() {
  return (
    <div className="container">
      <div className="grid grid-cols-6 gap-4 p-[5px]">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
}
