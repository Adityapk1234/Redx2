import { createSlice } from "@reduxjs/toolkit";

const initialCartState = { items: [], totalquantity: 0, changed: false };

const cartItemSlice = createSlice({
  name: "cartItem",
  initialState: initialCartState,
  reducers: {
    replaceCart(state, action) {
      state.totalquantity = action.payload.totalquantity;
      state.items = action.payload.items;
    },

    addToCart(state, action) {
      const newItem = action.payload;
      const exisitingItem = state.items.find((item) => item.id === newItem.id);
      state.totalquantity++;
      state.changed = true;
      if (!exisitingItem) {
        state.items.push({
          name: newItem.title,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          id: newItem.id,
        });
      } else {
        exisitingItem.quantity++;
        exisitingItem.totalPrice = exisitingItem.totalPrice + newItem.price;
      }
    },

    removeFromCart(state, action) {
      const id = action.payload;
      const exisitingItem = state.items.find((item) => item.id === id);
      state.totalquantity--;
      state.changed = true;
      if (exisitingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        exisitingItem.quantity--;
        exisitingItem.totalPrice =
          exisitingItem.totalPrice - exisitingItem.price;
      }
    },
  },
});

export const cartSliceActions = cartItemSlice.actions;
export default cartItemSlice.reducer;
