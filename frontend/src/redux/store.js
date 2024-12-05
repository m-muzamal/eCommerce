import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartSlice from "./Cart/cartSlice";
import userSlice from "./User/userSlice";

const persistCart = {
  key: "cart",
  storage,
};
const persistUser = {
  key: "user",
  storage,
};

const persistedCartReducer = persistReducer(persistCart, cartSlice);
const persistedUserReducer = persistReducer(persistUser, userSlice);

const store = configureStore({
  reducer: {
    cart: persistedCartReducer,
    user: persistedUserReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
export default store;
