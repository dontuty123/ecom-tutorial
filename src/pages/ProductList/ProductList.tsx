/** @format */

import { useSelector } from "react-redux";

import Product from "../../components/Product";
import { RootState } from "../../redux/store";

export default function ProductList() {
  const productList = useSelector(
    (state: RootState) => state.productReducer.products
  );

  return (
    <div className="container">
      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-[5px]">
        {productList.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}
