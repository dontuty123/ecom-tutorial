/** @format */

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "src/components/Product";
import { getproductList } from "src/redux/productList.slice";
import { AppDispatch, RootState } from "src/redux/store";

export default function ProductList() {
  const productList = useSelector(
    (state: RootState) => state.productReducer.products
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const promise = dispatch(getproductList());
    return () => {
      promise.abort();
    };
  }, [dispatch]);

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
