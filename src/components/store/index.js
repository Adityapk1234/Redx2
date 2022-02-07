import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./cart";
import cartItemSliceReducer from "./cart-slice";

const store = configureStore({
  reducer: { cart: cartSliceReducer, cartSlice: cartItemSliceReducer },
});

export default store;
