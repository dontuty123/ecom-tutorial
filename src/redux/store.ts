/** @format */
import cartReducer from "./cart.slice";
import postReducer from "./post.slice";
import productReducer from "./productList.slice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  productReducer: productReducer,
  cartReducer: cartReducer,
  postReducer: postReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
