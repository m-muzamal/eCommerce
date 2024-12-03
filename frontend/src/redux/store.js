import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});
