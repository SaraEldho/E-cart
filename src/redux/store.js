import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "../Pages/slice/wishlistSlice";
import cartSlice from "../Pages/slice/cartSlice";

export const store = configureStore({
  reducer: {
    wishlistReducer: wishlistSlice,
    addtocartReducer:cartSlice
  },
});
