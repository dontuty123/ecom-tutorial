/** @format */

import { useSelector } from "react-redux";
import Product from "src/components/Product";
import { RootState } from "src/redux/store";

export default function ProductList() {
  const productList = useSelector(
    (state: RootState) => state.productReducer.products
  );

  return (
    <div className="bg-gray-100">
      <div className="container py-5">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-[5px]">
          {productList.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
