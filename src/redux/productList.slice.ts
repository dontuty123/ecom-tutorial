/** @format */

import { createReducer } from "@reduxjs/toolkit";
import { ProductType } from "../types/product.type";
import products from "../mockdata/products";

interface ProductsType {
  products: ProductType[];
}

const initialState: ProductsType = {
  products: products,
};

const productReducer = createReducer(initialState, (builder) => {});

export default productReducer;
