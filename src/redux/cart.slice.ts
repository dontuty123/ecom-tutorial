/** @format */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { cart } from "src/mockdata/cart";
import { CartType } from "src/types/cart.type";

interface CartsType {
  cart: CartType[];
}

const initialState: CartsType = {
  cart: cart,
};

const cartSlice = createSlice({
  name: "CART",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartType>) => {
      const productAdded = action.payload;
      const checkInCart = state.cart.findIndex(
        (purchase) => purchase.id === productAdded.id
      );
      if (checkInCart != -1) {
        state.cart[checkInCart].quantity =state.cart[checkInCart].quantity + productAdded.quantity;
      } else {
        state.cart.push(productAdded);
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const idInCart = action.payload;
      const checkInCart = state.cart.findIndex((item) => item.id === idInCart);
      if (checkInCart != -1) {
        state.cart.splice(checkInCart, 1);
      }
    },
    updateCart: (state, action: PayloadAction<CartType>) => {
      const productId = action.payload.product.id
      const purchaseUpdate = action.payload
      const indexToUpdate = state.cart.findIndex(item => item.product.id === productId)
      state.cart[indexToUpdate] = purchaseUpdate
    },
    deleteMany: (state, action: PayloadAction<CartType[]>) => {
      state.cart = action.payload
    }
  },
});

export const { addToCart, removeFromCart,updateCart, deleteMany } = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;