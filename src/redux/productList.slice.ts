/** @format */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ProductType } from "src/types/product.type";
import http from "./../../utils/http";

interface ProductsType {
  products: ProductType[];
}

const initialState: ProductsType = {
  products: [],
};

export const getproductList = createAsyncThunk(
  "product/getProductList",
  async (_, thunkAPI) => {
    const response = await http.get<ProductType[]>("products", {
      signal: thunkAPI.signal,
    });
    return response.data;
  }
);

const productSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getproductList.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

const productReducer = productSlice.reducer;
export default productReducer;
