import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalPrice: 0, 
  totalItems: 0, 
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find((i) => i.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      state.totalPrice += item.price;
      state.totalItems += 1;
    },

    removeFromCart: (state, action) => {
      const id = action.payload;
      const itemToRemove = state.items.find((item) => item.id === id);

      if (itemToRemove) {
        state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
        state.totalItems -= itemToRemove.quantity;
      }

      state.items = state.items.filter((item) => item.id !== id);
    },

    incrementQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += 1;
        state.totalPrice += existingItem.price;
        state.totalItems += 1;
      }
    },

    decrementQuantity: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          state.totalPrice -= existingItem.price;
          state.totalItems -= 1;
        } else {
          state.totalPrice -= existingItem.price;
          state.totalItems -= 1;
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
