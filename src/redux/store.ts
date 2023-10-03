/** @format */
import cartReducer from "./cart.slice";
import postReducer from "./post.slice";
import productReducer from "./productList.slice";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    productReducer: productReducer,
    cartReducer: cartReducer,
    postReducer: postReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
