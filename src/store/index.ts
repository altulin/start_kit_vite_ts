import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./modal/modalSlice";

import { userApi } from "./user/userApi";

const store = configureStore({
  reducer: {
    modal: modalSlice,
    [userApi.reducerPath]: userApi.reducer,
  },
  devTools: process.env.NODE_ENV === "development",

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([userApi.middleware]),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
