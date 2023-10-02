/** @format */
import cartReducer from "./cart.reducer";
import productReducer from "./productList.reducer";

import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: { productReducer: productReducer, cartReducer: cartReducer },
});

export type RootState = ReturnType<typeof store.getState>;
