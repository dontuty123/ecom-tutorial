/** @format */

import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartType } from "src/types/cart.type";
import http from "./../../utils/http";

interface CartsType {
  cart: CartType[];
}

const initialState: CartsType = {
  cart: [],
};

export const getPurchases = createAsyncThunk(
  "post/getPurchases",
  async (_, thunkAPI) => {
    const response = await http.get<CartType[]>("carts", {
      signal: thunkAPI.signal,
    });
    return response.data;
  }
);

export const addToCart = createAsyncThunk(
  "post/addToCart",
  async (body: CartType, thunkAPI) => {
    const response = await http.post<CartType>("carts", body, {
      signal: thunkAPI.signal,
    });
    return response.data;
  }
);

export const removeFromCart = createAsyncThunk(
  "post/removeFromCart",
  async (id: string) => {
    const response = await http.delete<string>(`carts/${id}`);
    return response.data;
  }
);

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPurchases.fulfilled, (state, action) => {
        state.cart = action.payload;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        const productAdded = action.payload;
        const checkInCart = state.cart.findIndex(
          (purchase) => purchase.id === productAdded.id
        );
        if (checkInCart != -1) {
          state.cart[checkInCart].quantity =
            state.cart[checkInCart].quantity + 1;
        } else {
          state.cart.push(productAdded);
        }
      })
      .addCase(removeFromCart.fulfilled, (state, action) => {
        // const idInCart = action.payload;
        // state.cart.filter((item) => item.id !== idInCart);
        const purchaseId = action.meta.arg;
        const deletePurchaseIndex = state.cart.findIndex(
          (item) => item.id === purchaseId
        );
        if (deletePurchaseIndex !== -1) {
          state.cart.splice(deletePurchaseIndex, 1);
        }
      });
  },
});

const cartReducer = cartSlice.reducer;

export default cartReducer;
