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
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartType>) => {
      const productAdded = action.payload;
      const checkInCart = state.cart.findIndex(
        (purchase) => purchase.id === productAdded.id
      );
      if (checkInCart != -1) {
        state.cart[checkInCart].quantity = state.cart[checkInCart].quantity + 1;
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
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
const cartReducer = cartSlice.reducer;

export default cartReducer;

// export const addToCart = createAction<CartType>("cart/addToCart");
// export const removeFromCart = createAction<string>("cart/removeFromCart");

// const cartReducer = createReducer(initialState, (builder) => {
//   builder.addCase(addToCart, (state, action) => {
//     const productAdded = action.payload;
//     const checkInCart = state.cart.findIndex(
//       (purchase) => purchase.id === productAdded.id
//     );
//     if (checkInCart != -1) {
//       state.cart[checkInCart].quantity = state.cart[checkInCart].quantity + 1;
//     } else {
//       state.cart.push(productAdded);
//     }
//   });
//   builder.addCase(removeFromCart, (state, action) => {
//     const idInCart = action.payload;
//     const checkInCart = state.cart.findIndex((item) => item.id === idInCart);
//     if (checkInCart != -1) {
//       state.cart.splice(checkInCart, 1);
//     }
//   });
// });
