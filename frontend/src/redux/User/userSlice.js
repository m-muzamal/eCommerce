// src/redux/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  accessToken: null,
  allUsers: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
      state.accessToken = action.payload.accessToken;
    },
    logout: (state, action) => {
      if (state.user?.user._id === action.payload) {
        state.user = null;
        state.accessToken = null;
      }
    },
    setAllUsers: (state, action) => {
      state.allUsers = action.payload;
    },
    updateUserInStore: (state, action) => {
      const { id, isAdmin } = action.payload;
      const userIndex = state.allUsers.findIndex((user) => user._id === id);
      if (userIndex !== -1) {
        state.allUsers[userIndex].isAdmin = isAdmin;
      }
    },
  },
});

export const { setUser, logout, setAllUsers, updateUserInStore } =
  userSlice.actions;

export default userSlice.reducer;
