import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    addToWishlist: (state, action) => {
      state.push(action.payload);
      alert("success");
    },
    deleteFromWishlist: (state, action) => {
      return state.filter((item) => item.id != action.payload);
    },
   
  },
});
export const { addToWishlist, deleteFromWishlist} = wishlistSlice.actions; //This function can be used to dispatch the addToWishlist action.
export default wishlistSlice.reducer; //tu use store to update
