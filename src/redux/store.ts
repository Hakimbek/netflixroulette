import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./apiSlice";
import movieReducer from "./movieSlice";
import paginationReducer from "./paginationSlice";
import infoModalReducer from "./infoModalSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    movie: movieReducer,
    pagination: paginationReducer,
    infoModal: infoModalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
