/** @format */
import {
  combineReducers,
  configureStore,
  PreloadedState
} from '@reduxjs/toolkit'
import cartReducer from "./cart.slice";
import postReducer from "./post.slice";
import productReducer from "./productList.slice";

// Create the root reducer independently to obtain the RootState type
const rootReducer = combineReducers({
  productReducer: productReducer,
  cartReducer: cartReducer,
  postReducer: postReducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState
  })
}
export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

