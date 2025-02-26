import { configureStore } from "@reduxjs/toolkit";
import { BaseApi } from "../BaseApi";

export const Store = configureStore({
  reducer: {
    [BaseApi.reducerPath]: BaseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(BaseApi.middleware),
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
