/** @format */

import { createSlice } from "@reduxjs/toolkit";
import products from "src/mockdata/products";
import { ProductType } from "src/types/product.type";

interface ProductsType {
  products: ProductType[];
}

const initialState: ProductsType = {
  products: products,
};

const productSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
});

const productReducer = productSlice.reducer;
export default productReducer;
