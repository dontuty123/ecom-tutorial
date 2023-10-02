/** @format */

import { createReducer, createAction } from "@reduxjs/toolkit";
import { CartType } from "../types/cart.type";
import { cart } from "../mockdata/cart";

interface CartsType {
  cart: CartType[];
}

const initialState: CartsType = {
  cart: cart,
};

export const addToCart = createAction<CartType>("cart/addToCart");
export const removeFromCart = createAction<string>("cart/removeFromCart");

const cartReducer = createReducer(initialState, (builder) => {
  builder.addCase(addToCart, (state, action) => {
    const productAdded = action.payload;
    const checkInCart = state.cart.findIndex(
      (purchase) => purchase.id === productAdded.id
    );
    if (checkInCart != -1) {
      state.cart[checkInCart].quantity = state.cart[checkInCart].quantity + 1;
    } else {
      state.cart.push(productAdded);
    }
  });
  builder.addCase(removeFromCart, (state, action) => {
    const idInCart = action.payload;
    const checkInCart = state.cart.findIndex((item) => item.id === idInCart);
    if (checkInCart != -1) {
      state.cart.splice(checkInCart, 1);
    }
  });
});

export default cartReducer;
