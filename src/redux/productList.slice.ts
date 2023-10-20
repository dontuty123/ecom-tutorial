/** @format */

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import products from "src/mockdata/products";
import { ProductType } from "src/types/product.type";
import  unidecode from 'unidecode';


interface ProductsType {
  products: ProductType[];
}

const initialState: ProductsType = {
  products: products,
};

const productSlice = createSlice({
  name: "PRODUCT",
  initialState,
  reducers: {
    searchByName: (state, action: PayloadAction<string>) => {
      const searchString = action.payload
        const lowerCaseSearchString = unidecode(searchString.toLowerCase());
        const newSearchArr = products.filter((item) =>
          unidecode(item.name.toLowerCase()).includes(lowerCaseSearchString)
        );
        state.products = newSearchArr
        if (searchString == "") {
          state.products = products
        }
      }
    }
  },
);

export const { searchByName } = productSlice.actions;
const productReducer = productSlice.reducer;
export default productReducer;
